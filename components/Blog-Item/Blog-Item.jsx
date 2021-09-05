import { BlogHeading, BlogItemContainer, BlogSubHeading } from "./Blog-Item.styled";
import Image from 'next/image'
import { Tag } from "../../styles/shared-styles/utils";
import { useRouter } from "next/router";

const BlogItem = ({ feature_image, tags,id, title }) => {
    const history = useRouter();
    return (
        <BlogItemContainer onClick={() => history.push(`/blogs/${id}`)}>
            <Image
                src={feature_image}

                width={500}
                height={265}
        alt=""
            />
            <Tag>{tags[0].name}</Tag>
            <BlogHeading>{title}</BlogHeading>
            <BlogSubHeading>
                EMAA KATERSON - MARCH 9 2021
            </BlogSubHeading>

        </BlogItemContainer>
    );
}

export default BlogItem;