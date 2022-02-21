import React from 'react';
import "./FirstIntro.css";
import { NavLink } from 'react-router-dom';

function FirstIntro() {
  return (<>
    <div className="ride_booking">
                        <div className='ride_headPr'>
                            <div className="ride_heading">
                                <h2>Request a ride now</h2>
                            </div>
                        </div>
                        <div className='ride_inputPr'>
                            <div className='ride_input'>
                                <input type="text" placeholder='Just pickup location' aria-autocomplete='list' autoComplete='off' className='in' readOnly="readonly" />
                            </div>
                        </div>
                        <div className='ride_inputPr2'>
                            <div className='ride_input2'>
                                <input type="text" placeholder='Enter destination' aria-autocomplete='list' autoComplete='off' className='in2' readOnly="readonly" autoFocus/>
                                <i></i>
                            </div>
                        </div>
                        <div className='ride_buttonPr'>
                            <div className="ride_button">
                            <div className='ride_a'>
                            <a href='https://embargo-maps.web.app/'>Request now</a>
                            </div>
                            </div>
                            <div className="ride_button">
                            <div className='ride_b'>
                            <NavLink exact="true" to="/" style={{textDecoration:"none", color:"#111"}}>Back now</NavLink>
                            </div>
                            </div>
                        </div>
  </div>
  </>);
}

export default FirstIntro;