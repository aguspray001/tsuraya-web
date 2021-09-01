import React from "react";
import {FaFacebook, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="w-full sm:h-full h-80 bg-blue-800 m-0 p-20 sm:px">
      <div class="flex lg:flex-row sm:flex-col justify-between items-center pt-10">
        <div class="flex flex-col w-1/2 text-center mx-2 text-white">
          <span class="text-5xl">Tsuraya</span>
        </div>
        <div class="flex flex-col w-1/2 text-center mx-2 text-white sm:py-20">
          <p class="font-semibold mb-5">About Us</p>
          <h1>Company</h1>
          <h1>Location</h1>
          <h1>Partner</h1>
        </div>
        <div class="flex flex-col w-1/2 text-center mx-2 text-white justify-center items-center">
          <span class="font-semibold mb-5">Contact</span>
          <FaFacebook style={{fontSize:40, marginBottom:10}}/>
          <FaWhatsapp style={{fontSize:40, marginBottom:10}}/>
        </div>
      </div>
      <h1 class="text-center my-10 text-white">© Tsuraya Truss 2021. All Rights Reserved.</h1>
    </footer>
  );
};

export default Footer;
