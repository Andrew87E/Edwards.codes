import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Navbar } from '../../../Components';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BlogType } from '../../../types/blog';
import moment from 'moment';

export const BlogPost: GetStaticProps = () => {
    const [blogPost, setBlogPost] = useState([])
    const router = useRouter()
    const thisPage = router.query
    const pageId = thisPage.id
    let tempArr = []

useEffect(()=>{
    axios.get(`/api/blog/get`).then(res =>{
        const response = res.data
        if (res.data === `${pageId}`){
            tempArr.push()
        }
        console.log(res.data)
        setBlogPost(thisPost)
    })
}, [pageId])



const renderPost = () => { 
    return (
    blogPost.map((blog: BlogType)=>{
        
        const postDate = moment(blog.postDate).format('MM-DD-YYYY')
    return(
        <><article className='w-full h-10 text-white border'>
            <h1>{blog.title}</h1>
        </article><article className='w-full h-72'>
                <p className='text-white w-full'>
                    Put the body here

                    Sint reprehenderit ipsum minim consequat do anim elit consectetur. Occaecat ad enim eu ullamco eiusmod esse in tempor ullamco aliquip ipsum laborum. Sunt in laborum elit enim cupidatat aliqua deserunt occaecat voluptate qui incididunt velit aliqua commodo.
                    Quis officia Lorem minim elit in esse. Fugiat reprehenderit aliquip deserunt minim adipisicing ipsum amet consequat dolor eu occaecat aliquip est. Incididunt irure labore enim consequat anim. Ad excepteur nisi consectetur sint non velit enim mollit. Mollit sint do eu occaecat ex minim.
                    Dolor incididunt pariatur cillum sit enim. Enim id velit pariatur sit Lorem officia magna et culpa in eiusmod labore adipisicing. Cillum dolor occaecat minim magna ad elit do nostrud deserunt. Irure ullamco ut ad ex Lorem occaecat officia est aute ad incididunt aute. Eu voluptate occaecat proident cillum. Occaecat ut elit pariatur ex mollit reprehenderit id nostrud officia ipsum. Pariatur in sit pariatur labore nostrud dolore eiusmod irure mollit.
                </p>

            </article><section>
                {/* Make this dynamic based on comments */}
                <Link href="/post/[id]/[comment]" as={`/post/${blog._id}/first-comment`}>
                    <a>First comment</a>
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
