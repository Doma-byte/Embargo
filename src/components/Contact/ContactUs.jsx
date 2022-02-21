import React from 'react';
import useSticky from "../../Hooks/useSticky";
import Navbar from "../Navbar";
import AnimationLottie from '../../AnimationLottie';
import animationYoung from "../../lotties/64965-two-young-professionals-chatting.json";
import animationCs from "../../lotties/34957-coming-soon.json";

function ContactUs() {
  const { isSticky } = useSticky();
  return (<>
  <div>
        <Navbar sticky={isSticky} />
      </div>
      <style>{`
      .lo{
        display:flex;
        flex-direction:column;
      }
      `}</style>
      <div className='lo'>
      <AnimationLottie name={animationCs} height={200} width={800} speed={2.5}/>
                    <AnimationLottie name={animationYoung} height={400} width={600}/>
                  </div>

  </>);
}

export default ContactUs;
