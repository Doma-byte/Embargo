import React from 'react'
import "./Resume.css";
import Photo from "../images/profile_photo.jpg";

function Resume(){
    return (
        <>
        <div className='container_resume'>
            <div className='left_Side'>
            <div className='profileText'>
                <div className='imgBx1'>
            <img 
            src={Photo} 
            alt='profilePhoto_resume'/>
                </div>
                <h2>Dikshit Singh<br/><span>Web Developer</span></h2>
            </div>
            <style>{`
            .container_about .card{
                background : #fff;
            }
            `}</style>
            <div className='contactInfo'>
            <h3 className='title'>Contact Info</h3>
            <ul>
                <li>
                    <span className='icon'><i className='fa fa-phone' aria-hidden="true"></i></span>
                    <span className='text'>+91-9625523285</span>
                </li>
                <li>
                    <span className='icon'><i className='fa fa-envelope-o' aria-hidden="true"></i></span>
                    <span className='text'>singhdikshit69@gmail.com</span>
                </li>
                <li>
                    <span className='icon'><i className='fa fa-globe' aria-hidden="true"></i></span>
                    <span className='text'>www.mywebsite.com</span>
                </li>
                <li>
                    <span className='icon'><i className='fa fa-linkedin' aria-hidden="true"></i></span>
                    <span className='text'>www.linkedin.com/me</span>
                </li>
                <li>
                    <span className='icon'><i className='fa fa-map-marker' aria-hidden="true"></i></span>
                    <span className='text'>Pathankot,Punjab,India</span>
                </li>
            </ul>
            </div>

            <div className='contactInfo education'>
            <h3 className='title'>Education</h3>
            <ul>
            <li>
                <h5>2020-2024</h5>
                <h4>Bachelor Degree in Computer Science</h4>
                <h4>Satyug Darshan Institute of Engineering & Technology</h4>
            </li>
            <li>
                <h5>2018-2020</h5>
                <h4>Higher Education</h4>
                <h4>Govt. Model Sr. Sec. School</h4>
            </li>
            <li>
                <h5>2017-2018</h5>
                <h4>Matriculation</h4>
                <h4>Sardar Patel Public School</h4>
            </li>
            </ul>
            </div>

            <div className='contactInfo language'>
            <h3 className='title'>Languages</h3>
            <ul>
            <li>
            <span className='text'>English</span>
            <span className='percent'>
                <progress max="100" value="80" style={{"width":"100%"}}></progress>
            </span>
            </li>
            <li>
            <span className='text'>Hindi</span>
            <span className='percent'>
            <progress max="100" value="90" style={{"width":"100%"}}></progress>
            </span>
            </li>
            <li>
            <span className='text'>Punjabi</span>
            <span className='percent'>
            <progress max="100" value="70" style={{"width":"100%"}}></progress>
            </span>
            </li>
            <li>
            <span className='text'>Japanese</span>
            <span className='percent'>
            <progress max="100" value="40" style={{"width":"100%"}}></progress>
            </span>
            </li>
            </ul>
            </div>
            </div>
            <div className='right_Side'>
            <div className='about'>
            <h2 className='title2'>Profile</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            </div>
            <div className='about'>
            <h2 className='title2'>Experience</h2>
            <div className='box'>
            <div className='year_company'>
            <h5>2019-Present</h5>
            <h5>Company Name</h5>
            </div>
            <div className='text'>
            <h3>Senior UX Designer</h3>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            </div>

            <div className='box'>
            <div className='year_company'>
            <h5>2016-2019</h5>
            <h5>Company Name</h5>
            </div>
            <div className='text'>
            <h3>UX/UI Designer</h3>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            </div>

            <div className='box'>
            <div className='year_company'>
            <h5>2015-2016</h5>
            <h5>Company Name</h5>
            </div>
            <div className='text'>
            <h3>Junior UX Designer</h3>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            </div>
            </div>
            <div className='about skills'>
            <h2 className='title2'>Professional Skills</h2>
            <div className='box'>
            <h3>Html</h3>
            <div className='percent'>
                <div style={{"width":"80%"}}></div>
            </div>
            </div>
            <div className='box'>
            <h3>CSS</h3>
            <div className='percent'>
            <div style={{"width":"60%"}}></div>
            </div>
            </div>
            <div className='box'>
            <h3>JavaScript</h3>
            <div className='percent'>
            <div style={{"width":"70%"}}></div>
            </div>
            </div>
            <div className='box'>
            <h3>React.js</h3>
            <div className='percent'>
            <div style={{"width":"60%"}}></div>
            </div>
            </div>
            <div className='box'>
            <h3>Node.js</h3>
            <div className='percent'>
            <div style={{"width":"65%"}}></div>
            </div>
            </div>
            <div className='box'>
            <h3>Blockchain</h3>
            <div className='percent'>
            <div style={{"width":"30%"}}></div>
            </div>
            </div>
            </div>

            <div className='about interest'>
            <h2 className='title2'>Interest</h2>
            <ul>
                <li><i className='fa fa-gamepad' aria-hidden="true"></i> Gaming</li>
                <li><i className='fa fa-microphone' aria-hidden="true"></i> Singing</li>
                <li><i className='fa fa-book' aria-hidden="true"></i> Reading</li>
                <li><i className='fa fa-cutlery' aria-hidden="true"></i> Cooking</li>
            </ul>
            </div>

            </div>
        </div>
        </>
    )
}

export default Resume;
