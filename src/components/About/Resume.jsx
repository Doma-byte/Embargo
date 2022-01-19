import React from 'react'
import "../../components_css/Resume.css";
import Photo from "../../images/profile_photo.jpg";

function Resume() {
    return (
        <>
            <div className='container_resume'>
                <div className='left_Side'>
                    <div className='profileText'>
                        <div className='imgBx1'>
                            <img
                                src={Photo}
                                alt='profilePhoto_resume' />
                        </div>
                        <h2>Dikshit Singh<br /><span>Full Stack Web Developer</span>
                            <p>Web3 Explorer/CP Solver(3⭐)</p></h2>
                    </div>
                    <style>{`
            .container_about .card{
                background : #fff;
            }
            .contactInfo ul li span a{
                color : #fff;
                text-decoration : none;
            }
            `}</style>
                    <div className='contactInfo'>
                        <h3 className='title'>Contact Info</h3>
                        <ul>
                            <li>
                                <span className='icon'><i className='fa fa-phone' aria-hidden="true"></i></span>
                                <span className='text'><a href='tel:+919625523285' alt="call">+91-9625523285</a></span>
                            </li>
                            <li>
                                <span className='icon'><i className='fa fa-envelope-o' aria-hidden="true"></i></span>
                                <span className='text'>
                                    <a href='mailto:singhdikshit69@gmail.com' alt="email">singhdikshit69@gmail.com</a>
                                </span>
                            </li>
                            <li>
                                <span className='icon'><i className='fa fa-github' aria-hidden="true"></i></span>
                                <span className='text'><a href='https://github.com/Dikshit-byte' alt="repo" target="__blank">Github </a></span>
                            </li>
                            <li>
                                <span className='icon'><i className='fa fa-linkedin' aria-hidden="true"></i></span>
                                <span className='text'><a href='https://www.linkedin.com/in/danny-singh-1527371a6/'>Linkedin </a></span>
                            </li>
                            <li>
                                <span className='icon'><i className='fa fa-map-marker' aria-hidden="true"></i></span>
                                <span className='text'>Faridabad, Haryana, India</span>
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
                                    <progress max="100" value="80" style={{ "width": "100%" }}></progress>
                                </span>
                            </li>
                            <li>
                                <span className='text'>Hindi</span>
                                <span className='percent'>
                                    <progress max="100" value="90" style={{ "width": "100%" }}></progress>
                                </span>
                            </li>
                            <li>
                                <span className='text'>Punjabi</span>
                                <span className='percent'>
                                    <progress max="100" value="70" style={{ "width": "100%" }}></progress>
                                </span>
                            </li>
                            <li>
                                <span className='text'>Japanese</span>
                                <span className='percent'>
                                    <progress max="100" value="40" style={{ "width": "100%" }}></progress>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='right_Side'>
                    <div className='about'>
                        <h2 className='title2'>Profile</h2>
                        <p>Hard-Working developer with a flair for creating elegant solutions in the least amount of time. I am interested in being up-to-date with the latest technologies and always eager to keep learning. <br /><br />Currently, enrolled for B.Tech Degree in Computer Science. I am <b>Full stack Developer</b> with knowledge of <b>Mern Stack(60%)</b> and exploring the world of <b>Blockchain & Web3</b> side by side. Currently writing Apps in <b>React</b> to satisfied my ego. Enthusiast towards solving the real world(Dev🔨) & coding problems(<b>CP💻</b>).</p>
                    </div>
                    <div className='about'>
                        <h2 className='title2'>Experience</h2>
                        <div className='box'>
                            <div className='year_company'>
                                <h5>April - July(2021)</h5>
                                <h5>CampK12</h5>
                            </div>
                            <div className='text'>
                                <h3>Code Mentor</h3>
                                <p>Mentoring Students of age group 7-22 in HTML,CSS,JS and Database, and developing new ideas for projects.<br />Contributed in building the front-end for their live code editor using <b>React.</b></p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='year_company'>
                                <h5>Feb - March(2021)</h5>
                                <h5>The SPARK Foundation</h5>
                            </div>
                            <div className='text'>
                                <h3>Web Developer</h3>
                                <p>Build a website for their banking system to handle the daily issues with credit & debit loan balance. Technology used : <b>MERN STACK</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='about skills'>
                        <h2 className='title2'>Professional Skills</h2>
                        <div className='box'>
                            <h3>C++</h3>
                            <div className='percent'>
                                <div style={{ "width": "90%" }}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>JavaScript</h3>
                            <div className='percent'>
                                <div style={{ "width": "70%" }}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>React.js</h3>
                            <div className='percent'>
                                <div style={{ "width": "65%" }}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>Mern Stack</h3>
                            <div className='percent'>
                                <div style={{ "width": "60%" }}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>Blockchain</h3>
                            <div className='percent'>
                                <div style={{ "width": "30%" }}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>React-Native</h3>
                            <div className='percent'>
                                <div style={{ "width": "20%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='about interest'>
                        <h2 className='title2'>Certifications</h2>
                        <h3 style={{ "color": "#848c90" }}>NPTEL :</h3>
                        <p>Advanced C++, OOPS, Joy of Computing using Python</p>
                    </div>
                    <div className='about interest'>
                        <h2 className='title2'>Interest</h2>
                        <ul>
                            <li><i className='fa fa-gamepad' aria-hidden="true"></i> Gaming</li>
                            <li><i className='fa fa-globe' aria-hidden="true"></i> GeoPolitics</li>
                            <li><i className='fa fa-bar-chart' aria-hidden="true"></i> Finance</li>
                            <li><i className='fa fa-history' aria-hidden="true"></i> History</li>
                            <li><i className='fa fa-cutlery' aria-hidden="true"></i> Cooking</li>
                            <li><i className='fa fa-facebook' aria-hidden="true"></i> Meta</li>
                            <li><i className='fa fa-picture-o' aria-hidden="true"></i> Movies</li>
                            <li><i className='fa fa-search' aria-hidden="true"></i> Research</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Resume;
