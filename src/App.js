import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutCo from "./components/About/AboutCo";
import ContactMe from "./components/Contact/ContactMe";
import Ride from "./components/Ride/Ride";
import Careers from "./components/Careers/Careers";
import Home from "./components/Home/Home";
import ContactUs from "./components/Contact/ContactUs";
import Resume from "./components/About/Resume";
import store from "./store";
store.subscribe(()=>console.log(store.getState()));

function App() {
    return (
        <>
            <div className='App'>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/aboutCo' element={<AboutCo/>} />
                        <Route path='/contactMe' element={<ContactMe/>} />
                        <Route path='/ride' element={<Ride/>} />
                        <Route path='/careers' element={<Careers/>} />
                        <Route path='/contactUs' element={<ContactUs/>}/>
                        <Route path='/resume' element={<Resume/>}/>
                        {/* <Route component={Error}/> */}
                    </Routes>
            </div>
        </>
    );
}

export default App;