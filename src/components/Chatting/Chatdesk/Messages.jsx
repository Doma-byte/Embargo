import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVertOutlined";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import "./Messages.css";
import db from "../../../Firebase";
import { useSelector } from "react-redux";
import firebase from 'firebase/app';

function Messages(props) {
    const { random, chatdiff, messages, roomId } = props;
    const [input, setInput] = useState("");
    const [name, setName] = useState('');
    const user = useSelector((e) => e.reducer);
    useEffect(() => {
        if (random) {
            setName(`john ${random}`);
        }
    }, [random]);

    const handleChange = React.useCallback((event) => setInput(event.target.value), [setInput]);

    const icons = [
        {
            id: 0, logoName: SearchOutlined
        }, {
            id: 1, logoName: AttachFile
        }, {
            id: 2, logoName: MoreVert
        }
    ];

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed in ??", input);
        db.collection('Rooms').doc((roomId) ? roomId : "J5P5OyyfIBKYrOa96U9d").collection('messages').add({
            message: input,
            name: user.user.displayName,
            timestamps: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }
    return (
        <div className='messages'>
            <div className='chat_header'>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${name}.svg`}
                    sx={{ width: 56, height: 56 }}
                    style={{ cursor: "pointer" }}
                />
                <div className='chat_headerInfo'>
                    <h2>{chatdiff}</h2>
                    <p>Last Seen at {new Date(messages[messages.length - 1]?.timestamps)?.toLocaleTimeString()}</p>
                </div>
                <div className='chat_headerRight'>
                    {icons.map(e => <IconButton key={e.id}><e.logoName fontSize='small' /></IconButton>)}
                </div>
            </div>
            <div className='chat_body'>
                <div className='_33LGR' tabIndex="0">
                    <div className='_2AL2u'></div>
                    <div className='y8WcF' tabIndex="-1" role="region">
                        {messages.map((e) => (
                            <p className={`chat_message ${e.name === user.user.displayName && 'chat_receiver'}`}>
                                <span className='chat_name'>{e.name}</span>
                                {e.message}
                                <span className='chat_timestamps'>
                                    {new Date(e.timestamps)?.toLocaleTimeString()}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>

            </div>
            <div className='chat_footer'>
                <div className='chat_footer1'>
                    <div className='chat_footer2'>
                        <div className='meIcon1'>
                            <IconButton><InsertEmoticonIcon /></IconButton>
                        </div>
                        <div className='meInput'>
                            <form>
                                <input type="text" placeholder='Type a message' value={input} onChange={handleChange} />
                                <button type='submit' onClick={sendMessage}>Send a Message</button>
                            </form>
                        </div>
                        <div className='meIcon2'>
                            <IconButton><MicIcon /></IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
