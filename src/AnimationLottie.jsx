import React from 'react';
import Lottie from 'react-lottie';

function AnimationLottie(props) {
  const { name, height, width, speed } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: name,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        speed={speed}
      />
    </>
  )
}

export default AnimationLottie;
