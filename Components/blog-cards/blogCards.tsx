import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


export const BlogCards: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
  



return(
<div className="container mx-auto pt-16">
    <div className="mb-10">
        <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-extrabold mb-4">Our Blog Posts</h1>
        <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
         Don&apos;t focus on having a great blog. Focus on producing a blog that’s great for your readers.” As a blogger, everything you do flows from understanding your audience and seeking to help them.
        </p>
    </div>
    <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
    <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
        <div className="shadow h-64 rounded z-10">
            <Image 
            src="https://cdn.tuk.dev/assets/photo-1573451444472-7b0b275ab824.jfif" 
            alt="STUFF" 
            className="h-full w-full object-cover overflow-hidden rounded"
            layout='fill'
            />
        </div>
        <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">VEHICLE</p>
            <p className="text-lg text-gray-800 text-center pb-3">The way I drive and handle a car, is an expression of my inner feeling.</p>
            <p className="text-sm text-gray-800 text-center">
                May 13, 2019 by <a href="javascript:void(0)"><span className="text-indigo-700 cursor-pointer">Silene Cox</span></a>
            </p>
        </div>
    </div>
    <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
        <div className="shadow h-64 rounded">
            <Link 
            href='/blog/[id]'
            as={`/blog/${id}`} 
            className="href"
            >
            <a>
            <Image 
            src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" 
            alt="STUFF" 
            className="h-full w-full object-cover overflow-hidden rounded" 
            layout='fill'
            />
            </a>
            </Link>
        </div>
        <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">Work {id}</p>
            <p className="text-lg text-gray-800 text-center pb-3">I&apos;m a greater believer in luck, and I find the harder I work the more I have of it.</p>
            <p className="text-sm text-gray-800 text-center">
                May 13, 2019 by <a href="javascript:void(0)"><span className="text-indigo-700 cursor-pointer">Sansa Rollins</span></a>
            </p>
        </div>
    </div>
    <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
        <div className="shadow h-64 rounded">
            <Image 
            src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif" 
            alt="STUFF" 
            className="h-full w-full object-cover overflow-hidden rounded" 
            layout='fill'
            />
        </div>
        <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">Productivity</p>
            <p className="text-lg text-gray-800 text-center pb-3">Productivity is being able to do things that you were never able to do before.</p>
            <p className="text-sm text-gray-800 text-center">
                May 13, 2019 by <a href="javascript:void(0)"><span className="text-indigo-700 cursor-pointer">Ashley Wilson</span></a>
            </p>
        </div>
    </div>
    </div>
</div>
 )
}
