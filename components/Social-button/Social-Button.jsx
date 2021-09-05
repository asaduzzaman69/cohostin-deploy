import { SocialButtonContainer } from "./social.styled";
import { GrTwitter } from 'react-icons/gr'



const SocialButton = ({children, icon}) => {
    return ( 
        <SocialButtonContainer>
           {icon}
            <span  style={{
                marginLeft: '10px',
                fontWeight: 600
            }}>
                {children}
            </span>
                
        </SocialButtonContainer>
     );
}
 
export default SocialButton;