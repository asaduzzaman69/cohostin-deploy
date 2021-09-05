import Link from 'next/link'
import { convertTheTagWithDash } from '../../utils/helper';
import { TagsButtonContainer } from "./Tags-Button.styled";


const TagsButton = ({children, isActive,defaultLabel}) => {
     if(!children) return null;
     const ref  =  defaultLabel === '' ? `/blogs/all` : `/blogs/all?tag=${convertTheTagWithDash(children)}`;
     

    if(!children) return <h1>Nul</h1>;
    return ( 
        <TagsButtonContainer  isActive={isActive}>
             <Link  href={ref}>
            {children}
             </Link>
        </TagsButtonContainer>
     );
}
 
export default TagsButton;