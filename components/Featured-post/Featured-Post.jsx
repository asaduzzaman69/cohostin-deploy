import { FeaturedPostContainer, Heading, P, StyledImage, StyledImageMain } from "./Featured-post.styled";
import Image from 'next/image'
import { Tag } from "../../styles/shared-styles/utils";
import { useRouter } from "next/dist/client/router";

const FeaturedPost = ({ post }) => {
    const router = useRouter();

    const { title, excerpt, feature_image, id } = post;
    return (
        <FeaturedPostContainer  >
            <div>
                <Heading
                    onClick={() => router.push(`/blogs/${id}`)}


                    style={{ textTransform: 'uppercase' }}>{title}</Heading>
                <div className='d-flex align-items-center  my-4'>
                    <StyledImage src='/img/user.jpeg' width={40} height={40} />
                    <h6

                        style={{
                            marginLeft: '10px'
                        }}>Asaduzzaman on 8th september</h6>
                </div>

                <P className='mb-4'>
                    {excerpt}                </P>
                <Tag>Tag</Tag>
            </div>
            <div style={{position: 'relative'}}>
                <StyledImageMain src={feature_image} layout='responsive' width={500} height={350} />
            </div>
        </FeaturedPostContainer>
    );
}

export default FeaturedPost;