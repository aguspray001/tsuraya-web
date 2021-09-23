import { catalogOne, catalogTwo, catalogThree, catalogFour } from '../../assets'
import Card from '../Card'
import Zoom from 'react-reveal/Zoom';

const Catalog = () => {

    const dataCatalog = [
        {title: "Besi Kanal C", image:catalogOne},
        {title: "Galvalum A", image:catalogTwo},
        {title: "Galvalum B", image:catalogThree},
        {title: "Galvalum C", image:catalogFour},
        {title: "Galvalum D", image:catalogFour}

    ]
    return (
        <Zoom>
        <div id="catalog" className="w-full h-full flex flex-col justify-center items-center py-5 mt-20">
            <div className="flex flex-col justify-center text-center mb-10">
                <h1 className="font-semibold text-4xl mb-2 mt-1 text-blue-500">Our Catalog</h1>
                <p className="tracking-widest text-gray-600">Produk kami dibuat dengan presisi dan bahan berkualitas</p>
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
        </Zoom>
    )
}

export default Catalog
