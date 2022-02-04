import { useEffect, useState, useRef, useCallback } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.scrollY > 140 ? setSticky(true):setSticky(false)
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [handleScroll])

  return { isSticky};
}

export default (useSticky);