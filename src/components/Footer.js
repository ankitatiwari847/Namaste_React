import React from "react";
import { FACEBOOK_ICON, TWIITER_ICON } from "../../utils/constant.js";

const Footer = () => {
  return (
    <div className="bg-black p-12 h-50 w-full">
      <div className="flex mb-3 m-auto md:w-8/12">
        <img className="h-6" src={TWIITER_ICON} alt="twitter" />
        <img
          className="h-6 bg-white rounded-2xl object-cover ml-5"
          src={FACEBOOK_ICON}
          alt="facebook"
        />
      </div>
      <ul className="flex items-start flex-row flex-wrap text-sm mb-3 m-auto text-gray-500 md:w-8/12 mt-10">
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%]">
          Privacy
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%]">
          Help Center
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%]">
          Terms of Use
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%]">
          Jobs
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%]">
          Contact us
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%] basis-[50%]">
          Cookie Preference
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%] basis-[50%]">
          Gift Cards
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%] basis-[50%]">
          Privacy
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%] basis-[50%]">
          About Us
        </li>
        <li className="grow-0 shrink-0 list-none mb-4 pr-5 md:basis-[25%] basis-[50%]">
          Corporate Information
        </li>
      </ul>
    </div>
  );
};

export default Footer;
