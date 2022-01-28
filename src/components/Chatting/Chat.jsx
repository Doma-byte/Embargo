//React
//Firebase Firestore Realtime db
//Material UI
//React Router
//React Context API
//Redux
//Google Authentication
//Deploy using Firebase

import React, { useState } from 'react';
import './Chat.css';
import ChatNav from "./Nav/ChatNav";
import ChatDesk from "./Chatdesk/ChatDesk";
import ChatBody from './ChatList/ChatBody';
import ChatLogin from './ChatLogin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Chat() {
    const [state, setState] = useState(0);
    const user = useSelector((e) => e.reducer);
    function handleClick() {
        (state<=6) ? setState(state + 1) : setState(0);
    }
    return (
        <>
            <div className='container'>
                <div className='container_body'>
                    {!user ? (
                        <ChatLogin />
                    ) : (
                        <Router>
                            <ChatNav name={handleClick} />
                            <Routes>
                                <Route exact path="/rooms/:roomId" element={<ChatDesk state={state} />} />
                                <Route exact path="/" element={<ChatDesk state={state} />} />
                            </Routes>
                            <ChatBody />
                        </Router>
                    )}
                </div>
            </div>
        </>
    );
}

export default Chat;