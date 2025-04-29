import React, { useState, useEffect } from "react";

export const ScrambledText = ({ text, className }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(750);

  const characters = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst012345";

  const scrambleText = (originalText) => {
    // Determine if the device is mobile
    const isMobile = window.innerWidth <= 968;

    const truncatedText = isMobile && originalText.length > 10
      ? originalText.slice(0, -2) 
      : originalText;

    return truncatedText
      .split("")
      .map((char) => (char.trim() === "" ? char : characters.charAt(Math.floor(Math.random() * characters.length))))
      .join("");
  };

  useEffect(() => {
    // Adjusted duration based on screen width
    const handleResize = () => {
      setDuration(window.innerWidth <= 968 ? 750 : 740);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (!isLoaded) {
      interval = setInterval(() => {
        setScrambledText((prevText) => scrambleText(prevText));
      }, 0);
    }

    const timeout = setTimeout(() => {
      setScrambledText(text);
      setIsLoaded(true);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoaded, text, duration]);

  return (
    <span className={className} style={{ whiteSpace: 'nowrap', overflow: 'visible', textOverflow: 'ellipsis' }}>
      {scrambledText}
    </span>
  );
};
