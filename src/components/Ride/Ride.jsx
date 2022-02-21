import React, { useState } from 'react';
import "./Ride.css";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BusinessIcon from '@mui/icons-material/Business';
import { IconButton } from '@mui/material';
import FirstIntro from "./Overview/FirstIntro";
import SecIntro from './Overview/SecIntro';

function Ride() {
    const [change, setChange] = useState(true);

    return (<>
        <div className='ride_container'>
            <div className='ride_back'>
                <div className='ride_modal'>
                    <div className='ride_nav'>
                        <div className='ride1wrap' onClick={() => setChange(true)}>
                            <div className="icon1">
                                <IconButton>
                                    <TwoWheelerIcon fontSize='large' />
                                </IconButton>
                            </div>
                            <div className='icon1_h'>
                                <span>Ride</span>
                            </div>
                        </div>
                        <div className='ride2wrap' onClick={() => setChange(false)}>
                            <div className="icon2">
                                <IconButton>
                                    <BusinessIcon fontSize="large" />
                                </IconButton>
                            </div>
                            <div className='icon2_h'>
                                <span>Drive</span>
                            </div>
                        </div>
                    </div>
                    {(change) ? <FirstIntro /> : <SecIntro />}
                </div>
            </div>
        </div>
    </>)
}

export default Ride;
