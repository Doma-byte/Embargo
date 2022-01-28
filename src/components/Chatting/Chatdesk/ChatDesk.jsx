import React, { useState, useEffect } from 'react';
import "./ChatDesk.css";
import Lottie from 'react-lottie';
import AnimationM1 from "../../../lotties/music1.json";
import Messages from "./Messages";
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import db from "../../../Firebase";
import { useParams } from "react-router-dom";

export default function ChatDesk(props) {
  const [index, setIndex] = useState(0);
  const RId = "J5P5OyyfIBKYrOa96U9d";
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();

  const [rName, setRName] = useState("");
  useEffect(() => {
    const usersRef = db.collection('Rooms').doc((roomId) ? roomId : RId)
    usersRef.get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          usersRef.onSnapshot((snapshot) => {
            setRName(snapshot.data().name)
          });
          usersRef.collection('messages').orderBy('timestamps', 'asc').onSnapshot(snapshot => (
            setMessages(snapshot.docs.map(doc => doc.data()))
          ))
        }
      });
  }, [roomId]);
  useEffect(() => {
    setIndex(props.state);
  }, [props]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationM1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const id = crypto.randomUUID();
  const random = id.replace(/-/gm, '');
  const createChat = () => {
    const roomName = prompt("Please enter Name for the chat");
    if (roomName) {
      db.collection('Rooms').add({
        name: roomName,
      });
    }
  };
  const playList = [
    {
      id: 0, link: '4lOn1K7gJoGY7YW3mYLpAl'
    },{  
      id: 1, link: '6RMnnZGeUvLS3Et9yc4Qml'
    }, {
      id: 2, link: "1waH72O63GYCYkezgWenHQ"
    }, {
      id: 3, link: '7vyQFVJrDLdA8tf3rTGy0x'
    }, {
      id: 4, link: '4lAeYsz1s9LiHWgPElQIl2'
    }, {
      id: 5, link: '2vxn1tiTMS09lEk1I0EI5w'
    }, {
      id: 6, link: '53dfIVn8ybAjC4P6DCPTpv'
    },{
      id: 7, link: '2PuiCBD8mcBKu8VtBcTwcs'
    }
  ]
  return (
    <div className='VideoLines'>
      <div className='firstDiv'>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <h3>Overview of new real estate proposals</h3>
      </div>
      <div className='userBase'>
        <p>Total No. of users: <span className="total">256</span></p>
        <br />
        <p>Current Online users: <span className="online">92</span></p>
        <br />
        <h5>Add NewChat: </h5>
        <span className="button"><SmartButtonIcon fontSize='large' onClick={createChat} /></span>
      </div>

      <div className='videoContainer'>
        <Messages random={random} chatdiff={rName} messages={messages} roomId={roomId} />
      </div>

      <div className='videoFooter'>
        {<Lottie
          options={defaultOptions}
          height={100}
          width={150}
        />}
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playList[index].link}?utm_source=generator`}
          width="50%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          title="myPlaylist"
          className='musicFrame'>
        </iframe>

        <br />
        {<Lottie
          options={defaultOptions}
          height={100}
          width={150}
        />}
      </div>
    </div>
  );
}