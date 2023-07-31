"use client";

import { useState, useRef, useEffect } from "react";

const useCountdown = (initialValue, delay) => {
  const [counter, setCounter] = useState(initialValue);

  const id = useRef();

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setCounter((time) => --time);
    }, delay / initialValue);

    return () => clear();
  }, []);

  useEffect(() => {
    if (counter <= 0) clear();
  }, [counter]);

  return counter;
};

export default useCountdown;
