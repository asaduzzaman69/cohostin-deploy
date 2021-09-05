import { SemiHeading } from "../../styles/shared-styles/Typography";
import RecentBlogItem from "../Recent-Blog-Item/Recent-Blog-Item";


import Link from 'next/link';

const RecentsBlog = ({ posts }) => {

    const recentBlog = posts.slice(5)
    return (
        <div className='mt-5'>
            <div className="d-flex align-items-center justify-content-between">
                <SemiHeading>
                    Recent Posts

                </SemiHeading>
                <Link href="/blogs/all">
                <a href="">See All</a>

                </Link>
            </div>


            {
                recentBlog.map((el,idx) => <RecentBlogItem key={`recent-blog-item-${idx}`} {...el} />)
            }
        </div>
    );
}

export default RecentsBlog;