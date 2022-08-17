import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import type { BlogType } from '../../types/blog'
import moment from 'moment'
import { Jumbotron } from '../global/jumbotron/jumbotron'
import { useUser } from '@auth0/nextjs-auth0'

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export const BlogCards: React.FC = () => {
    const [blogPost, setBlogPost] = useState([])
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()
    const { user } = useUser();

  
useEffect(()=>{
    axios.get('api/blog/getAll').then(res =>{
        setBlogPost(res.data)
        console.info(res.data)
        setLoading(false)
    })
}, [])


const renderCards = () => {
    return(
        blogPost.map((blog: BlogType)=>{
            
            const postDate = moment(blog.postDate).format('MM-DD-YYYY')
        return (
    <div key={blog._id} className="ae-blog-card hover:scale-105 xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 sm:mx-0">
      <div>
        <div className="shadow h-64 rounded-full relative">
            <Link 
            href={`/blog/${blog._id}`}
            className="href"
            >
            <a>
            <Image 
            src={blog.img} 
            alt="STUFF" 
            className="h-full w-full rounded" 
            layout='fill'
            priority
            data-mdb-ripple="true"
            />
            </a>
            </Link>
        </div>
        <div className="p-6 w-11/12 mx-auto -mt-24 bg-gray-900 rounded-3xl z-20 relative mb-4">
            <p className="uppercase text-sm text-lime-500 text-center pb-3 bg-transparent">{blog.title}</p>
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

if (isLoading) {
    return(
    <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
        <Jumbotron />
        <Jumbotron />
        <Jumbotron />
        <Jumbotron />
        <Jumbotron />
    </div>
    )
} else {

return(
    <div className="pt-16 w-full h-full">
    <div className="mb-10">
        <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-white text-center font-extrabold mb-4 ae-blog-title">
            {"My Blog Posts".split("").map((letter, index) => {
            return (
             <span
              key={index}
              className="transition-all cursor-default duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 xl:text-5xl pt-4 xl:pt-0 text-3xl text-white text-center font-extrabold mb-4 ae-blog-title"
             >
              {letter}
             </span>
         );
        })} 
        </h1>
        <p className="text-xl text-white text-center xl:w-3/5 mx-auto w-11/12 ae-blog-header">
        {"”Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.”".split("").map((letter, index) => {
            return (
             <span
              key={index}
              className="transition-all cursor-default duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-2xl ae-blog-quote"
             >
              {letter}
             </span>
         );
        })}        
        </p>
        <p className="text-xl text-white text-center xl:w-3/5 mx-auto w-11/12 ae-blog-header">
            {"As a blogger, everything you do flows from understanding your audience and seeking to help them.".split("").map((letter, index) => {
            return (
             <span
              key={index}
              className="transition-all cursor-default duration-700 hover:duration-100 hover:scale-125 hover:text-indigo-500 pt-4 xl:pt-0 text-xl text-white text-center ae-blog-sub-quote"
             >
              {letter}
             </span>
         );
        })} 
        </p>
    </div>
    <div className="inline-flex flex-wrap justify-between ae-blog-container w-11/12 h-full m-10">
    {renderCards()}
    </div>
    {user ?
    <button 
    className='block text-white bg-transparent hover:bg-gray-900 hover:bg-opacity-40 focus:ring-4 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-lime-500 rounded-full'
    type="button"
    >
        <Link href="/blog/newpost">
            <a> Create a post </a>
            </Link>
    </button>
: null}
</div>

  )
 }
}
