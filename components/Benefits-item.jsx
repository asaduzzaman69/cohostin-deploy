import Image from 'next/image'
const BenefitsItem = ({title, description, svgName}) => {
    return (
        <li>
            <div className="image">
                <Image width={80} height={80} src={`/svg/${svgName}`}  alt='' />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </li>
    );
}

export default BenefitsItem;