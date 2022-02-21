import React from 'react';
import "../../components_css/ContactMe.css"
import Profile from "../../images/profile_photo.jpg";
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@material-ui/core';
function ContactMe() {
    return (
        <>
            <style>{`
        body{
         justify-content: center;
        }
        .span_bt1{
            padding : 50px;
        }
        `}</style>
            <span className='span_bt1'>
                <NavLink exact="true" to="/aboutCo">
                    <IconButton>
                        <CloseIcon fontSize='large' color='#fff' />
                    </IconButton>
                </NavLink>
            </span>
            <div className='container_about'>
                <div className='card card1' style={{ '--i': -1 }}>
                    <div className='circle'></div>
                    <div className='content_about1' style={{ '--j': 0 }}>
                        <style>{`
                        body{
                            justify-content:center;
                        }
        .content_about1 p span{
            color: #666;
            font-weight : bold;
        }
        body{
            align-items:center;
        }
        body::before{
            background : #9d5ae0;
        }
        `}</style>
                        <p style={{margin:"0px"}}>
                        I like building things. I'm Full Stack Developer. Currently exploring the world of Data Science & Blockchain side by side.<br /> <span>And I'm UnEmployed</span>
                        </p>
                        <NavLink exact="true" to="/resume">Hire Me</NavLink>
                    </div>
                </div>
                <div className='card' style={{ '--i': 0 }}>
                    <div className='content_about' style={{ '--j': 2 }}>
                        <div className='imgBx'>
                            <img
                                src={Profile}
                                alt='profile_photo' />
                        </div>
                        <div className='content_info'>
                            <div className='details'>
                                <h2>Dikshit Singh<br /><span>Full Stack Developer</span></h2>
                                <ul className='social_icons'>
                                    <li><a
                                        href="https://github.com/Dikshit-byte"
                                        target="__blank"
                                        className='git'>
                                        <i
                                            className='fa fa-github'
                                            aria-hidden="true"></i></a>
                                    </li>
                                    <style>{`
                .social_icons .git:hover{
                    background : #111; 
                }
                .social_icons .fa-github:hover{
                    color : #fff;
                }
                .social_icons .tw:hover{
                    background : #fff; 
                }
                .social_icons .fa-twitter:hover{
                    color : #1DA1F2;
                }
                .social_icons .link:hover{
                    background : #0077b5; 
                }
                .social_icons .fa-linkedin:hover{
                    color : #fff;
                }
                .social_icons .in:hover{
                    background: #f09433; 
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
                }
                .social_icons .fa-instagram:hover{
                    color : #fff;
                }
                `}</style>
                                    <li><a
                                        href="https://twitter.com/Dannysingh6913" target="__blank"
                                        className='tw'>
                                        <i className='fa fa-twitter' aria-hidden="true"></i></a>
                                    </li>
                                    <li><a
                                        href="https://www.linkedin.com/in/danny-singh-1527371a6/"
                                        target="__blank"
                                        className='link'>
                                        <i className='fa fa-linkedin' aria-hidden="true"></i></a>
                                    </li>
                                    <li><a
                                        href="https://www.instagram.com/sataya_hua_engineer/" target="__blank"
                                        className='in'>
                                        <i className='fa fa-instagram' aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card card2' style={{ '--i': 1 }}>
                    <style>{`
        .card:nth-child(3){
            position : absolute;
            width : 300px;
            height : 420px;
            background : #111;
            margin : 20px;
            overflow : hidden;
            box-shadow : 0 15px 25px rgba(0,0,0,0.2);
            transition : 0.5s;
        }
        `}</style>
                    <div className='circle1'>
                    </div>
                    <div className='content_about2 content_about1' style={{ '--j': 3 }}>
                        <h2>My PortFolio...</h2>
                        <p>Want to check my Skills !!<br /> Want to check my Experience !! <br/> Want to Know my other Interests!!</p>
                        <a href='https://github.com/Dikshit-byte/Embargo' target="_blank" rel="noreferrer">GITHUB</a>
                        <style>{` 
        .content_about2 h2{
            color : #dc2743;
            display : flex;
            position: absolute;
            margin-top: -10px;
            margin-left: 50px;
            justify-content : center;
            align-items : center;
        }
        .content_about2 p{
            color: #fff;
        }
        `}</style>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactMe;