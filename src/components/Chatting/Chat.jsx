import React, { useState } from 'react';
import './Chat.css';
import ChatNav from "./Nav/ChatNav";
import ChatDesk from "./Chatdesk/ChatDesk";
import ChatBody from './ChatList/ChatBody';
import ChatLogin from './ChatLogin';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Chat() {
    const [state, setState] = useState(0);
    const user = useSelector((e) => e.reducer);
    function handleClick() {
        (state<=6) ? setState(state + 1) : setState(0);
    }
    return (
        <>
            <div className='container_chat'>
                <div className='container_body'>
                    {!user ? (
                        <ChatLogin />
                    ) : (
                        <>
                            <ChatNav name={handleClick} />
                            <Routes>
                                <Route exact path="/rooms/:roomId" element={<ChatDesk state={state} />} />
                                <Route exact path="/" element={<ChatDesk state={state} />} />
                            </Routes>
                            <ChatBody />
                            </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Chat;