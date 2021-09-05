import { StepsData } from "./../pages/api/data/service";
import StepCard from  './Step-Card/stepCard';

const StepsPreview = () => {
    return (
        <section className="container-fluid features-section" id="features">
            <div className="container-wrapper">
                <div className="features">
                    <div className="how">
                        <div className="show-mobile">
                            <div className="pre-headline">
                                <p>How it Works</p>
                            </div>
                        </div>
                        <h3 className="text-center">{`We'd love to care for your home and guests.`}</h3>
                        <h2 className="text-center">Join in 3 easy steps</h2>

                        {/*                         <!-- <p className="text-center narrow-text gray-text§">We've made our rent tracking super simple and quick to set up. Unlike other schemes, you don't need to tell your landlord and you don't need to send us your rent.</p> -->
*/}                        <div className="tabpane active" toggle-active-dest="new">
                            <div className="collumn-wrapper">
                                {
                                    StepsData.map((el, idx) => <StepCard key={idx} idx={idx + 1}  {...el} />)
                                }
                            </div>
                            <div className="foot">
                                <button href="!#" data-paperform-id="vqqs4wfn" data-popup-button="1" className="btn btn-lg btn-primary btn-anim-hover"><span className="bck"></span><span className="title">Join Cohostin</span></button>
                                {/*      <script>(function() { var script = document.createElement('script'); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script> */}
                                <p>Still have questions?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsPreview;