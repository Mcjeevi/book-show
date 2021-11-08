import React, { useEffect, useState } from 'react';
import axios from 'axios';



const bookedSeats = ['A1', 'A2']

const SeatBooking = (props) => {
    const { data, handleSeatChange, next, back } = props;

    const [selectingSeats, setSelectingSeats] = useState([]);

    const choiceSeat = (event) => {
        if (selectingSeats.includes(event.target.value)) {
            const newArray = selectingSeats.filter(e => e !== event.target.value)
            setSelectingSeats(newArray)
        } else {
            const newArray = [...selectingSeats, event.target.value]
            if (newArray.length > parseInt(data.tickets)) {
                alert('Selected tickets only ' + data.tickets)

                event.target.checked = false
            } else {
                setSelectingSeats(newArray)
            }

        }

    };

    useEffect((item) => {

        setSelectingSeats(bookedSeats)
    }, [])
    

    const selectSeats = () => {
        const selected = selectingSeats
        if (selected.length !== 0) {
            handleSeatChange(selected)
            next()
        }
        else {
            alert('Please Select Seats')
        }
    };

    const getSeatObject = (seatNumber) => {

        if (bookedSeats.includes(seatNumber)) {
            return bookedSeats.filter(thisSeat => thisSeat === seatNumber);
        }
    };

    const seatsColumns = ['1', '2', '3', '4', '5', '6', '', '7', '8', '9', '10', '11', '12'];
    const seatsRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
    const seatsGenerator = () => {
        return (
            <table id="seatsBlock">
                <tbody>
                    {
                        seatsRows.map((row, index) =>
                            row === ''
                                ?
                                <tr key={index} className="seatVGap" />
                                :
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumns.map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} className="seatGap" />
                                                :
                                                <td key={index}>
                                                    <input onChange={choiceSeat} disabled={getSeatObject(`${row}${column}`) ? getSeatObject(`${row}${column}`) : false} name={`${row}${column}`} type="checkbox" className="seats"
                                                        id={`${row}${column}`} value={`${row}${column}`}
                                                    />
                                                </td>
                                            // onClick = {(e) => choiceSeat(`${row}${column}`, e.target.checked)}
                                        )
                                    })}
                                </tr>)
                    }
                </tbody>
            </table>
        );
    };
    return (
        <div>
            <div>
                <div className="container">

                    <div className="w3ls-reg" style={{ paddingTop: '0px' }}>
                        <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                            {seatsGenerator()}
                            {/* <div className="screen">
                                <h2 className="wthree">Screen this way</h2>
                            </div> */}
                            <button className="mx-1" onClick={back}>Back</button>
                            <button className="mt-3" onClick={() => { selectSeats() }}>Confirm Selection</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatBooking;