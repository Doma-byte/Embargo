import React from 'react';
import Navbar from "../Navbar";
import useSticky from "../../Hooks/useSticky";
import AnimationLottie from '../../AnimationLottie';
import animationNoti from "../../lotties/9983-notification.json";
import animationRocket from "../../lotties/70816-hiro-rocket-launch.json";
import animationCs from "../../lotties/34957-coming-soon.json";
export default function Careers(){
    const { isSticky } = useSticky();
    return(
        <div style={{margin:0,padding:0,width:"100vw",height:"100vh"}}>
        <div>
        <Navbar sticky={isSticky} />
      </div>
      <style>{`
      .caro{
          display:flex;
          flex-direction:row;
          margin-top:20px;
      }
      `}</style>
      <div className='caro'>
      <AnimationLottie name={animationRocket} height={350} width={500}/>
      <AnimationLottie name={animationNoti} height={350} width={600}/>
      </div>
      <div>
      <AnimationLottie name={animationCs} height={100} width={600}/>
      </div>
        </div>
    );
}