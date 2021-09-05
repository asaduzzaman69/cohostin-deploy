import { getPosts } from "/lib/posts";
import Layout from './../../components/Layout';
import FeaturedPost from "/components/Featured-post/Featured-Post";


// icons 
import EditiorPicks from "../../components/Editior-picks/Editor-picks";
import RecentsBlog from "../../components/Recent-Blogs/Recent-Blogs";
import { BlogContainer } from "../../styles/Blog.module";


const BlogOverView = ({ posts = [] }) => {
    return (
        <Layout>
            <BlogContainer className='app-content' style={{
                paddingBottom: '100px'
            }}>
                <div className="container mt-5">
                     <FeaturedPost post={posts[0]} />
                    <EditiorPicks posts={posts} /> 
                    <RecentsBlog posts={posts} />
                </div>
            </BlogContainer>
        </Layout>

    );
}



export default BlogOverView;

export async function getStaticProps(context) {

/*     const options = {
        fields: ['title', 'excerpt', 'feature_image', 'id',],
        formats: 'plaintext',
        include: 'tags'
    } */
    const posts = await getPosts({include: 'tags'});


    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts }
    }
}