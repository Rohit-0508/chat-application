import React, {useEffect} from "react";
import google_btn from '../../assets/google-btn.svg';
import { useNavigate } from "react-router-dom";


const GoogleButton = ({ text }) => {

  const navigate = useNavigate();

  const clickHandler = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  
  return (
    <button className="flex items-center justify-center w-full gap-2 2xl:py-4 py-2 2xl:text-xl text-base border 2xl:px-16 rounded-full border-black" onClick={clickHandler}>
      <img src={google_btn} alt="Google button" />
      {text}
    </button>

  )
};

export default GoogleButton;