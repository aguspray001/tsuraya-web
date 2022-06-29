import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { ManufactureImage } from "../../assets/images";
import PemesananForm from "../PemesananForm";

const Hero = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onShowModal = () => {
    setIsShowModal(!isShowModal);
  }


  return (
    <div id="hero" className="relative grid bg-white pt-20 grid-cols-12 justify-center items-center">
      {
        isShowModal && (
          <div className="absolute z-[9999] w-full right-0 left-0 mx-auto sm:w-[80%]">
            <PemesananForm onClose={onShowModal}/>
          </div>
        )
      }
      <div className="col-span-12 sm:col-span-6">
        <div className="flex flex-col items-center justify-center">
          <span className="pb-1 text-2xl block text-transparent bg-clip-text bg-black text-center sm:text-4xl">
            Welcome to <span className="text-2xl font-bold text-blue-500 sm:text-4xl">Tsuraya</span>
          </span>
          <span className="mb-10">
            Build the things <span className="text-xl font-bold">easier</span> and <span className="text-xl font-bold">stronger</span>
          </span>
          <Button title="Pesan Sekarang" onClick={onShowModal}/>
        </div>
      </div>
      <div className="col-span-12 mt-4 sm:col-span-6">
        <Image src={ManufactureImage} alt="manufacture image"/>
      </div>
    </div>
  );
};

export default Hero;
