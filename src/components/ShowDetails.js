import React, { useState, useEffect } from "react";
import axios from 'axios';

const ticketsList = [1, 2, 3, 4];
const showTimings = [{ time: '9.30 AM' }, { time: '1 PM' }, { time: '3.30 PM' }, { time: '7 PM' }, { time: '10 PM' }];

const Showdetails = (props) => {
    const { data, handleChange, handleShow, next } = props;

    const [cityData, setCityData] = useState([]);
    const [theaterList, setTheaterList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const [fields, setFields] = useState([]);
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/McJeevi/demo/cities').then(response => {
            setCityData(response.data)
        });

        axios.get('https://my-json-server.typicode.com/McJeevi/demo/movies').then(response => {
            setMoviesList(response.data)
        });
    }, []);

    const ChangeteCity = (e) => {
        axios.get('https://my-json-server.typicode.com/McJeevi/demo/theaters?city_id=' + e.target.value).then(response => {
            setTheaterList(response.data)

        });
        handleChange(e);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            let fields = {};
            fields["city"] = cityData.filter((item) => item.id === data.city)[0].city;
            fields["movie"] = moviesList.filter((item) => item.id === data.movie)[0].movie;
            fields["theater"] = theaterList.filter((item) => item.id === data.theater)[0].theatre;
            fields["image"] = moviesList.filter((item) => item.id === data.movie)[0].poster_path
            fields["tickets"] = data.tickets;
            fields["time"] = data.time;
            setFields(fields);
            // alert("Form submitted");
            handleShow(fields)
            next()

        }

    }
    const validateForm = () => {

        let fields = data;
        let errors = {};
        let formIsValid = true;

        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "*Please select your city.";
        }
        if (!fields["theater"]) {
            formIsValid = false;
            errors["theater"] = "*Please select your theater.";
        }
        if (!fields["movie"]) {
            formIsValid = false;
            errors["movie"] = "*Please select your movie.";
        }
        if (!fields["tickets"]) {
            formIsValid = false;
            errors["tickets"] = "*Please select your tickets.";
        }
        if (!fields["time"]) {
            formIsValid = false;
            errors["time"] = "*Please select your time.";
        }



        setErrors(errors);
        return formIsValid;


    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="container-fluid form-group dropdn">
                            <div className="row mb-2">
                                <div className="col-4">City</div>
                                <div className="col-8">
                                    <select className="form-control" name="city" value={data.city} onChange={ChangeteCity}  >
                                        <option defaultValue>City</option>
                                        {cityData.map((e, key) => {
                                            return <option key={key} value={e.id}>{e.city}</option>;
                                        })}
                                    </select>
                                    <div className="errorMsg">{errors.city}</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-4">Theater</div>
                                <div className="col-8">
                                    <select className="form-control" name="theater" value={data.theater} onChange={handleChange}>
                                        <option defaultValue>Theater</option>
                                        {theaterList.map((e, key) => {
                                            return <option key={key} value={e.id}>{e.theatre}</option>;
                                        })}
                                    </select>
                                    <div className="errorMsg">{errors.theater}</div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-4">Movie</div>
                                <div className="col-8">
                                    <select className="form-control" name="movie" value={data.movie} onChange={handleChange}>
                                        <option defaultValue>Movie</option>
                                        {moviesList.map((e, key) => {
                                            return <option key={key} value={e.id}>{e.movie}</option>;
                                        })}
                                    </select>
                                    <div className="errorMsg">{errors.movie}</div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-4">Tickets</div>
                                <div className="col-8">
                                    <select className="form-control" name="tickets" value={data.tickets} onChange={handleChange}>
                                        <option defaultValue>Tickets</option>
                                        {ticketsList.map((e, key) => {
                                            return <option key={key} value={e}>{e}</option>;
                                        })}
                                    </select>
                                    <div className="errorMsg">{errors.tickets}</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-4">Show Time</div>
                                <div className="col-8">
                                    <select className="form-control" name="time" value={data.time} onChange={handleChange}>
                                        <option defaultValue>Time</option>
                                        {showTimings.map((e, key) => {
                                            return <option key={key} value={e.time}>{e.time}</option>;
                                        })}
                                    </select>
                                    <div className="errorMsg">{errors.time}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn btn-primary float-end" type="submit">Next</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    );
};
export default Showdetails;