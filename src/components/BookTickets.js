import React, { useState, useEffect } from "react";
import BookMySeats from "./BookMySeats";
import Info from "./Info";
import Showdetails from "./ShowDetails";
import Tickets from "./Tickets";

const BookTickets = (props) => {
    const { handleStepChange } = props;
    const [currentStep, setCurrentStep] = useState(2);
    const [formData, setFormData] = useState({
        city: '',
        movie: '',
        theater: '',
        tickets: '',
        time: '',
    });
    const [seats, setSeats] = useState([]);
    const [shows, setShows] = useState([]);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSeatChange = (seat) => {
        setSeats(...seats, seat);
    };
    const handleShow = (show) => {
        setShows(...shows, show);
    };
    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const back = () => {
        setCurrentStep(currentStep - 1);
    };

    useEffect(() => {
        handleStepChange(currentStep)
    }, [currentStep])
    switch (currentStep) {
        case 1:
            return (
                <Showdetails
                    data={formData}
                    handleChange={handleChange}
                    handleShow={handleShow}
                    next={next}
                />
            );
        case 2:
            return (
                <BookMySeats
                    data={formData}
                    handleSeatChange={handleSeatChange}
                    next={next}
                    back={back} />
            );
        case 3:
            return (
                <Tickets
                    data={shows}
                    form={formData}
                    seatsData={seats}
                    handleChange={handleChange}
                    next={next}
                    back={back}
                />
            );
        default:
            return <Info data={formData} back={back} />;
    }
};
export default BookTickets;