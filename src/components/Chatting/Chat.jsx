//React
//Firebase Firestore Realtime db
//Material UI
//React Router
//React Context API
//Redux
//Google Authentication
//Deploy using Firebase

import React,{useState} from 'react';
import './Chat.css';
import ChatNav from "./Nav/ChatNav";
import ChatDesk from "./Chatdesk/ChatDesk";
import ChatBody from './ChatList/ChatBody';

function Chat() {
    const [state, setState] = useState(0);
    function handleClick(){
        if(state<5){
        setState(state+1);
        }else{
            setState(0);
        }
    }
    return (
        <>
        <div className='container'>
        <div className='container_body'>
        <ChatNav name={handleClick}/>
        <ChatDesk state={state}/>
        <ChatBody/>
        </div>
        </div>
        </>
    );
}

export default Chat;
