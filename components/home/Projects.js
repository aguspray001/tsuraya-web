import Image from 'next/image';
import { projectFive, projectFour, projectOne, projectThree, projectTwo } from '../../assets';

const Projects = () => {
    return (
        <div className="w-full min-h-screen flex flex-row justify-center items-center p-10">
            <div className="flex-1">
                <h1 className="text-4xl text-blue-500 font-semibold text-center">Our Projects</h1>
                <p className="text-xl text-black tracking-widest text-center pt-5">Kami telah mengerjakan beberapa project untuk perumahan, gudang, dan lain-lain.</p>
                <ul className="grid grid-cols-4 grid-rows-2 gap-10 grid-flow-row p-20">
                    <li className="col-span-1"><div className="h-60 bg-white hero"></div></li>
                    <li className="col-span-1"><div className="h-60 bg-white hero"></div></li>
                    <li className="col-span-1"><div className="h-60 bg-white hero"></div></li>
                    <li className="col-span-1"><div className="h-60 bg-white hero"></div></li>
                    <li className="col-span-1"><div className="h-60 bg-white hero"></div></li>
                    <li className="col-span-2"><div className="h-60 bg-white hero"></div></li>
                </ul>
            </div>
        </div>
    )
}

export default Projects
