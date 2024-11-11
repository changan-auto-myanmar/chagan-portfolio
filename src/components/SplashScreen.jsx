// SplashScreen.js
// import React, { useEffect, useState } from 'react';
// import "./SplashScreen.css"; // Import the CSS file for styling
import logo from "./../assets/images/changanLogo.webp";

function SplashScreen() {
  // Don't render anything if not visible

  return (
    <div className="bg-black fixed inset-0 bg-white flex flex-col justify-center items-center z-50 transition-opacity duration-500 ease-in-out">
      <img src={logo} alt="Changan Logo" className="max-w-xs mb-5" />
      <h1 className="text-2xl text-gray-800 text-center m-0">
        Welcome to Changan Auto Myanmar
      </h1>
    </div>
  );
}

export default SplashScreen;
