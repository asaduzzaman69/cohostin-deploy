import Head from 'next/head';
import Layout from "../components/Layout";

const Privacy = () => {
    return (

        <Layout>
            <Head>
                <title>Privacy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="app-content privacy-page">
                <section className="container-fluid privacy-section">
                    <div className="container-wrapper">
                        <div className="privacy">
                            <h1>Privacy Policy</h1>
                            <p>Effective Date: 02/10/2020 (You may wish to keep copies of earlier privacy notices as well as the dates for which they were effective).</p>
                            <p>This privacy notice discloses the privacy practices for cohostin.com. This privacy notice applies solely to information collected by this website, except where stated otherwise. It will notify you of the following:</p>
                            <ul>
                                <li>What information we collect;</li>
                                <li>With whom it is shared;</li>
                                <li>How it can be corrected;</li>
                                <li>How it is secured;</li>
                                <li>How policy changes will be communicated; and</li>
                                <li>How to address concerns over misuse of personal data.&nbsp;</li>
                            </ul>
                            <p>Information Collection, Use, and Sharing We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not
                                sell or rent this information to anyone.</p>
                            <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., to ship
                                an order.</p>
                            <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                            <p>Your Access to and Control Over Information You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number provided on our website:</p>
                            <ul>
                                <li>See what data we have about you, if any.</li>
                                <li>Change/correct any data we have about you.</li>
                                <li>Have us delete any data we have about you.</li>
                                <li>Express any concern you have about our use of your data.</li>
                            </ul>
                            <p>Security We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                            <p>{`Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or
                                looking for "https" at the beginning of the address of the web page.`}</p>
                            <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (e.g, billing or customer service) are granted
                                access to personally identifiable information. The computers/servers on which we store personally identifiable information are kept in a secure environment.</p>
                            <p>Notification of Changes</p>
                            <p>Whenever material changes are made to the privacy notice you can request at any time by contacting us via the email address or phone number provided on our website to see what changes have been made.</p>
                            <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via email at <a href="mailto:help@cohostin.com">help@cohostin.com</a></p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>

    );
}

export default Privacy;