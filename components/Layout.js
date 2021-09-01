import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const Layout = ({ children, title, description = null }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { asPath } = useRouter();

  const navigasi = [
    {link: "/", title: "Home"},
    {link: "/about-us", title: "About Us"},
    {link: "/catalog", title: "Catalog"},
    {link: "/join-us", title: "Join Us"}

  ]

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Tsuraya</span>
        </div>
        <div class="block lg:hidden">
          <button
            onClick={() => setOpenMenu((e) => !e)}
            class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <ul class="text-sm lg:flex-grow lg:flex lg:justify-end lg:items-baseline">
            { openMenu &&
              navigasi?.map((nav, key)=>{
                return(
                  <li key={key} class={`rounded-xl py-1 px-2 mx-2`}>
                    <a
                      href={nav.link}
                      class={`block mt-4 lg:inline-block lg:mt-0 ${asPath === nav.link?"text-black":"text-white hover:text-gray-300"}  mr-4`}
                    >
                      {nav.title}
                    </a>
                  </li>
                )
              })
            }
            </ul>
          </div>
        }
      </nav>
      {children}
    </div>
  );
};

export default Layout;
