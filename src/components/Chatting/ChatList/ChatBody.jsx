import { IconButton } from '@mui/material';
import React,{useState,useEffect} from 'react';
import "./ChatBody.css";
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import SidebarChats from './SidebarChats';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import db from '../../../Firebase';

function ChatBody() {
    const [click, setClick] = useState(false);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe =  db.collection('Rooms').onSnapshot(snapshot=>(
            setRooms(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data()
            })))
        ));
        return()=>{
            unsubscribe();
        }
    }, [])
    function handleInput(){
        setClick(!click);
        console.log("I clicked");
    }
    useEffect(() => {
    }, [click])
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar />
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    {click? <ArrowBackIcon /> : <SearchOutlined />}
                    <input placeholder='Search or start a new chat' type='text' onFocus={handleInput} onBlur={()=>setClick(!click)}/>
                </div>
            </div>
            <div className='sidebar_chats'>
                {rooms.map(rooms=>(<SidebarChats key={rooms.id} id={rooms.id} name={rooms.data.name}/>))}                
            </div>
        </div>
    )
}

export default ChatBody;