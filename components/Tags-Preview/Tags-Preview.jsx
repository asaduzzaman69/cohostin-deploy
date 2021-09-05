import { useRouter } from "next/dist/client/router";
import TagsButton from "../Tags-Button/Tags-Button";
import { TagsPreviewContainer } from "./Tags-Preview.styled";

const TagsPreview = ({children , activeTag, handleClick}) => {

    return ( 
        <TagsPreviewContainer>
            {
                children
            }
        </TagsPreviewContainer>
     );
}
 



export default TagsPreview;