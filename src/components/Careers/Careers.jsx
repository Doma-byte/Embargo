import React from 'react';
import Navbar from "../Navbar";
import useSticky from "../../Hooks/useSticky";
export default function Careers(){
    const { isSticky } = useSticky();
    return(
        <>
        <div>
        <Navbar sticky={isSticky} />
      </div>
    Hello body
        </>
    );
}