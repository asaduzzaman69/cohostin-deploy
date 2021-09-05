import Link from 'next/link';
import { useRouter } from 'next/router';
import { convertTheTagWithDash } from '../../utils/helper';
import { A, Heading, P, StyledImage, Tag } from './Editor-Picks-Item.styled';



const reduceText = (text) => {
    if (text.length > 130) {
        text = `${text.substr(0, 130)}...`
        return text
    };


    return text;

}

const EditorsPickItem = ({ title, feature_image, excerpt, id, tags }) => {

    const route = useRouter();
    const path = `/blogs/${id}`
    return (
        <div style={{
            position: 'relative',
        }}>


            <Tag onClick={() => route.push(`/blogs/all?tag=${convertTheTagWithDash(tags[0].name)}`)}>{tags[0].name}</Tag>
            <div className="position-relative" style={{
                height: '200px'

            }}>
                <StyledImage
                    objectFit="cover"
                    width={200}
                    height={190}
                    layout='fill'
                    src={feature_image} />

            </div>


            <Heading className='my-3' onClick={() => route.push(path)}>{title}</Heading>
            <P>
                {reduceText(excerpt)}     </P>


            <Link passHref={true} href={path}>
                <A href="#" >Read More</A>
            </Link>

        </div>
    );
}

export default EditorsPickItem;