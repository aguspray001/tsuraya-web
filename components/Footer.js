import React from "react";
import {FaFacebook, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="w-full sm:h-full mobile-first:h-full h-80 bg-blue-800 m-0 p-10 sm:px">
      <div class="flex lg:flex-row sm:flex-col mobile-first:flex-col justify-between items-center">
        <div class="flex flex-col w-1/2 text-center text-white mobile-first:py-10">
          <span class="text-5xl">Tsuraya</span>
        </div>
        <div class="flex flex-col w-1/2 text-center mx-2 text-white sm:py-20 mobile-first:py-10">
          <p class="font-semibold mb-5">About Us</p>
          <h1>Company</h1>
          <h1>Location</h1>
          <h1>Partner</h1>
        </div>
        <div class="flex flex-col w-1/2 text-center mx-2 text-white justify-center items-center">
          <span class="font-semibold mb-5">Contact</span>
          <div class="text-center mobile-first:flex mobile-first:flex-row mobile-first:w-40 mobile-first:justify-around">
            <FaFacebook style={{fontSize:40, marginBottom:10}}/>
            <FaWhatsapp style={{fontSize:40, marginBottom:10}}/>
          </div>
        </div>
      </div>
      <h1 class="text-center my-10 text-white">© Tsuraya Truss 2021. All Rights Reserved.</h1>
    </footer>
  );
};

export default Footer;
