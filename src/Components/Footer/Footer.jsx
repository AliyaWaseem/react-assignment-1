import React from 'react';
import Logo from "../Assets/Rivo.png";
import Facebook from "../Assets/Facebook.svg";
import Twitter from"../Assets/X.svg";
import Feed from "../Assets/Feed.svg";

const Footer = () => {
  return (
    <div className="pt-[80px] pb-[40px]">
    <div className="flex items-center justify-center gap-x-[12px]">
      <img src={Logo} alt="Logo" />
    </div>
    <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row
    sm:justify-center sm:gap-x-5 sm:pt-5">
      <li>Home</li>
      <li>Shop</li>
      <li>Features</li>
      <li>Contact</li>
    </ul>
    <p className="pt-[56px] text-center text-[14px] font-medium text-[#224F34] sm:pt-5">
      © Copyright 2024. Your Site. All rights reserved.</p>
      <div className="flex items-center justify-center gap-x-[56px] pt-[40px] ">
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Feed} alt="Feed" />
      </div>
  </div>
 )
};

export default Footer;