import React from 'react';
import "./ChatLogin.css";
import { auth, provider } from "../../Firebase";
import { useDispatch } from "react-redux";
import AnimationLottie from "../../AnimationLottie";
import AnimationChat3 from "../../lotties/chat3.json";

function ChatLogin() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        })
      })
      .catch((error) => alert(error.message));
  }
  return (<>
    <div className="chat_loginContainer">
      <div className='chat_loginText'>
        <h1>Use first private<br />chat service</h1>
        <h4>𝕻𝖗𝖎𝖛𝖆𝖈𝖞 𝖒𝖆𝖙𝖙𝖊𝖗𝖘 𝖆𝖓𝖉 𝖜𝖊 𝖐𝖊𝖊𝖕 𝖎𝖙.<br /></h4>
        <h2>Embargo also provides privacy to meet with other folks from all around the world and using the first web3 chatting service.</h2><br />
        <button className='chat_loginButton chat_login_bt' onClick={signIn}>
          Sign-In
        </button>
      </div>
      <div className="anime">
        <AnimationLottie name={AnimationChat3} height={420} width={550} />
      </div>
    </div>
  </>);
}

export default ChatLogin;
