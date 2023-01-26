import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className="isolate">
            <main>
                <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-primary hover:ring-gray-900/20">
                            <span className="text-gray-600">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-primary hover:text-blue-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="md:text-5xl font-bold text-primary tracking-tight sm:text-center sm:text-6xl">
                                Empowering farmers to achieve sustainable growth
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                Empowering farmers to grow their business, sustainably through access to decentralized markets, resources and technology.
                            </p>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">
                            <Link
                                to="/signup"
                                className="inline-block rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white hover:text-primary shadow-sm ring-1 ring-primary hover:bg-white hover:ring-primary"
                            >
                                Get started
                                <span className="text-indigo-200" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>
                            <Link
                                to="/market"
                                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-primary hover:text-primary hover:ring-gray-900/20"
                            >
                                Marketplace
                                <span className="text-gray-400" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>

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
                                <stop stopColor="#B2F5EA" />
                                <stop offset={1} stopColor="#37B068" />
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Hero
