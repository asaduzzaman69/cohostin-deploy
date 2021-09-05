import ReactPaginate from 'react-paginate';
import { getPosts } from "/lib/posts";

// Layout Component
import Layout from './../../components/Layout';
import { GridLayout } from '/styles/Blog.module.jsx'

// Layout Component
import TagsPreview from "/components/Tags-Preview/Tags-Preview";
import BlogItem from "/components/Blog-Item/Blog-Item";


// Router Hooks
import { useRouter } from 'next/router'


// icons 
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import TagsButton from "../../components/Tags-Button/Tags-Button";


// Helper Functions
import { convertTheTagWithDash, parseTagFromPosts } from './../../utils/helper';
import { BlogAllContainer } from '../../styles/Blog.module';

const BlogOverView = ({ posts = [], tagsArr, postsLength }) => {
    const router = useRouter();
    const { query: { page, tag } } = router;




    // Function for changing tag URL
    const handleClick = (val) => {
        router.push(`/blogs/all?tag=${val}`)
    }


    // Handler for pagination
    const handlePaginateChange = (e) => {
        let tag, page = '';

        if (router.query.tag) {
            tag = router.query.tag
        }
        page = e.selected
        router.push(`/blogs/all?tag=${!tag ? '' : tag}&page=${page}`)
    }

    return (
        <Layout>
            <BlogAllContainer style={{
                paddingBottom: '100px'
            }}>
                <div className='container' style={{
                }}>
                    <TagsPreview activeTag={tag}>
                        <TagsButton defaultLabel='' isActive={!tag}>All Catagory</TagsButton>
                        {

                            tagsArr.map((el, idx) =>
                                <TagsButton key={`tags-preview-${idx}`}
                                    handleClick={handleClick}
                                    isActive={convertTheTagWithDash(el) === tag}>
                                    {el}
                                </TagsButton>)
                        }
                        <TagsButton></TagsButton>
                    </TagsPreview>

                    <GridLayout >
                        {
                            posts.map((el, idx) => <BlogItem key={`blog-item-${idx}`} {...el} />)
                        }

                    </GridLayout>

                    <ReactPaginate
                        previousLabel={
                            <>
                                <BsArrowLeft className='mr-3' />
                                <span style={{
                                    marginLeft: '10px'
                                }}>preview</span>
                            </>
                        }
                        nextLabel={
                            <>
                                <span style={{
                                    marginRight: '10px'
                                }}>Next</span>
                                <BsArrowRight />

                            </>
                        }
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={postsLength / 3}
                        forcePage={page ? parseInt(page) : 0}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={(e) => handlePaginateChange(e)}
                        containerClassName={'pagination'}
                        activeClassName={'paginate-active'}

                    />
                </div>
            </BlogAllContainer>
        </Layout>

    );
}



export default BlogOverView;


export async function getServerSideProps(context) {
    const page = context.query.page || 0;
    const tag = context.query.tag || undefined;
    const LIMIT = 3;






    // Fetch the Posts
    const posts = await getPosts({ include: 'tags' });
    const newArray = [...posts]

    // Paginate The posts
    const tagsArr = parseTagFromPosts(posts);
    const paginatedPost = newArray.splice(page * LIMIT, LIMIT);

    // if there is tag filter Them and just return
    if (tag) {
        const postWithMatchedTags = posts.filter((el1) => el1.tags.some((el2) => {
            let isFound = false;
            const convertedName = convertTheTagWithDash(el2.name);

            if (convertedName === tag) {
                isFound = true
            }

            return isFound;
        }))

        // otherwise paginate in normall

        const paginatedTagPost = postWithMatchedTags.splice(page * LIMIT, LIMIT);


        return {
            props: {
                posts: paginatedTagPost,
                tagsArr,
                postsLength: paginatedTagPost.length


            }
        }


    }






    if (!posts) {

        return {
            notFound: true,
        }
    }



    return {
        props: {
            posts: paginatedPost,
            tagsArr,
            postsLength: posts.length

        }
    }


    /*     let filter = '';
        let page = ''
        const tag = context.query.tag;
        const pageVal = context.query.page;
    
    
        if(tag) {
    
        filter = filter + `tag:${tag}`
    
    
        }
        
        if(page) {
            page = pageVal
        }
    
    
    
    
    
        */

}

/*  export async function getStaticProps(context) {
    const posts = await getPosts({ include: 'tags' });

    if (!posts) {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            posts,
            tagsArr

        }
    }
}  */