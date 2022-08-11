import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'

export const BlogPost: GetStaticProps = () => {
const router = useRouter();
const { id } = router.query

return(
    <main className='w-10/12 h-full border border-white text-white'>
        <article className='w-full h-10 text-white border'>
        <h1>Put Blog Title here {id}</h1>
        </article>

        <article className='w-full h-72'>
            <p className='text-white w-full'>
                Put the body here

            Sint reprehenderit ipsum minim consequat do anim elit consectetur. Occaecat ad enim eu ullamco eiusmod esse in tempor ullamco aliquip ipsum laborum. Sunt in laborum elit enim cupidatat aliqua deserunt occaecat voluptate qui incididunt velit aliqua commodo.
            Quis officia Lorem minim elit in esse. Fugiat reprehenderit aliquip deserunt minim adipisicing ipsum amet consequat dolor eu occaecat aliquip est. Incididunt irure labore enim consequat anim. Ad excepteur nisi consectetur sint non velit enim mollit. Mollit sint do eu occaecat ex minim.
            Dolor incididunt pariatur cillum sit enim. Enim id velit pariatur sit Lorem officia magna et culpa in eiusmod labore adipisicing. Cillum dolor occaecat minim magna ad elit do nostrud deserunt. Irure ullamco ut ad ex Lorem occaecat officia est aute ad incididunt aute. Eu voluptate occaecat proident cillum. Occaecat ut elit pariatur ex mollit reprehenderit id nostrud officia ipsum. Pariatur in sit pariatur labore nostrud dolore eiusmod irure mollit.
            </p>

        </article>

        <section>
        {/* Make this dynamic based on comments */}
        <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link> 

        </section>

    </main>
)

}

export default BlogPost
