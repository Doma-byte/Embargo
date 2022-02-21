import React, { memo } from 'react'
import "../../components_css/Footer.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container_footer'>
                    <div className='sec aboutFoot'>
                        <h2>About US</h2>
                        <p>Embargo is a technology platform solely focused on corporate Ground Transportation Management (GTM), a worthy ride Sharing App. Embargo provides you the best category of serving and help others with serving our service. We are hoping to connect with others to provide smooth experience.</p>
                        <ul className='sci'>
                            <li><a href='/#' className='git'>
                                <i className='fa fa-github' aria-hidden="true"></i></a></li>
                            <li><a href='/#' className='ld'>
                                <i className='fa fa-linkedin' aria-hidden="true"></i></a></li>
                            <li><a href='/#' className='tw'>
                                <i className='fa fa-twitter' aria-hidden="true"></i></a></li>
                            <li><a href='/#' className='in'>
                                <i className='fa fa-instagram' aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className='sec quickLinks'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href='/#' id="underline">About</a></li>
                            <li><a href='/#' id="underline">FAQ</a></li>
                            <li><a href='/#' id="underline">Privacy Policy</a></li>
                            <li><a href='/#' id="underline">Help</a></li>
                            <li><a href='/#' id="underline">Terms & Conditions</a></li>
                            <li><a href='/#' id="underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className='sec contact'>
                        <h2>Contact Info</h2>
                        <ul className='info'>
                            <li>
                                <style>{`
        body{
            justify-content: flex-end;
        }
                .sci .git:hover{
                    background : #fff; 
                }
                .sci .fa-github:hover{
                    color : #111;
                }
                .sci .tw:hover{
                    background : #1da1f2; 
                }
                .sci .fa-twitter:hover{
                    color : #fff;
                }
                .sci .ld:hover{
                    background : #0077b5; 
                }
                .sci .fa-linkedin:hover{
                    color : #fff;
                }
                .sci .in:hover{
                    background: #f09433; 
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
                }
                .sci .fa-instagram:hover{
                    color : #fff;
                }
                .fa-map-marker,.fa-phone,.fa-envelope{
                    color : #111;
                }
                `}</style>
                                <span><i className='fa fa-map-marker' aria-hidden="true"></i> </span>
                                <span>
                                    D-II-332,Shiv Durga Vihar<br />LakkarPur, Faridabad,<br />HARYANA-121003</span>
                            </li>
                            <li>
                                <span><i className='fa fa-phone' aria-hidden="true"></i></span>
                                <p>
                                    <a href='tel:+919625523285'>+91 962 552 3285</a>
                                    <br />
                                    <a href='tel:+918800775692'>+91 880 077 5692</a>
                                </p>
                            </li>
                            <li>
                                <span><i className='fa fa-envelope' aria-hidden="true"></i></span>
                                <p><a href='mailto:singhdikshit69@gmail.com'>singhdikshit69@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='copyrightText'>Copyright &copy; {new Date().getFullYear()} Embargo. All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default memo(Footer);
