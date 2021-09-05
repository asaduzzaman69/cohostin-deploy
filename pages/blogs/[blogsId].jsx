import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getPosts, GetSinglePost } from "../../lib/posts";
import Image from 'next/image';
import Head from "next/head";
import { SubHeading } from "../../styles/shared-styles/Typography";



const customCss = `



h1 {
    font-size: 54px !important;
    font-weight: bold !important;
    text-transform: capitalize !important; 
       line-height: 1.25 !important;
    margin-bottom: 24px !important;
    color: #0c0c0e !important;
};


img {
    width: 100% !important;
    height: 500px !important;
}

figure > img, a > img, .kg-gallery-image > img, .kg-bookmark-thumbnail > img {
    width: 100% !important;
    height: max-content  !important;
    object-fit:cover !important;
    object-position:50% 50% !important;
}


.kg-gallery-image > img {
    margin: 20px 0px;
}

P{
    line-height: 1.78 !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    margin-bottom: 24px !important;
    color: rgb(55, 55, 60) !important;
    font-weight: 500 !important;
    margin-top: 20px !important;

}

.container-blog {
    max-width: 780px;
    width: 100%;
    margin: auto !important;
}
a {
    color: #ff1a75 !important;
}

@media (max-width: 998px) {
    .app-content {
        padding-top: 25px !important;
    }
}

@media (max-width: 450px) {
    h1 {
        font-size: 30px !important;
    }
}
`

const BlogDetail = ({ post }) => {
    const { html, feature_image, title, excerpt } = post;
    console.log(html)

    return (
        <Layout>
            <Head>

                <style>{customCss}</style>
            </Head>
            <div className="app-content container-blog" style={{
                paddingTop: '140px',
                paddingLeft: '10px',
                paddingRight: '10px',
            }}>
                <div style={{
                        borderBottom:'1px solid #DEDEE1',
                        marginBottom: '35px',
                }}>

                    <Image width={780} height={500} src={feature_image} />

                    <br />
                    <br />
                    <h1>{title}</h1>
                    <SubHeading>{excerpt}</SubHeading>
                </div>


                {/*             <Image
                src={feature_image}
                width={780}
                height={500}

            />   */}

                <div dangerouslySetInnerHTML={{ __html: html }}></div>

            </div>


            <style jsx>{`

            p {
                line-height: 1.78;
                font-size: 18px;
                margin : 18px 0px
                
            }
            image {
                    margin: auto ;
                }
        
      `}</style>
        </Layout>
    );
}

export const getStaticPaths = async (context) => {
    const posts = await getPosts();

    const paths = posts.map((post) => ({
        params: { blogsId: post.id },
    }))


    return {
        fallback: false,
        paths: paths
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.blogsId;
    const post = await GetSinglePost(id);

    return {
        props: {
            post,
            fallback: true
        }
    }


}

export default BlogDetail;


