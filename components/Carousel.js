import Image from "next/image"
import { catalogOne } from '../assets'

const Carousel = () => {
    return (
        <>
        <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl w-10/12" style={{minHeight: '19rem'}}>
            <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{minHeight: '19rem'}}>
                <p class="p-2 absolute z-10 text-white">#Build the things easily</p>
                <div class="absolute inset-0 w-full h-full flex fill-current text-white">
                <Image src={catalogOne} alt="daed" class="bg-contain bg-no-repeat bg-center" />
                </div>
            </div>
            <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
                <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                <p class="text-gray-600">
                    <span class="text-gray-900">Project | Perumahan Pungging, Mojokerto</span>
                </p>
                <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                    <span>Learn more about our products</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                </a>
                </div>
                <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
            </div>
            <button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                <span class="block transform hover:scale-150" >&#x279c;</span>
            </button>
            <button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
                <span class="bloc transform hover:scale-150">&#x279c;</span>
            </button>
        </div>
        <div class="flex items-center pt-5 justify-between">
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style={{maxHeight: "60px"}}/></button>
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style={{maxHeight: "60px"}}/></button>
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style={{maxHeight: "60px"}}/></button>
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style={{maxHeight: "60px"}}/></button>
            <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style={{maxHeight: "60px"}}/></button>
        </div>
        </>
    )
}

export default Carousel
