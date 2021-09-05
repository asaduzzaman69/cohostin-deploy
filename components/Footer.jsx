import Image from 'next/image'
const Footer = () => {
    return ( 
        <footer className="container-fluid app-footer">
        <div className="container-wrapper">
            <div className="app-footer-wrapper" data-scroll="once offset(0,100px)" data-scroll-showcallback="lottiePlay('app-footer-logo')">
                <div className="row top">
                    <div className="col-12 col-md-6 col-lg-5 company">
                        <div className="lottie app-footer-logo">
{/*                             <!-- <img src="svg/logo-white.svg" alt=""> -->
 */}                            <Image width={105} height={29} src="/img/logo-cohostin-white.png" alt="cohostin" />
                        </div>
                        <p className="slogan">Welcome to modern vacation rental managment.</p>
                    </div>
                </div>
                <div className="row bottom">
                    <div className="col-12 col-xl-8 copy">
                        <div><span>2020 ©CoHostin Property - </span> <span>All rights reserved - </span> <span><a href="privacy">Privacy Policy</a></span></div>
                    </div>
                    <div className="col-12 col-xl-4 social">
                        <a href="#" target="_blank" className="link"><i className="icon-facebook"></i></a>
                        <a href="#" target="_blank" className="link"><i className="icon-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;