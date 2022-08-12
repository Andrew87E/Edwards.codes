import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import type { BlogType } from '../../types/blog'
import moment from 'moment'
import { resolveHref } from 'next/dist/shared/lib/router/router'

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export const BlogCards: React.FC = () => {
    const [blogPost, setBlogPost] = useState([])
    const router = useRouter()
  
useEffect(()=>{
    axios.get('api/blog/get').then(res =>{
        setBlogPost(res.data)
        console.info(res.data)
    })
}, [])


const renderCards = () => {
    return(
        blogPost.map((blog: BlogType)=>{
            
            const postDate = moment(blog.postDate).format('MM-DD-YYYY')
        return (
    <div key={blog._id} className="2xl:mr-20 xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
      <div>
        <div className="shadow h-64 rounded">
            <Link 
            href={`/blog/${blog._id}`}
            className="href"
            >
            <a>
            <Image 
            src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" 
            alt="STUFF" 
            className="h-full w-full object-cover overflow-hidden rounded" 
            layout='fill'
            priority
            />
            </a>
            </Link>
        </div>
        <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">{blog.title}</p>
                        {/* set this to blog.header */}
            <p className="text-lg text-gray-800 text-center pb-3">{blog.body}</p> 
            <h3 className="text-sm text-gray-800 text-center">
                {postDate} by {' '}
                <a href="https://github.com/andrew87e"><span className="text-indigo-700 cursor-pointer">{blog.author}</span></a>
            </h3>
        </div>
      </div>
    </div>
        )
    })
    )
}


return(

    <div className="container mx-auto pt-16">
    <div className="mb-10">
        <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-white text-center font-extrabold mb-4 ae-blog-title">My Blog Posts</h1>
        <p className="text-xl text-white text-center xl:w-3/5 mx-auto w-11/12 ae-blog-header">
         Don&apos;t focus on having a great blog. Focus on producing a blog that’s great for your readers.” As a blogger, everything you do flows from understanding your audience and seeking to help them.
        </p>
    </div>
    <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
    {renderCards()}
    </div>
</div>
 )
}
