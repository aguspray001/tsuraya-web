import Image from 'next/image';
import { projectFive, projectFour, projectOne, projectThree, projectTwo } from '../../assets';

const Projects = () => {
    return (
        <div id="project" className="w-full h-full flex flex-row justify-center items-center p-10">
            <div className="flex-1">
                <h1 className="text-4xl text-blue-500 font-semibold text-center">Our Projects</h1>
                <p className="text-xl text-black tracking-widest text-center pt-5">Kami telah mengerjakan beberapa project untuk perumahan, gudang, dan lain-lain.</p>
                <ul className="grid grid-cols-1 grid-rows-1 gap-10 grid-flow-row p-20 sm:grid-cols-4 sm:grid-rows-3">
                    <li className="col-span-1 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 bg-blue-100 bg-image project-1 rounded-sm"><span className="absolute inset-1 text-white">Bligo</span></div></li>
                    <li className="col-span-1 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-2 transition-all ease-in-out duration relative"><div className="relative h-40 bg-blue-100 bg-image project-2 rounded-sm"><span className="absolute inset-1 text-white">Canopy</span></div></li>
                    <li className="col-span-1 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-1 transition-all ease-in-out duration relative"><div className="relative h-40 bg-blue-100 bg-image project-6 rounded-sm"><span className="absolute inset-1 text-white">Pungging</span></div></li>
                    <li className="col-span-1 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-2 transition-all ease-in-out duration relative"><div className="relative h-40 bg-blue-100 bg-image project-3 rounded-sm"><span className="absolute inset-1 text-white">KGS</span></div></li>
                    <li className="col-span-1 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-2 transition-all ease-in-out duration relative"><div className="relative h-40 bg-blue-100 bg-image project-4 rounded-sm"><span className="absolute inset-1 text-white">Mijen</span></div></li>
                    <li className="col-span-1 hover:scale-105 hover:opacity-80 hover:translate-y-2 transform md:col-span-4 transition-all ease-in-out duration relative"><div className="relative h-40 bg-blue-100 bg-image project-5 rounded-sm"><span className="absolute inset-1 text-white">Partisi</span></div></li>
                </ul>
            </div>
        </div>
    )
}

export default Projects
