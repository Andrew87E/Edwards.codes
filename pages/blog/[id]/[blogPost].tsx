import { GetStaticProps } from 'next';
import { useRouter } from 'next/router'

export const BlogPost: GetStaticProps = () => {
const router = useRouter();

return(
    <div>
        Put Blog Posts here
    </div>
)

}


