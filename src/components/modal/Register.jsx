import React, { memo } from 'react';
import "./Register.css";
import bubble from "../../images/bubble.png";
import google from "../../images/google_icon.png";
import facebook from "../../images/facebook_icon.png";
import microsoft from "../../images/microsoft_icon.png";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import MicrosoftLogin from 'react-microsoft-login';

function Register(props) {
  // const [googlePic, setGooglePic] = useState(false);
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    // setGooglePic(response.profileObj);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }
  const authHandler = (err, data) => {
    console.log(err, data);
  }
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

      <div className="container">
        <div className="title">Registration</div>
        <style>{`
      .fa{
        font-size : 2.5rem;
        color : white;
        cursor : pointer;
        float : right;
        {/* margin : 10px; */}
      }
      .title{
        display : inline;
      }
    `}
        </style>
        <div className='fa fa-close' onClick={() => props.toggleModal1()}></div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username with @"
                  required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender" id='dot-1'>Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender" id='dot-2'>Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender" id='dot-3'>Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
              <br />
              <h5 className='icon_header'>or continue with</h5>
            </div>

            <div className='icon'>

              <br /><br />
              <style>{`
              .social_icon>img{
                  margin: 0 20px 0 0; 
                }
              img:hover{
                background : whitesmoke;
                border-radius : 10%;
              }
    `}
              </style>
              <a href='/#' className='social_icon'>
                <GoogleLogin
                  icon={google}
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
                      className='googleLogin' />
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
              </a>
              <MicrosoftLogin
                clientId='20f6ac1d-78ac-4c7e-b5ca-04492ff1c3c7'
                authCallback={authHandler}
                className='ml'
              >
                <img src={microsoft} alt='icon' />
              </MicrosoftLogin>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(Register);