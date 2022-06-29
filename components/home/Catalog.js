import {
  catalogOne,
  catalogTwo,
  catalogThree,
  catalogFour,
} from "../../assets";
import Card from "../Card";
import Zoom from "react-reveal/Zoom";

const Catalog = () => {
  const dataCatalog = [
    {
      title: "Besi Kanal C",
      image: catalogOne,
      thickness: "0.65 & 0.75",
      price: 5000,
    },
    {
      title: "Galvalum A",
      image: catalogTwo,
      thickness: "0.65 & 0.75",
      price: 5000,
    },
    {
      title: "Galvalum B",
      image: catalogThree,
      thickness: "0.65 & 0.75",
      price: 5000,
    },
    {
      title: "Galvalum C",
      image: catalogFour,
      thickness: "0.65 & 0.75",
      price: 5000,
    },
    {
      title: "Galvalum D",
      image: catalogFour,
      thickness: "0.65 & 0.75",
      price: 5000,
    },
  ];
  return (
    <Zoom>
      <div
        id="catalog"
        className="w-full h-full flex flex-col justify-center items-center py-5 mt-20"
      >
        <div className="flex flex-col justify-center text-center mb-10">
          <h1 className="font-semibold text-4xl mb-2 mt-1 text-blue-500">
            Our Catalog
          </h1>
          <p className="tracking-widest text-gray-600">
            Produk kami dibuat dengan presisi dan bahan berkualitas
          </p>
        </div>
        <div className="flex min-w-full">
          <div className="grid py-5 px-10 grid-cols-1 gap-x-64 gap-y-10 w-40 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-10 sm:w-full sm:mx-auto md:grid-cols-3 md:gap-x-40 lg:grid-cols-4">
            {dataCatalog?.map((catalog, key) => {
              return (
                <Card
                  key={key}
                  title={catalog.title}
                  image={catalog.image}
                  price={catalog.price}
                  thickness={catalog.thickness}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Catalog;
