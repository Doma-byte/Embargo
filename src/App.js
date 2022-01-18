import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Ride from "./components/Ride";
import Careers from "./components/Careers";
import Home from "./components/Home";
import { StickyNav } from 'react-js-stickynav';
import 'react-js-stickynav/dist/index.css';

function App() {
    return (
        <>
            <div className='App'>
                <Router>
                    <StickyNav length='40'><Navbar /></StickyNav>
                    <Routes>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/aboutMe' component={About} />
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