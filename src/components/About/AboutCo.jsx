import React,{useEffect,memo} from 'react';
import "../../components_css/AboutCo.css";
import Footer from '../Home/Footer';
import Lottie from "react-lottie";
import Svg from "../../images/bg.svg";
import Im from "../../images/aboutcoimg.jpg"
import animationBike from "../../lotties/bik.json";
import animationDot from "../../lotties/dots.json";
import animationHelmet from "../../lotties/motorcycle.json";
import animationBall from "../../lotties/ball.json";
import animationWait from "../../lotties/waiting.json";
import animationPoint from "../../lotties/point.json";
import Profile from "../../images/profile_photo.jpg";

const AboutCo = () => {
  
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBike,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationHelmet,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationDot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationBall,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationWait,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: animationPoint,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <main>
        <div className="container_aboutco">
          <img className="first_svg lazyloaded" alt="" src={Svg} style={{ "objectPosition": "50% 50%" }} data-object-fit="cover" data-object-position="50% 50%" data-ll-status="loaded" />
          <div className='about-circle_wrapper is--right'>
            <img
              src="https://uploads-ssl.webflow.com/60a11f286cce9b4ccbc7fa02/60a11f286cce9b3843c7fa30_section-asset--gradient.svg" loading='lazy' alt="" className='about-circle_image'
            />
          </div>
          <style>{`
          body{
            justify-content:center;
          }
          .about-circle_wrapper.is--right{
            transition:0.5s;
            left:0;
            top:7.5rem;
            bottom:auto;
          }
          .about-circle_wrapper{
            position:absolute;
            overflow:hidden;
            max-width:45rem;
          }
          .about-circle_image{
            width:35rem;
            height:59rem;
            max-width:none;
          }
          img{
            vertical-align:middle;
            display:inline-block;
            border:0;
          }
          @media(max-width:991px){
            .about-circle_wrapper.is--right{
            left:0;
            top:23.5rem;
            bottom:auto;
          }
          .about-circle_image{
            width:35rem;
            height:49rem;
            max-width:none;
          }
          }
          `}</style>
          <div className="header_main">
            <div className="header_child1"><div className="wp-block-group__inner-container">
              <div className="wp-block-columns">
                <div className="wp-block-column mb-40 md:offset-2 md:col-8">
                  <h2 className="has-text-align-center has-xlarge-font-size" id="h-getting-businesses-moving-since-2010" style={{ "color": "#111" }}><strong>Getting Ready for moving along with Embargo</strong></h2>
                  <div>
                    <Lottie
                      options={defaultOptions2}
                      height={400}
                      width={600}
                      speed={2.5}
                    />
                  </div>
                </div>

                <div className="wp-block-column mb-40 md:offset-2 md:col-8">
                  <p className="has-text-align-center mt-0 has-medium-font-size">Embargo is a technology platform solely focused on corporate Ground Transportation Management (GTM), a worthy ride Sharing App. Embargo provides you the best category of serving and help others with serving our service. We are hoping to connect with others to provide smooth experience.</p>
                </div>
                <div className='testimonial'>
                  <img src="https://www.rapido.bike/images/g_p.svg" alt='design pattern' />
                </div>
                <div className='planet is--left'>
                  <Lottie
                    options={defaultOptions1}
                    height={320}
                    width={300}
                  />
                </div>
              </div>

              <style>{`
          .testimonial{
            position: relative;
            z-index:10;
          }
          .testimonial img{
            width:200px;
            height:200px;
          }
          .planet.is--left{
            position: absolute;
            top:10rem;
            right:0;
            -webkit-transform: scaleX(-1);
            transform:scaleX(-1);
          }
          .planet{
            position:absolute;
            overflow:hidden;
            max-width:35rem;
          }
          @media (max-width:991px){
          .has-text-align-center{
            color:#111;
          }
          .planet.is--left{
            width:300px;
            left:0;
            -webkit-transform: scaleX(1);
            tranform:scaleX(1);
            height:300px;
            overflow:hidden;
            margin:190px auto 0 0;
          }
          }
          .ball{
            position:fixed;
          }
          `}</style>
              <div className="wp-block-columns mb-40" style={{ "zIndex": "10" }}>
                <div className="wp-block-column col-11 md:col-9">
                  <Lottie
                    options={defaultOptions}
                    height={400}
                    width={600}
                  />
                </div>

              </div>

              <div className="wp-block-columns mb-40">
                <div className="wp-block-column md:offset-2 md:col-8">
                  <p className="has-text-align-center mt-0 has-medium-font-size"></p>
                  <p className="has-text-align-center mt-24 has-medium-font-size">We are building the global grid of ground transportation, embracing the entire world, connecting the dots, similar to telephone and internet grids. At Embargo, we are inspired to become the standard in corporate ground transportation the same way as Facebook became the standard in Social Connection.</p>
                </div>
                <div className='pattern_down'>
                  <img src='https://www.rapido.bike/images/y_p.svg' alt='pattern' loading='lazy' />
                  <Lottie
                    options={defaultOptions3}
                    height={330}
                    width={300}
                  />
                </div>
              </div>

              <style>{`
          .pattern_down{
            position:absolute;
            left:0;
            top:50rem;
            z-index:2;
          }
          .pattern_down img{
            width:300px;
            height:300px;
          }
          @media(max-width:991px){
            .pattern_down{
              display:none;
          }
          }
          `}</style>
              <div className="container_aboutco has-white-background-color has-background-dim rounded-24"><div className="header_main">
                <div className="header_child1"><div className="wp-block-group__inner-container">
                  <div className="wp-block-columns">
                    <div className="wp-block-column md:offset-1 md:col-10">
                      <h2 className="has-text-align-center mt-40 mb-16 md:mt-64 md:mb-32 has-gray-600-color has-text-color has-large-3-font-size" id="h-used-by-companies-everywhere"><strong>Ready to Serve You on your nearest hub !</strong></h2>
                    </div>



                    <div className="wp-block-column md:offset-2 md:col-8">
                      <p className="has-text-align-center mb-48 md:mb-40 has-gray-600-color has-text-color has-regular-font-size">Embargo are hoping to manage their ground travel program effeciently. The result is savings on their time and spend, a whole lot less hassle, plus better and safer user experiences, more control over sustainable travel, and eliminated inefficiencies to name but a few.</p>
                    </div>
                  </div>
                  <div className="header_child1">
                    <div className="wp-block-group__inner-container">
                      <div className="wp-block-columns">
                        <div className="wp-block-column md:offset-1 md:col-10">
                          <figure className="wp-block-image size-large rounded-24 mb-104 md:rounded-50 md:mb-144">
                            <img width="1024" height="620" src={Im} alt="" className="wp-image-6943 lazyloaded" sizes="(max-width: 1024px) 100vw, 1024px" srcset="https://images.pexels.com/photos/7706593/pexels-photo-7706593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1024w, https://images.pexels.com/photos/7706593/pexels-photo-7706593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 300w, https://images.pexels.com/photos/7706593/pexels-photo-7706593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 768w, https://images.pexels.com/photos/7706593/pexels-photo-7706593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1536w, https://images.pexels.com/photos/7706593/pexels-photo-7706593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1936w" data-ll-status="loaded" />
                          </figure>
                        </div>
                      </div>



                      <div className="wp-block-columns">
                        <div className="texts md:offset-1 md:col-10">
                          <h2 className="has-text-align-center mb-16 md:mb-24 has-large-3-font-size" id="h-all-ground-transportation-in-one-place"><strong>All ground transportation in one place</strong></h2>
                        </div>



                        <div className="texts md:offset-2 md:col-8">
                          <p className="has-text-align-center mb-40 md:mb-64 has-regular-font-size">We will soon try to make partnerships with thousands of providers from you can make this ride very easefull. It’s a platform that’s has a very high rate growing potential. That’s how we’re creating value for you and your time, cost, safety, and be helpful. </p>
                        </div>
                      </div>
                      <div className="wp-block-image mb-104 md:mb-144"><figure className="aligncenter size-large">
                      <Lottie
                    options={defaultOptions4}
                    height={320}
                    width={500}
                    className="wp-image-6998 lazyloaded" 
                    data-ll-status="loaded"
                   />
                      </figure>
                      <div className='founder_container'>
                        <div className='sidebar_left'>
                        <figure className='img_fig'>
                        <img src={Profile} alt="Profile" width="1000" height="1000"
                        />
                        </figure>
                        </div>
                        <div className='sidebar_right'>
          <h3>
          “We’re helping pioneers become vastly more efficient when managing all of their ground transportation spend. Additionally, Embargo trying to expand the  coverage by connecting users from a grid of transportation providers locally. And the combination is designed to benefit everyone involved. By optimising the entire employee experience, we save your time, money and hassle.”
          </h3>
          <h1 className='name_heading' id="name_head">Dikshit Singh, CEO & Founder
          </h1>
                        </div>
                      </div>
                      <Lottie
                    options={defaultOptions5}
                    height={125}
                    width={90}
                   />
                      <div className='Aboutme'>
        <a className="Aboutme_button" href="#/">Curious About Me </a>
      </div>
                      </div>
                    </div></div>
                </div></div>
              </div></div>
            </div></div>
          </div></div>
      <style>{`
      .Aboutme{
        display: flex;
        justify-content: center;
        padding : 0;
      }
      .Aboutme_button{
        color:#fff;
        background : #ff9d00;
        border :0;
        box-shadow :none;
        overflow-wrap : break-word;
      }
      a{
        outline-color:#fff;
      }
      .Aboutme>.Aboutme_button{
        border : 0;
        display:inline-flex;
        align-items:center;
        justify-content : center;
        text-align:center;
        text-decoration:none;
        font-size:1em;
        font-weight:600;
        line-height:1;
        padding:24px 6px;
        height:24px;
        margin-left:20px;
        margin-top:20px;
        border-radius:12px;
        cursor : pointer;
      }
      @media (max-width:991px){

      }
      `}</style>
      </main>
      <Footer />
    </>
  );
}

export default memo(AboutCo);