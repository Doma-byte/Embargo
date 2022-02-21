import React, { useRef, useState, useEffect } from 'react';
import "./Map.css";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import AnimationLocation from "../../../lotties/location.json";
import AnimationLottie1 from "../../../lotties/manbike.json";
import AnimationLottie3 from "../../../lotties/reserve1.json";
import AnimationLottie4 from "../../../lotties/car1.json";
import AnimationLottie from "../../../AnimationLottie";
import AnimationCycle from "../../../lotties/cycle.json";
import AnimationScooter from "../../../lotties/scooter.json";
import AnimationRickshaw from "../../../lotties/rickshaw.json";
import { IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RideSelector from "./RideSelector";
mapboxgl.accessToken = 'pk.eyJ1IjoiZGlrc2hpdDIzMzJrIiwiYSI6ImNrd2RmZzZmeDI2bXAyb3BhZjF1NzE2dXUifQ.uO1S9-rLDi9Izo3vFVIgEg';

export default function Map() {
    const [change, setChange] = useState(false);
    const [pickup, setPickup] = useState();
    const [dropoff, setDropoff] = useState();
    const [pickInput, setPickInput] = useState("");
    const [dropInput, setDropInput] = useState("");
    const [submit, setSubmit] = useState(false);
    const [checker, setChecker] = useState(true);
    useEffect(() => {
    }, [change]);
    const getPickupCoordinates = () => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${(submit) ? ((pickInput) ? pickInput : "Delhi") : "Delhi"}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGlrc2hpdDIzMzJrIiwiYSI6ImNrd2RmZzZmeDI2bXAyb3BhZjF1NzE2dXUifQ.uO1S9-rLDi9Izo3vFVIgEg",
                limit: 1
            }))
            .then(response => response.json())
            .then(data => {
                setPickup(data.features[0].center);
            })
    }
    function handleClick() {
        setSubmit(true);
        setChecker(false);
        getPickupCoordinates();
        getDropCoordinates();
    }
    function handleClick1() {
        setChecker(true);
    }
    const getDropCoordinates = () => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${(submit) ? ((dropInput) ? dropInput : "Faridabad") : "Faridabad"}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGlrc2hpdDIzMzJrIiwiYSI6ImNrd2RmZzZmeDI2bXAyb3BhZjF1NzE2dXUifQ.uO1S9-rLDi9Izo3vFVIgEg",
                limit: 1
            }))
            .then(response => response.json())
            .then(data => {
                setDropoff(data.features[0].center);
            })
    }
    const mapContainer = useRef(null);
    // const map = useRef(null);
    const [lng, setLng] = useState(72.5029);
    const [lat, setLat] = useState(24.3691);
    const [zoom, setZoom] = useState(4);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [72.5029, 24.3691],
            zoom: 4,
        })
        if (pickup) {
            addToMap(map, pickup);
        }
        if (dropoff) {
            addToMap(map, dropoff)
        }
        if (pickup && dropoff) {
            map.fitBounds([
                pickup,
                dropoff
            ], {
                padding: 60,
            })
            setLng(dropoff[0]);
            setLat(dropoff[1]);
        }
    }, [pickup, dropoff]);

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    return (
        <>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" style={{ width: "100%", height: "100vh", zIndex: "0" }} />
            <div className="map_modal">
                <div className="mapModal_navPr">
                    <div className="mapModal_nav">
                        <div className="secondlinePr">
                            <div className="secondline">Where we can <br />pick you up?<br />
                                <span style={{ fontSize: "16px", fontWeight: "500" }}>Available in under 10 min</span></div>
                            <div className="secondline_lottie">
                                <AnimationLottie name={AnimationLocation} height={115} width={150} />
                            </div>
                        </div>
                    </div>
                </div>
                {(change) ? (<><div className='action'>
                    <div className='action_child' onClick={() => setChange(false)}>
                        <AnimationLottie name={AnimationLottie4} height={70} width={100} />
                        <span>Car</span>
                    </div>
                    <div className='action_child' onClick={() => setChange(false)}>
                        <AnimationLottie name={AnimationLottie1} height={70} width={100} />
                        <span>Bike</span>
                    </div>
                    <div className='action_child' onClick={() => setChange(false)}>
                        <AnimationLottie name={AnimationRickshaw} height={70} width={100} />
                        <span>TukTuk</span>
                    </div>
                </div>
                    <div className='action'>
                        <div className='action_child' onClick={() => setChange(false)}>
                            <AnimationLottie name={AnimationScooter} height={70} width={100} />
                            <span>Scooter</span>
                        </div>
                        <div className='action_child' onClick={() => setChange(false)}>
                            <AnimationLottie name={AnimationCycle} height={70} width={100} />
                            <span>Cycle</span>
                        </div>
                        <div className='action_child' onClick={() => setChange(false)}>
                            <AnimationLottie name={AnimationLottie3} height={70} width={100} />
                            <span>Reserve</span>
                        </div>
                    </div>
                    <div className='destination'>
                        <span>Book Now</span>
                    </div>
                </>) : (checker) ? (<>
                    <div className='sec_containerPr'>
                        <div className="backbutton">
                            <IconButton onClick={() => setChange(true)}>
                                <KeyboardBackspaceIcon fontSize='large' />
                            </IconButton>
                        </div>
                        <div className='sec_container'>
                            <div className="input">
                                <div className='circle'>
                                    <img src='https://img.icons8.com/ios/50/9CA3AF/filled-circle.png' alt='circle' />
                                </div>
                                <div className='line'>
                                    <img src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' alt='line' />
                                </div>
                                <div className='square'>
                                    <img src='https://img.icons8.com/windows/32/000000/square-full.png' alt='square' />
                                </div>
                            </div>
                            <div className='type'>
                                <input
                                    type="text"
                                    placeholder='Enter pickup Location'
                                    value={pickInput}
                                    onChange={(e) => setPickInput(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder='Where to?'
                                    value={dropInput}
                                    onChange={(e) => setDropInput(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="savedPlaces">
                            <img src="https://img.icons8.com/material-outlined/24/000000/star--v2.png" alt="star" />
                            <p>
                                Saved Places
                            </p>
                        </div>
                        <div className="confirmLocation">
                            <div className="confirm_button">
                                <a href='#/' text="confirm now" className='confirm' onClick={handleClick}>
                                    Confirm Locations
                                </a>
                            </div>
                        </div>
                    </div>
                </>) : (<>
                    <div className="ride_container">
                        <div className="ride_selector">
                            <RideSelector pickup={pickup} dropoff={dropoff} click={handleClick1} />
                        </div>
                        <div className="confirmRequest">
                            <div className="RequestButton">
                                <span className='confirm'>
                                    Confirm Request
                                </span>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </>
    );
}