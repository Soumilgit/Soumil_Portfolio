import React, { useState, useEffect } from "react";

export const ScrambledText = ({ text }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(975);

  const characters = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst0123456789?/_&@#%$*+-^<[>({}}|))]:;.,!~`";

  const scrambleText = (originalText) => {
    return originalText
      .split("")
      .map((char) => (char.trim() === "" ? char : characters.charAt(Math.floor(Math.random() * characters.length))))
      .join("");
  };

  useEffect(() => {
    // Adjust duration based on screen width
    const handleResize = () => {
      setDuration(window.innerWidth <= 768 ? 2700 : 975);
    };

    handleResize(); // Set on first render
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

  return <span>{scrambledText}</span>;
};
