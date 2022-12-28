/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
    ]   

    export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-white">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".4"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#B2F5EA" />
                    <stop offset={1} stopColor="#37B068" />
                    </linearGradient>
                </defs>
                </svg>
            </div>

        <main>
            <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-primary hover:ring-gray-900/20">
                    <span className="text-gray-600">
                        Announcing our next round of funding.{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </span>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-primary tracking-tight sm:text-center sm:text-6xl">
                    Introducing trail funding
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                        Making financial transparency achievable for farmers in a fast and easy way. Explore our new marketplace
                    </p>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                        href="#"
                        className="inline-block rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                        Get started
                        <span className="text-indigo-200" aria-hidden="true">
                        &rarr;
                        </span>
                    </a>
                    <a
                        href="#"
                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-primary hover:ring-gray-900/20"
                    >
                        Marketplace
                        <span className="text-gray-400" aria-hidden="true">
                        &rarr;
                        </span>
                    </a>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
                </div>
            </div>
            </div>
        </main>
        </div>
    )
    }






// import React from 'react'
// import { heroImg } from '../assets'
// import Info from './Info'

// const Hero = () => {
//     return (
//         <section className='h-screen'>
//             <img src={heroImg} alt="produce" className='h-full w-full object-cover' />
//             <div className='absolute inset-0 flex flex-col items-center justify-center h-full w-full'>
//                 <h1 
//                     className='text-white text-6xl font-bold mb-8'
//                 >
//                     A taste of organically grown African products
//                 </h1>

//                 <h3 
//                     className=' text-white text-2xl'
//                 >
//                     From land prep to harvest documented products. Zero artificial chemicals
//                 </h3>

//                 <button 
//                     className='bg-primary px-8 py-3 rounded-[8px] font-[500] mt-8'
//                 >
//                     Explore more
//                 </button>
//                 <div className='absolute bottom-0'>
//                     <Info className='w-full' />
//                 </div>
                
//             </div>
            
//         </section>
//     )
// }

// export default Hero