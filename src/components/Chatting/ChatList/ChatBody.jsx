import {IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import "./ChatBody.css";
import { Avatar } from "@material-ui/core";
import SidebarChats from './SidebarChats';
import db from '../../../Firebase';
import AnimationLottie from '../../../AnimationLottie';
import AnimationChat from "../../../lotties/chat.json";
import AnimationComingSoon from "../../../lotties/coming soon.json";

function ChatBody() {
    const [click, setClick] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [shift, setShift] = useState(true);
    useEffect(() => {
        const unsubscribe = db.collection('Rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })
            ))
        ));
        return () => {
            unsubscribe();
        }
    }, [])
    useEffect(() => {
    }, [click]);
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='_1X8rk'>
                <IconButton>
                    <Avatar src="https://img.icons8.com/color/48/000000/motorbike-helmet.png" />
                    </IconButton>
                </div>
                <div className='sidebar_headerRight'>
                    <button className="glass-button1" onClick={()=>setShift(true) }>Messages</button>
                    <button className="glass-button2" onClick={()=>setShift(false)}>Rules</button>
                </div>
            </div>
            {/* <div className='sidebar_search' tabIndex="-1">
                <div className='sidebar_searchContainer'>
                    {click ? <ArrowBackIcon /> : <SearchOutlined />}
                    <input placeholder='Search or start a new chat' type='text' onFocus={handleInput} onBlur={() => setClick(!click)} />
                </div>
            </div> */}
            {(shift)&&<div className='sidebar_chats'>
                {rooms.map(rooms => (<SidebarChats key={rooms.id} id={rooms.id} name={rooms.data.name} />))}
            </div>}
            {(!shift)&&<div className="chats_rules sidebar_chats">
        <AnimationLottie name={AnimationComingSoon} height={250} width={400}/>
        <AnimationLottie name={AnimationChat} height={250} width={300}/>
            </div>}
        </div>
    )
}

export default ChatBody;