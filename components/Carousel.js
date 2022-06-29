import Image from "next/image";
import { catalogOne } from "../assets";

const dataImages = [
  "https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg",
  "https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg",
  "https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg",
  "https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg",
  "https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg",
];

const Carousel = () => {
  return (
    <>
      <div
        className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl w-10/12"
        style={{ minHeight: "19rem" }}
      >
        <div
          className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          style={{ minHeight: "19rem" }}
        >
          <p className="p-2 absolute z-10 text-white">
            #Build the things easily
          </p>
          <div className="absolute inset-0 w-full h-full flex fill-current text-white">
            <Image
              src={catalogOne}
              alt="daed"
              className="bg-contain bg-no-repeat bg-center"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900">
                Project | Perumahan Pungging, Mojokerto
              </span>
            </p>
            <a
              className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href=""
            >
              <span>Learn more about our products</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
          <span className="block transform hover:scale-150">&#x279c;</span>
        </button>
        <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
          <span className="bloc transform hover:scale-150">&#x279c;</span>
        </button>
      </div>
      <div className="flex items-center pt-5 justify-between">
        {dataImages.map((dataImage, key) => {
          return (
            <button key={key} className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <Image
                className="w-full"
                src={dataImage}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
