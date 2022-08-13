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
    axios.get('api/blog/getAll').then(res =>{
        setBlogPost(res.data)
        console.info(res.data)
    })
}, [])


const renderCards = () => {
    return(
        blogPost.map((blog: BlogType)=>{
            
            const postDate = moment(blog.postDate).format('MM-DD-YYYY')
        return (
    <div key={blog._id} className="ae-blog-card hover:scale-105 xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 sm:mx-0">
      <div>
        <div className="shadow h-64 rounded">
            <Link 
            href={`/blog/${blog._id}`}
            className="href"
            >
            <a>
            <Image 
            src={blog.img} 
            alt="STUFF" 
            className="h-full w-full object-cover overflow-hidden rounded" 
            layout='fill'
            priority
            data-mdb-ripple="true"
            />
            </a>
            </Link>
        </div>
        <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-gray-700 rounded z-20 relative mb-4">
            <p className="uppercase text-sm text-lime-500 text-center pb-3 bg-gray-700">{blog.title}</p>
                        {/* set this to blog.header */}
            <p className="text-lg text-white text-center pb-3">{blog.header}</p> 
            <h3 className="text-sm text-white text-center">
                {postDate} by {' '}
                <a href="https://github.com/andrew87e"><span className="text-lime-500 cursor-pointer hover:text-blue-600">{blog.author}</span></a>
            </h3>
        </div>
      </div>
    </div>
        )
    })
    )
}


return(

    <div className="pt-16 w-full h-full">
    <div className="mb-10">
        <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-white text-center font-extrabold mb-4 ae-blog-title">My Blog Posts</h1>
        <p className="text-xl text-white text-center xl:w-3/5 mx-auto w-11/12 ae-blog-header">
         Don&apos;t focus on having a great blog. Focus on producing a blog that’s great for your readers.” As a blogger, everything you do flows from understanding your audience and seeking to help them.
        </p>
    </div>
    <div className="inline-flex flex-wrap justify-between ae-blog-container w-11/12 h-full m-10">
    {renderCards()}
    </div>
</div>
 )
}
