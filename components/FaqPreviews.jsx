import Image from 'next/image';

const FAQ = () => {
    return (
        <section className="container-fluid faq-section section divider" data-scroll="once">
            <div className="container-wrapper">
                <div className="faq">
                    <div className="faqs">
                        {/*                 <!-- <h3 className="center-text">What Cohostin owners are saying</h3> -->
            <!-- Rent tracking FAQ --> */}
                        <div className="faq-wrap active" toggle-active-dest="rent-tracking" toggle-active-group="faq">
                            {/* NEED TO REPLACE THE DATA */}
                            <div className="collumn">
                                <div>
                                    <h4>{"With Cohostin revenue from my vacation rental has nearly doubled from when I did it myself, best part is they handle everything."}</h4>
                                    <h5>—David S.</h5>
                                </div>
                                <div>
                                    <h4>{"Cohostin 24/7 guest team is extremely helpful and friendly. Our guest reviews are always saying how clean the propety is and how communication was fantastic. Cohostin is a win all around."}</h4>
                                    <h5>—Becki R.</h5>
                                </div>
                            </div>
                            <div className="collumn">
                                <div>
                                    <h4>{"My vacation rental with Cohostin could not be better. I rented on my own for the past 4 years and never got the bookings I do with Cohostin."}</h4>
                                    <h5>—Summer P.</h5>
                                </div>
                                <div>
                                    <h4>{"In just 30 days of listing with Cohostin my only thought was why had I not gone with them sooner. Getting way more bookings!"}</h4>
                                    <h5>—Steve S.</h5>
                                </div>
                            </div>
                            <div className="collumn">
                                <div>
                                    <h4>{"Cohosting keeps us in the loop on all the great bookings, while they are handling everything flawlessly behind the scenes. Less stress, and trouble free bookings—more revenue."}</h4>
                                    <h5>—Nick V.</h5>
                                </div>
                                <div>
                                    <h4>{"With Cohostin we never stress, and make more. Thanks to Cohostin we know our property and guest are being taken care of by the friendliest team."}</h4>
                                    <h5>—Valeri L.</h5>
                                </div>
                            </div>
                        </div>
                        {/*                         <!-- END Rent tracking FAQ -->
*/}                    </div>
                    <div className="links" data-scroll="once centerVertical">
                        <div className="collumn">
                        </div>
                        <div className="collumn">
                            <div className="postion-relative">
                            <Image width={63}  src="/svg/message-bouble.svg" height={63} alt="" />

                            </div>
                            <p></p>
                            <a href="#" target="_blank">Chat with Rental Advisor</a>
                        </div>
                        <div className="collumn">
                            <div className="position-relative">
                            <Image width={63}  src="/svg/mail-checked.svg" height={63} alt="" />

                            </div>
                            <p>Need to get in touch? Reach us at</p>
                            <a href="mailto:help@cohostin.com">help@cohostin.com</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*             <!-- <div className="background"></div> -->
*/}        </section>
    );
}

export default FAQ;