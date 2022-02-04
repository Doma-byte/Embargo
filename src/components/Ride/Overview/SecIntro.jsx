import React from 'react';
import "./SecIntro.css";
function SecIntro() {
    return (<>
        <div className="ride_booking">
            <div className='ride_headPr'>
                <div className="ride_heading">
                    <h2>Serve as a driver & get paid</h2>
                </div>
            </div>
            <div className='ride_paraPr'>
                <div className="ride_p">
                    <p>Help us as a driver and be responsible for our growth.</p>
                </div>
            </div>

            <div className='secIntro_buttonPr'>
                <div className="secIntro_button">
                    <div className="secIntro_button">
                        <span className='ride_b'>
                            Sign up to drive
                        </span>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <span>Contact us to learn more</span>
            </div>
        </div>
    </>);
}

export default SecIntro;
