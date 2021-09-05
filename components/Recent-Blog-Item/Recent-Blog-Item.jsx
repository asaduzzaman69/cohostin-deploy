import { BlogContentContainer, H3, P, RecentBlogItemContainer } from "./Recent-Blog.styled";
import Image from 'next/image';
import { useRouter } from "next/router";

const RecentBlogItem = ({ feature_image, html, title, excerpt, id }) => {
    const router = useRouter();



    return (
        <RecentBlogItemContainer onClick={() => router.push(`/blogs/${id}`)} >

            <div style={{
                position: 'relative',
                height: '200px'
            }}>
                
                            <Image
                src={feature_image}
                height={300}
                height={220}
                layout="fill"

            />

            </div>
     

            <BlogContentContainer >

                <div>
                    <H3>{title}</H3>

                    <P>
                        {excerpt}
                    </P>

                </div>

                <strong>Meisha Bochicchio</strong>
            </BlogContentContainer>



        </RecentBlogItemContainer>
    );
}

export default RecentBlogItem;