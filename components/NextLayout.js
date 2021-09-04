import { useState } from "react";
import Head from "next/head";
import Link from "next/link"

const NextLayout = ({children, title, description}) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
        </Head>
        {/* <!-- Navbar goes here --> */}
		<nav className="bg-white shadow-lg border-2 fixed z-10 w-full">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<a href="#" className="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/> */}
								<span className="font-semibold text-blue-500 text-lg">Tsuraya Truss</span>
							</a>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1">
							<a className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold ">
								<Link href="/">Home</Link>
							</a>
							<a className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
								<Link href="#catalog">Catalog</Link>
							</a>
							<a className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
								<Link href="#">About Us</Link>
							</a>
							<a className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
								<Link href="#">Projects</Link>
							</a>
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					{/* <div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>
					</div> */}
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={()=>setShowMenu((e)=>!e)}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					    </button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className={`${showMenu===true?"block":"hidden"} md:hidden mobile-menu`}>
				<ul className="">
					<li className="active"><a className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"><Link href="/">Home</Link></a></li>
					<li><a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"><Link href="/">Catalog</Link></a></li>
					<li><a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"><Link href="/">About Us</Link></a></li>
					<li><a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"><Link href="/">Projects</Link></a></li>
				</ul>
			</div>
		</nav>
        {children}
        </div>
    )
}

export default NextLayout
