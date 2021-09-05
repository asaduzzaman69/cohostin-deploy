import { benefits } from  "./../pages/api/data/service";
import BenefitsItem from "./Benefits-item";

const Benefits = () => {
    return ( 
        <div className="benefits">
        <center>
            <h2>Because your vacation rental <br /> deserves amazing benefits</h2>
        </center>
        <ul>
                {
                    benefits.map((el,idx) => <BenefitsItem key={`benefits-${idx + 1}`} {...el} />)
                }
        </ul>
    </div>
     );
}
 
export default Benefits;