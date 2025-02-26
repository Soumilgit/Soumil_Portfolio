import React, { useState, useEffect } from "react";

export const ScrambledText = ({ text, duration = 1500 }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isLoaded, setIsLoaded] = useState(false);

  const characters = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst012345";

  const scrambleText = (originalText) => {
    return originalText
      .split("")
      .map((char) => (char.trim() === "" ? char : characters.charAt(Math.floor(Math.random() * characters.length))))
      .join("");
  };

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
