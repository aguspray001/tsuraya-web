import Image from 'next/image';

const Card = ({title, image, thickness, price}) => {
    return (
        <div className="w-60 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <Image src={image} alt=""/>
        <div className="p-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2 text-lg font-semibold text-gray-600">Spesifikasi : </p>
          <p className="mt-1 text-gray-500 font-">Ketebalan : {thickness}</p>
          <p className="mt-1 text-gray-500 font-">Harga : Rp.{price}</p>
        </div>
      </div>
    )
}

export default Card
