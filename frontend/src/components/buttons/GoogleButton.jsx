import React from "react";
import google_btn from '../../assets/google-btn.svg';

const GoogleButton = ({ text, clickHandler }) => (
  <button className="flex items-center justify-center w-full gap-2 2xl:py-4 py-2 2xl:text-xl text-base border 2xl:px-16 rounded-full border-black" onClick={clickHandler}>
    <img src={google_btn} alt="Google button" />
    {text}
  </button>
);

export default GoogleButton;