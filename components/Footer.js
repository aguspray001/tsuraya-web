import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const msg = "dawedwead";
  const mobile = "085961142551";
  return (
    <footer className="w-full h-full bg-blue-500 m-0 px-2 py-2 sm:h-full">
      <div className="flex flex-col justify-between items-center sm:flex-col lg:flex-row">
        <div className="flex flex-col w-1/2 py-2 text-center text-white">
          <span className="text-5xl">Tsuraya</span>
        </div>
        <div className="flex flex-col w-1/2 text-center mx-2 text-white sm:py-20 py-10">
          <p className="font-semibold mb-5">About Us</p>
          <h1>Company</h1>
          <h1>Location</h1>
          <h1>Partner</h1>
        </div>
        <div className="flex flex-col w-1/2 text-center mx-2 text-white justify-center items-center">
          <span className="font-semibold mb-5">Contact</span>
          <div className="text-center flex flex-row w-40 justify-around">
            <Link passHref={true} href="/">
              <FaFacebook
                className="hover:scale-105 transform cursor-pointer"
                style={{ fontSize: 40, marginBottom: 10 }}
              />
            </Link>
            <Link passHref={true} href={`whatsapp://send?text=${msg}&phone=${mobile}`}>
              <FaWhatsapp
                className="hover:scale-105 transform cursor-pointer"
                style={{ fontSize: 40, marginBottom: 10 }}
              />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center my-10 text-white">
        © Tsuraya Truss 2021. All Rights Reserved.
      </h1>
    </footer>
  );
};

export default Footer;
