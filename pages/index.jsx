import Head from "next/head";
import Image from "next/image";

//Resuable Component
import Layout from "../components/Layout";
import FeatureCard from "../components/Featrue-Card";

// Dummy data
import { feature } from "./api/data/feature";
import { FeatureCardImage } from "../styles/Blog.module";


const Homepage = () => {
  return (
    <Layout>
      <Head>
        <title>Cohostin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="app-content index-page">

        <section className="hero-home">
          <div className="hero">
            <div className="autoheight-div">
              <div className="mobile-img">

                <Image
                  src="/img/hero-sofa-2.jpg"
                  alt=""
                  width={720}
                  data-rjs="2"
                  height={300}
                />
              </div>
              <div className="text-wrapper">
                <div className="inner-text">
                  {/*    <!-- <span className="cohost">Property Management is hard</span> -->
                            <!-- <span className="cohost">Full-Service Vacation Managment</span> -->
                            <!-- <span className="cohost">Full-Service</span> -->
                            <!-- <h1 style="margin-top: 10px;">Cohostin <br> makes it <br> easy.</h1> -->
                            <!-- <h1 style="margin-top: 10px;">We manage differently—so you can rest at ease</h1> -->
                            <!-- <h1 style="margin-top: 10px;">Vacation rental managment</h1> -->
                            <!-- <h1 style="margin-top: 20px;">Vacation rental superhost</h1> --> */}
                  <h1 style={{ marginTop: "20px" }}>
                    Vacation rental{" "}
                    <span
                      style={{ textDecoration: "line-through", color: "#23D3D3" }}
                    >
                      <span style={{ color: "#b9c0cb" }}>manager</span>
                    </span>{" "}
                    <span style={{ fontFamily: " Homemade Apple, cursive" }}>
                      superhost
                    </span>
                  </h1>
                  {/*                      <!-- <p className="hide-mobile"><strong>We manage differently—so you can rest at ease,</strong><br>experience increased bookings, with our <strong>full-service vacation rental managment approach.</strong></p> --> */}
                  <p>
                    <strong>
                      We manage differently—Friendly &amp; Effective—
                    </strong>
                    Discover the profitability of CoHostin <u>full-service</u>{" "}
                    property management.
                  </p>
                  <div className="ctas hide-mobile">
                    <a
                      href="services"
                      className="btn btn-lg btn-primary btn-anim-hover"
                    >
                      <span className="bck"></span>
                      <span className="title">List Your Home</span>
                    </a>
                  </div>
                  <br />

                  <div className="background show-mobile"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn">
            <Image width={49} height={49} src="/svg/more.svg" alt="more" />
          </div>
        </section>

        {/* Section 2 */}

        <section className="container-fluid whatis-section section">
          <div className="content-wrapper">
            <div className="show-mobile">
              <Image width={314} height={430} src="/img/whatis-bg.png" alt="What is Cohostin" />
            </div>
            <p className="pre-headline">Why CoHostin</p>
            <p className="pre-headline"> More Bookings — Lower Fees — Unrivaled Flexibility</p>
            <h2 className="center-headline hide-mobile">Because your vacation rental deserves amazing benefits</h2>
            <h2 className="center-headline show-mobile">Game-changing services for successful vacation rentals</h2>
            <div className="collumn-wrapper">
              <div className="collumn">
                <div className="inner-text">

                  {
                    feature.map((el, idx) => <FeatureCard  {...el} key={`feature-${idx}`}>


                      <div className="show-mobile">
                        <div className="number">
                          <FeatureCardImage width={44} height={44} src={`/img/step-${idx + 1}.png`} alt={`Step ${idx + 1}`} />
                        </div>
                      </div>
                    </FeatureCard>

                    )
                  }

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 3 */}

        <section className="container-fluid friends-section section divider">
          <div className="container-wrapper">
            {/*                 <!-- <div className="background"><p></p></div> -->
 */}                <div className="content-wrapper narrow">
              <div className="official" data-scroll="once offset(0,150px)">
                <div className="images hide-mobile">
                  <a href="#" className="airbnb"></a>
                  <a href="#" className="vrbo"></a>
                  <a href="#" className="homeaway"></a>
                  <a href="#" className="google"></a>
                </div>
                <h2>To get more bookings</h2>
                <div className="show-mobile">
                  <Image width={250}  height={250} src="/img/friends-group.png" alt="" />
                </div>
                <div className="row text narrow-text">
                  <p>CoHostin team syncs &amp; manages listings for your properties across multiple channels including our booking partners Airbnb, VRBO, Trip Advisor, Homeaway.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 4 */}

        <section className="container-fluid benefits-section">
          <div className="container-wrapper">
            <div className="quote">
              <div className="media-wrapper">
                <Image width={790} height={770}  src="/img/careers-benefits-quote.jpg" alt='' />
              </div>
              <div className="text-wrapper">
                <p>{"Join CoHostin, and never worry about your vacation rental property again—that's what I did. The team at CoHostin keeps me in the loop, and I get to see all the great reviews my guest leave."}</p>
                <div className="user">
                  <div className="image" style={{ backgroundImage: `url(https://cdn.vapid.site/sites/23410758-2e18-480a-86fb-03799ee50416/img/human01-0475024c007f74fd6e28010c902e3980.jpg)` }}>
                    <div className="company" style={{ backgroundImage: `url(https://cdn.vapid.site/sites/23410758-2e18-480a-86fb-03799ee50416/img/cohostin-icon-1da18b477633fbfb5f5d63a3dd4605c1.png)` }}></div>
                  </div>
                  <div className="name">Alex H.<br />Since 2017</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 5 */}

        <section className="container-fluid positions-section" id="positions">
          <div className="container-wrapper">
            <div className="content-wrapper">
              <div className="circle"><i></i></div>
              <div className="title-container">
                <div className="text-wrapper">
                  <div>
                    <h2>All sounds perfect—<br />{`We don't stop there`}</h2>
                    <p className="subheadline">Incredibly low booking fee of 15%</p>
                  </div>
                </div>
                <a href="services" className="btn btn-md btn-primary btn-square btn-anim-hover"><span className="bck"></span><span className="title">Join Now</span></a>
                <br />
                <br />
                <br />
                <p>CoHostin is free to join— <br />We make money when you do.</p>
              </div>



              {/*                 <!-- <div className="jobs">
                        <h4>Marketing</h4>
                        <ul>
                            <li>
                                <a href="position">
                  <span>Acquisitions Manager</span>
                  <img src="svg/arrow-right-long.svg" />
                </a>
                            </li>
                        </ul>
                    </div> --> */}
              <div className="cv">
                {/*                         <!-- <p>Didn't find a position that suits you? Don't worry you can send us your CV and we will review it.</p> -->
 */}                        <a href="contact-us" className="btn btn-lg">Got questions?</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage;
