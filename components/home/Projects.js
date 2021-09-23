import Zoom from 'react-reveal/Zoom';

const Projects = () => {
    return (
        <Zoom>
        <div id="project" className="w-full h-full flex flex-row justify-center items-center p-10">
            <div className="flex-1">
                <h1 className="text-4xl text-blue-500 font-semibold text-center">Our Projects</h1>
                <p className="text-gray-600 tracking-widest text-center pt-5">Kami telah mengerjakan beberapa project untuk perumahan, gudang, dan lain-lain.</p>
                <div className="flex min-w-full overflow-x-auto">
                    <ul className="grid w-[400px] px-10 py-5 grid-cols-8 grid-rows-1 gap-x-44 md:w-full md:grid-cols-1 lg:grid-cols-2">
                        <li className="col-span-1 p-5 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 p-20 bg-blue-100 bg-image project-1 rounded-sm md:p-0"><span className="absolute inset-1 text-white">Bligo</span></div></li>
                        <li className="col-span-1 p-5 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 p-20 bg-blue-100 bg-image project-2 rounded-sm md:p-0"><span className="absolute inset-1 text-white">Canopy</span></div></li>
                        <li className="col-span-1 p-5 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 p-20 bg-blue-100 bg-image project-6 rounded-sm md:p-0"><span className="absolute inset-1 text-white">Pungging</span></div></li>
                        <li className="col-span-1 p-5 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 p-20 bg-blue-100 bg-image project-3 rounded-sm md:p-0"><span className="absolute inset-1 text-white">KGS</span></div></li>
                        <li className="col-span-1 p-5 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 p-20 bg-blue-100 bg-image project-4 rounded-sm md:p-0"><span className="absolute inset-1 text-white">Mijen</span></div></li>
                        <li className="col-span-1 p-5 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 p-20 bg-blue-100 bg-image project-5 rounded-sm md:p-0"><span className="absolute inset-1 text-white">Partisi</span></div></li>
                    </ul>
                </div>
            </div>
        </div>
        </Zoom>
    )
}

export default Projects
