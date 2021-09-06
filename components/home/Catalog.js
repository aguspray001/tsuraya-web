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
        <div id="catalog" className="w-full min-h-screen flex flex-col justify-center items-center sm:h-full py-5 bg-gradient-to-tl from-blue-100">
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-semibold text-4xl mb-2 mt-1">Our Catalog</h1>
                <p className="tracking-widest">Produk kami dibuat dengan presisi dan bahan berkualitas</p>
            </div>
            <div className="flex min-w-full overflow-x-auto overflow-hidden">
                <div className="grid py-5 px-10 grid-cols-6 gap-x-64 w-40 sm:grid-cols-2 sm:gap-10 sm:w-full sm:mx-auto md:grid-cols-3 lg:grid-cols-4">
                {
                    dataCatalog?.map((catalog, key)=>{
                        return(
                            <Card key={key} title={catalog.title} image={catalog.image}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Catalog
