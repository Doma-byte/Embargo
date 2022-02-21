import React, { useState, useEffect } from 'react';
import "./RideSelector.css";
import { carList } from "../../../carList";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '@mui/material';

function RideSelector({ pickup, dropoff, click }) {
    const [rideDuration, setRideDuration] = useState(0);
    useEffect(() => {
        if (pickup && dropoff) {
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${dropoff[0]},${dropoff[1]}?access_token=pk.eyJ1IjoiZGlrc2hpdDIzMzJrIiwiYSI6ImNrd2RmZzZmeDI2bXAyb3BhZjF1NzE2dXUifQ.uO1S9-rLDi9Izo3vFVIgEg`)
                .then(res => res.json())
                .then(data => {
                    setRideDuration(data.routes[0].duration / 100)
                })
        }
    }, [pickup, dropoff]);

    return (
        <>
            <div className="title">
                <IconButton onClick={click}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                Choose a ride, or swipe up for more
            </div>
            <div className="carPr">
                {
                    carList.map((car, index) => (
                        <>
                            <div className="carList">
                                <div className="car" key={index}>
                                    <img src={car.imgUrl} alt='carFace' />
                                </div>
                                <div className="carDetails">
                                    <div className="service">
                                        {car.service}
                                    </div>
                                    <div className="time">
                                        {4 * (Math.floor(Math.random() * 6) + 1)} min away
                                    </div>
                                </div>
                                <div className="price">
                                    {'₹' + ((rideDuration * car.multiplier * 3)).toFixed(2)}
                                </div>
                            </div>
                        </>))
                }
            </div>
        </>
    );
}

export default RideSelector;
