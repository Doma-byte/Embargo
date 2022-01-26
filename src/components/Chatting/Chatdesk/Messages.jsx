import React,{useState} from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVertOutlined";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import "./Messages.css";

function Messages({props}) {
    const [input, setInput] = useState("");
    const icons = [
        {
            id:0,logoName:SearchOutlined
        },{
            id:1,logoName:AttachFile
        },{
            id:2,logoName:MoreVert
        }
    ];

    const sendMessage = (e)=>{
        e.preventDefault();
        console.log("You typed in ??", input);
        setInput('');
    }
    return (
        <div className='messages'>
            <div className='chat_header'>
            <Avatar
            src={`https://avatars.dicebear.com/api/human/${props}.svg`}
            sx={{ width: 56, height: 56 }}
            />
            <div className='chat_headerInfo'>
            <h2>Room name</h2>
            <p>Last Seen at...</p>
            </div>
            <div className='chat_headerRight'>
            {icons.map( e => <IconButton key={e.id}><e.logoName fontSize='small'/></IconButton>)}
            </div>
            </div>
            <div className='chat_body'>
            <p className={`chat_message ${true && 'chat_receiver'}`}>
            <span className='chat_name'>Dikshit Singh</span>
            Hey Guys...
            <span className='chat_timestamps'>
            3:52pm
            </span>
            </p>
            </div>
            <div className='chat_footer'>
            <IconButton><InsertEmoticonIcon/></IconButton>
            <form>
            <input type="text" placeholder='Type a message' value={input} onChange={e=>setInput(e.target.value)}/>
            <button type='submit' onClick={sendMessage}>Send a Message</button>
            </form>
            <IconButton><MicIcon/></IconButton>
            </div>
        </div>
    )
}

export default Messages;
