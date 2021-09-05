import Image from 'next/image';
import { StepCardImage } from './Step-Card.styled';
const StepCard = ({title,description,svgName,idx}) => {
    return (
        <div className="collumn">
            <div className="show-mobile">
                <div className="number" style={{
                    position: 'relative'
                }}>
                    <StepCardImage   width={44} height={44} src={`/img/step-${idx}.png`} alt="Sign Up" />
                </div>
            </div>
            <div className="img-wrapper">
                <Image width={62} src={`/svg/${svgName}`} height={62} alt="" />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default StepCard;