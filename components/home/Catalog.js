import Image from 'next/image'
import { catalogOne, catalogTwo, catalogThree, catalogFour } from '../../assets'

const Catalog = () => {
    const dataCatalog = [
        {title: "Besi Kanal C", image:catalogOne},
        {title: "Galvalum A", image:catalogTwo},
        {title: "Galvalum B", image:catalogThree},
        {title: "Galvalum C", image:catalogFour},
        {title: "Galvalum D", image:catalogFour}

    ]
    return (
        <div id="/catalog" class="w-full h-96 flex flex-col sm:h-full sm:py-5 bg-blue-50 py-5">
            <div class="flex flex-col justify-center text-center">
                <h1 class="font-semibold text-4xl mb-2 mt-1">Our Catalog</h1>
                <p class="tracking-widest">Produk kami dibuat dengan presisi dan bahan berkualitas</p>
            </div>
            <div class="flex flex-wrap mobile-first:overflow-x-auto mobile-first:max-h-80 mobile-first:flex-row justify-around pt-10 px-20 items-center">
            {
                dataCatalog?.map((catalog)=>{
                    return(
                        <button class={`flex flex-col transition duration-700 ease-in-out transform hover:scale-110 shadow-lg my-2 bg-white ${catalog.image === catalogOne? "lg:h-56 lg:w-56 sm:h-40 sm:w-40" : "lg:h-40 lg:w-40 sm:h-40 sm:w-40"} cursor-pointer items-center justify-center rounded-lg`}>
                            <Image src={catalog.image} width={300} height={300} alt={catalog.title} class="rounded-t-lg"/>
                            <span>{catalog.title}</span>
                        </button>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Catalog
