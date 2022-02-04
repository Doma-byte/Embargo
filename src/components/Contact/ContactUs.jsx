import React from 'react';
import useSticky from "../../Hooks/useSticky";
import Navbar from "../Navbar";
function ContactUs() {
  const { isSticky } = useSticky();
  return (<>
  <div>
        <Navbar sticky={isSticky} />
      </div>
      Yo wassup buddy!!
  </>);
}

export default ContactUs;
