import React, { useEffect, useState } from 'react';
import "./SidebarChats.css";
import { Avatar } from "@material-ui/core";

function SidebarChats({id,name,addNewChat }) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        const random = crypto.randomUUID();
        const result = random.replace(/-/gm, '');
        setSeed(result);
    }, []);

    
    return !addNewChat ? (
        <>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat_info'>
                    <h2>{name}</h2>
                    <p>Last Message...</p>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className='sidebarChat'>
            </div>
        </>
    );
}
export default SidebarChats;
