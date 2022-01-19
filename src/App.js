import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCo from "./components/About/AboutCo";
import ContactMe from "./components/Contact/ContactMe";
import Ride from "./components/Ride/Ride";
import Careers from "./components/Careers/Careers";
import Home from "./components/Home/Home";
import useSticky from './Hooks/useSticky';

function App() {
    const {isSticky} = useSticky();
    return (
        <>
            <div className='App'>
                <Router>
                <div>
                    <Navbar sticky={isSticky}/>
                    </div>
                    <Routes>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about Co.' component={AboutCo} />
                        <Route exact path='/contactMe' component={ContactMe} />
                        <Route exact path='/ride' component={Ride} />
                        <Route exact path='/careers' component={Careers} />
                    </Routes>
                </Router>
                <Home />
            </div>
        </>
    );
}

export default App;