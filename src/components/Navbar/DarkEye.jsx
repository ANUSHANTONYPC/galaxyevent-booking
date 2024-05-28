"use client";

import React, { useEffect, useState } from 'react';
import { IoEyedrop, IoEyedropOutline } from "react-icons/io5";

const DarkEye = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  const element =
    typeof window !== "undefined" ? document.documentElement : null;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('light');
      element.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <IoEyedropOutline onClick={() => setTheme('light')} className="text-2xl" />
      ) : (
        <IoEyedrop onClick={() => setTheme('dark')} className="text-2xl" />
      )}
    </>
  );
}

export default DarkEye;

