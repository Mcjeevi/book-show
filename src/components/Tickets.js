import React from "react";
import './Ticket.css';

const Tickets = (props) => {
    const { data, seatsData, form, handleChange, next, back } = props;
    const details = {...form, ...{seats: seatsData}};
    // debugger
    return (
        <div className="paymentCard p-4">
            <div className="cardWrap clearfix shadow">
                <div className="card cardLeft d-flex">
                    <div className="ticketImg">
                        <img src={data.image} alt={data.movie} />
                    </div>
                    <div className="ticketData">
                        <h5 className="movieName">{data.movie}</h5>
                        <h6>{data.theater}</h6>
                        <h6>{data.time}</h6>
                        <p><span>Quantity:</span> {data.tickets}</p>
                        <h4>
                            {seatsData.map((item, i) => (<span key={i}>{i > 0 && ','}{item}</span>))}
                        </h4>
                        <div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="text-start">Ticket Price</td>
                                        <td className="text-end">Rs. {data.tickets * 175}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"> <p className="mb-0">Convenience fees</p> <p className="mb-0 txt-gray">Incl. of Tax</p> </td>
                                        <td className="text-end">Rs. 46.20</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"> <p className="mb-0 text-uppercase">Amount Paid </p> </td>
                                        <td className="text-end"> <b> Rs. {data.tickets * 175 + 46.20}</b></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="card cardRight d-flex align-items-center justify-content-center">

                    <div className="number">
                        <h3 className="text-uppercase txt-gray">Booking ID</h3>
                        <span>W6VXR6T</span>
                    </div>
                </div>

            </div>
            <div className="mt-2">
                <div className="container">
                    <div className="txt-center" style={{overflowX: 'auto'}}>
                        <button className="mx-1" onClick={back}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Tickets;