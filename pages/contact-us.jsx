import Layout from '/components/layout';
import Head from 'next/head';
import StepsPreview from '../components/StepsPreview';
import Contact from '../components/Contact/Contact';
const ContactUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>

      <div className="app-content contact-page">
        <Contact />
        <StepsPreview />
      </div>


    </Layout>

  );
}

export default ContactUsPage;