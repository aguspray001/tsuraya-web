import Image from 'next/image'
import { catalogOne, catalogTwo, catalogThree, catalogFour } from '../../assets'
import Card from '../Card'
import Carousel from '../Carousel'

const Catalog = () => {
    const dataCatalog = [
        {title: "Besi Kanal C", image:catalogOne},
        {title: "Galvalum A", image:catalogTwo},
        {title: "Galvalum B", image:catalogThree},
        {title: "Galvalum C", image:catalogFour},
        {title: "Galvalum D", image:catalogFour}

    ]
    return (
        <div id="catalog" class="w-full min-h-screen flex flex-col justify-center items-center sm:h-full py-5 bg-gradient-to-tl from-blue-100">
            <div class="flex flex-col justify-center text-center">
                <h1 class="font-semibold text-4xl mb-2 mt-1">Our Catalog</h1>
                <p class="tracking-widest">Produk kami dibuat dengan presisi dan bahan berkualitas</p>
            </div>
            <Carousel />

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 xs:grid-cols-1 xs:gap-10">
            {
                dataCatalog?.map((catalog)=>{
                    return(
                        <Card title={catalog.title}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Catalog
