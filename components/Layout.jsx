import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link href="/fonts/style.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
                </Head>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;