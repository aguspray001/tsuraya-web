import { useState } from "react";
import Head from "next/head";

const NextLayout = ({children, title, description}) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
        </Head>
        {/* <!-- Navbar goes here --> */}
		<nav class="bg-white shadow-lg border-2 fixed z-10 w-full">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<a href="#" class="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"/> */}
								<span class="font-semibold text-gray-500 text-lg">Tsuraya</span>
							</a>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div class="hidden md:flex items-center space-x-1">
							<a href="/" class="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold ">Home</a>
							<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About Us</a>
							<a href="#catalog" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Catalog</a>
							<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Project</a>
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div class="hidden md:flex items-center space-x-3 ">
						<a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
						<a href="" class="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>
					</div>
					{/* <!-- Mobile menu button --> */}
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button" onClick={()=>setShowMenu((e)=>!e)}>
						<svg class=" w-6 h-6 text-gray-500 hover:text-blue-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					    </button> flex-gro flex-groww
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div class={`${showMenu===true?"block":"hidden"} md:hidden mobile-menu`}>
				<ul class="">
					<li class="active"><a href="/" class="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</a></li>
					<li><a href="#" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Abous Us</a></li>
					<li><a href="#catalog" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Catalog</a></li>
					<li><a href="#" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Projects</a></li>
				</ul>
			</div>
		</nav>
        {children}
        </div>
    )
}

export default NextLayout
