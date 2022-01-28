import React, { useEffect, useState } from 'react';
import "./SidebarChats.css";
import { Avatar } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import db from '../../../Firebase';
import { Icon } from '@mui/material';

function SidebarChats({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        const random = crypto.randomUUID();
        const result = random.replace(/-/gm, '');
        setSeed(result);
    }, []);

    useEffect(() => {
        if (id) {
            db.collection('Rooms').doc(id).collection('messages').orderBy('timestamps', 'desc').onSnapshot(snapshot => (
                setMessage(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [id]);

    return !addNewChat ? (
        <>
            <NavLink exact="true" to={`/rooms/${id}`} style={{ textDecoration: 'none', paddingLeft: 5, color: "#111" }}>
                <div className='sidebarChat'>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                    <div className='sidebarChat_info'>
                        <h2 style={
                            {
                                fontSize: "16px",
                                fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif"
                            }
                        }>{name}</h2>
                        <p style={
                            {
                                fontSize: "13.5px",
                                fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif"
                            }
                        }>{(message[0]?.message)}</p>
                    </div>
                </div>
            </NavLink>
        </>
    ) : (
        <>
            <div className='sidebarChat'>
            </div>
        </>
    );
}
export default SidebarChats;
