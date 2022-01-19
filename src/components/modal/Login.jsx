import React from 'react';
import "./Login.css";
import bubble from "../../images/bubble.png";
import google from "../../images/google_icon.png";
import facebook from "../../images/facebook_icon.png";
import microsoft from "../../images/microsoft_icon.png";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import MicrosoftLogin from 'react-microsoft-login';

function Login(props) {
  // const [googlePic, setGooglePic] = useState(false);
  const responseGoogle = (response) => {
    console.log(response);
  }
  const authHandler = (err, data) => {
    console.log(err, data);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }
  const myStyle = {
    textDecoration: "underline",
    color: "#111",
  };
  return (
    <>
      <div className='hero'>
        <div className='bubbles'>
          <img src={bubble} alt='bubbles' />
          <img src={bubble} alt='bubbles' />
          <img src={bubble} alt='bubbles' />
          <img src={bubble} alt='bubbles' />
          <img src={bubble} alt='bubbles' />
          <img src={bubble} alt='bubbles' />
          <img src={bubble} alt='bubbles' />
        </div>
      </div>
      <div className='fa fa-close' onClick={() => props.toggleModal2()}></div>
      <style>{`
        .fa{
          font-size : 2.5rem;
        color : white;
        cursor : pointer;
        float : right;
        top : 0;
        margin: 10px;
      }
        `}</style>
      <section className='login' id='login'>
        <div className='head'>
          <h1 className='company'>Embargo Explorer</h1>
        </div>
        <h3 className='msg' style={myStyle}>ωєℓ¢σмє вα¢к</h3>
        <br />
        <div className='icon'>
          <br /><br />
          <style>{`
    .icon div>img{
      margin : 0 20px 0 0;
      border : 0px solid #fff;
      background : white;
      border-radius: 5px;
    }
    MicrosoftLogin{
      display : absolute;
      margin-top : -50px;
    }
    img:hover{
        transform : scale(0.99s);
        border-radius : 10%;
        transition : 0.5s;
        width : 3vw;
        height : 7vh;
    }
    @media only screen and (max-width:991px){
      img:hover{
        width : 5vw;
      }
    }
    `}
          </style>
          <a href='/#'>
            <div className='div1'>
              <GoogleLogin
                clientId="1040710220722-l569lirv3aooku3iidb1to72k6kpuldn.apps.googleusercontent.com"
                buttonText=""
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                  <img
                    src={google}
                    alt="icon"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className='googleLogin'
                    title='Login with Google' />
                )}
                cookiePolicy={'single_host_origin'}
              />
              <FacebookLogin
                appId="338268931267774"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                  <img
                    src={facebook}
                    alt="icon"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className='googleLogin' />
                )}
              />
            </div>
          </a>
          <MicrosoftLogin
            clientId='20f6ac1d-78ac-4c7e-b5ca-04492ff1c3c7'
            authCallback={authHandler}
            className='div2'
          >
            <img
              src={microsoft}
              alt='icon'
              title='Login with Microsoft'
              className='microsoftLogin' />
          </MicrosoftLogin>
        </div>
        <div className='form'>
          <form action='/'>
            <input
              type="text"
              placeholder='Username/Email/PhoneNo.'
              className='text'
              id='username'
              required /> <br />
            <input
              type="password"
              placeholder='Password'
              className='password'
              required /> <br />
            <button type="submit" className='btn-login' id='do-login'>LOGIN</button>
            <br />
            <a href="/" className='forgot reply'>Forgot Password?</a>
          </form>
        </div>
      </section>
    </>
  );
}
export default Login;