import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Navbar } from '../../../Components';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BlogType } from '../../../types/blog';
import moment from 'moment';

export const BlogPost: GetStaticProps = () => {
    const [blogPost, setBlogPost] = useState<BlogType[]>([])
    const router = useRouter()
    const thisPage = router.query
    const pageId = thisPage.id

useEffect(()=>{
    axios.get(`/api/blog/get/${pageId}`).then(res =>{
        const response = res.data
        setBlogPost(response)
        console.log('RESPONSE FROM PAGE ID', response)
    })
}, [pageId])

const renderPost = () => { 
    return (
    blogPost.map((blog: BlogType)=>{
        
        const postDate = moment(blog.postDate).format('MM-DD-YYYY')
    return(
        <><article className='w-full h-10 text-white border flex w-full'>
            <h1>{blog.title}</h1>
        </article><article className='w-full h-72'>
                <p className='text-white w-full'>
                    Put the body here
                    {blog.body}
                </p>

            </article><section>
                {/* Make this dynamic based on comments */}
                <Link href="/post/[id]/[comment]" as={`/post/${blog._id}/first-comment`}>
                    <a>First comment (not working yet)</a>
                </Link>

            </section></>
)
})
)
}


return(
    <>
    <Navbar />
    <main className='w-10/12 h-full border border-white text-white mt-20 '>
        {renderPost()}
        <h1>This is a page</h1>
    </main></>
)

}

export default BlogPost
 