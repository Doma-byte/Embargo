import React, { useState, memo } from 'react';
import BackgroundVideo from './BackgroundVideo';
import "react-responsive-modal/styles.css";
import Modal from "react-modal";
import Register from "../modal/Register";
import Login from '../modal/Login';
import { CSSTransition } from 'react-transition-group';
import Navbar from "../Navbar";
import useSticky from "../../Hooks/useSticky";
import "../../App.css";

Modal.setAppElement("#root");
function Home() {
  const { isSticky } = useSticky();
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [blur, setBlur] = useState(false);

  function toggleModal1() {
    setIsOpenRegister(!isOpenRegister);
    setBlur(!blur);
  }
  const [isOpenLogin, setisOpenLogin] = useState(false);
  function toggleModal2() {
    setisOpenLogin(!isOpenLogin);
    setBlur(!blur);
  }
  return (
    <>
      <div>
        <Navbar sticky={isSticky} />
      </div>
      <div>
        <section className={blur ? "myStyle showcase" : "showcase"}>
          <header>
            <div className="toggle"></div>
          </header>
          <BackgroundVideo />
          <div className='overlay'></div>
          <div className='text'>
            <h1>India's largest bike
              <br />
              taxi service</h1>
            <h4>ƦłÐE ŦØ ØBJE₡ŦłVE ₩łŦҤ λ₣₣ł₦łŦ¥.<br /></h4>
            <h2>Embargo is first step towards to help pioneers to reach their destination in cheapest price and short time.</h2>
            <br />
            <div>
              <button className='buttona button1' onClick={toggleModal2}>
                Sign-In
              </button>
              <button className='buttona button2' onClick={toggleModal1}>
                Sign-Up
              </button>
            </div>
          </div>
        </section>
        <section id="section04" className="demo">
          <a href="/#"><span></span></a>
        </section>
        <CSSTransition
          in={isOpenRegister}
          timeout={300}
          classNames="dialog"
        >
          <Modal
            isOpen={isOpenRegister}
            onRequestClose={toggleModal1}
            contentLabel="My dialog"
            className="mymodal modal_register"
            overlayClassName="myoverlay"
            closeTimeoutMS={400}
          >
            <Register toggleModal1={toggleModal1} />

          </Modal>
        </CSSTransition>
        <CSSTransition
          in={isOpenLogin}
          timeout={300}
          classNames="dialog"
        >
          <Modal
            isOpen={isOpenLogin}
            onRequestClose={toggleModal2}
            contentLabel="My dialog"
            className="mymodal modal_login"
            overlayClassName="myoverlay"
            closeTimeoutMS={400}
          >
            <Login toggleModal2={toggleModal2} />
          </Modal>
        </CSSTransition>
      </div>
    </>
  );
}
export default memo(Home);