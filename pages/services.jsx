import Head from 'next/head';
import Benefits from '../components/Benefits';
import Layout from "../components/Layout";
import StepsPreview from '../components/StepsPreview';
import Image from 'next/image'
import FAQ from '../components/FaqPreviews';


const Service = () => {
    return (
        <Layout>
            <Head>
                <title>Services</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* Section 1 */}
            <div className="app-content  rental-passport-page">
                <section className="container-fluid hero-section hero-section-full">
                    <div className="container-wrapper">
                        <div className="hero">
                            <div className="mobile-img">
                                <Image layout="responsive" width={980} height={690} src="/img/services-hero.jpg" alt="Cohostin services" />
                            </div>
                            <div className="text-wrapper">
                                {/*                   <!-- <div className="inner-text"> -->
 */}                  <div className="row">
                                    <div className="col-12 col-md-12 col-lg-4 col-xl-4 offset-lg-1 offset-xl-1 d-flex align-items-center">
                                        {/*                       <!-- <p><strong>Do Less. . .</strong></p> -->
                      <!-- <h2>Stop doing it yourself. . .</h2> --> */}

                                        <div>
                                            <p>Cohostin Vacation Rental Management</p>
                                            <h1>Earn more from your vacation rental.</h1>
                                        </div>

                                        {/* 

                          <!-- <p>Your vacation rental shouldn't be your second job.</p> -->
                          <!-- <div className="show-mobile">
                              <a href="" className="btn btn-lg btn-primary btn-anim-hover"><span className="bck"></span><span className="title">Get Started</span></a>
                          </div> --> */}

                                    </div>
                                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 offset-lg-1 offset-xl-1">
                                        <div className="passport-form">


                                            <div data-paperform-id="vqqs4wfn"><iframe frameBorder="0" width="100%" allowpaymentrequest="" allow="geolocation *;camera *;microphone *;" title="Embedded form"
                                                style={{ minHeight: '200px' }} src="https://paperform.co/form/vqqs4wfn?embed=1&amp;takeover=0&amp;inline=1&amp;popup=0&amp;_d=&amp;_in=1&amp;_embed_id=1" height="469"></iframe></div>
                                            {/*   <script>(function() {var script = document.createElement('script'); script.src = "https://paperform.co/__embed"; document.body.appendChild(script); })()</script> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-btn">
{/*                             <img src="/svg/more.svg" alt="more" />
 */}                        </div>
                    </div>
                </section>

                {/* Section 2 */}

                <section className="container-fluid benefits-section">
                    <div className="container-wrapper">
                        <div className="background"></div>

                        <Benefits />
                        <div id="testimonials" className="quote" style={{ marginTop: '-120px', 'paddingTop': '120px' }}>
                            <div className="media-wrapper">
                                <Image width={790}
                                    height={770}
                                     src="/img/careers-benefits-quote-4.jpg"
                                    alt=""
                                    />
                            </div>
                            <div className="text-wrapper">
                                <p>{"Cohostin is amazing. They are always quick to respond and are there to help. They have excellent knowledge of the rental markets and are willing to please potential guests with whatever they need to make their stay memorable."}</p>
                                <div className="user">
                                    <div className="image" style={{ backgroundImage: ` url(https://cdn.vapid.site/sites/23410758-2e18-480a-86fb-03799ee50416/img/peggy-9f96b1ea1f4fd07327aeb7d7e04d9c79.jpg)` }}>
                                        <div className="company" style={{ backgroundImage: `url(https://cdn.vapid.site/sites/23410758-2e18-480a-86fb-03799ee50416/img/cohostin-icon-1da18b477633fbfb5f5d63a3dd4605c1.png)` }}></div>
                                    </div>
                                    <div className="name">Peggy S.<br />Since 2018</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <FAQ />
                <StepsPreview />

            </div>

        </Layout>
    );
}

export default Service;