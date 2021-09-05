import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import Dropdown, { DropdownItem } from './Dropdown';
import Image from 'next/image';

const Header = () => {

    const ref = useRef();

/*     const handleScrollChange = (e) => {
        if(!ref.current) return;
        if (window.scrollY > 10 ) {
            ref.current.classNameName = 'app-header'
        } else {
            ref.current.classNameName = 'app-header transparent'
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScrollChange)
        return () => window.removeEventListener('scroll', handleScrollChange)
    }, []) */
    return (
        <div className={`app-header `} ref={ref}>
            <div className="app-header-wrapper">
                <div className="app-header-c">
                    <div className="mobile-menu-wrapper">
                        <a href="#" className="btn-mobile-menu"><span></span></a>
                        <Link href='/' >
                        <a className="lottie app-header-logo">
                            <Image src="/img/logo-cohostin.png" alt="Cohostin"  width={130} height={28} />
                            </a>
                        </Link>



                    </div>
                    <div className="show-mobile">
                        {/*            <!-- <a href="# className="btn">
                <span className="bg"></span>
                <span className="title">Sign In</span>
              </a> --> */}
                        <a href="tel:18019003003" className="btn btn-light btn-signup font-weight-normal ml-xs-5">
                            <span className="bg"></span>
                            <span className="title">+1.801.900.3003</span></a>
                    </div>
                </div>
                <div className="app-header-l">
                    <li>
                        <Link href="/services">
                            <a className="link" ><span>List Your Home</span></a>

                        </Link>
                    </li>
                    <li>
                        <Link href="/services#testimonials">
                            <a className="link" ><span>Testimonials</span></a>

                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            <a className="link" ><span>Blogs</span></a>

                        </Link>
                    </li>

                    <li>
                        <Link href="contact-us">
                            <a className="link" ><span>Contact Us</span></a>
                        </Link>
                    </li>

                </div>
                <div className="app-header-r">
                    <li className="dropdown show">
                        <a className="link dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>+1.801.900.3003</span>
                        </a>

                        <Dropdown>
                            <DropdownItem
                                label="call now"
                                description="+1.801.900.3003"
                            />
                            <DropdownItem
                                label="email"
                                description="help@cohostin.com" />

                        </Dropdown>
                        {/*                         <ul className="dropdown-menu menu-renters dropdown-menu-quarter-top" aria-labelledby="dropdownMenuLink">

                            <li>
                                <a className="dropdown-item item-turquoise" href="tel:18019003003">
                                    <span className="item-title title-deposit text-turquoise">
                                        CALL NOW
                                    </span>
                                    <span className="item-description">
                                        +1.801.900.3003
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item item-turquoise" href="contact-us">
                                    <span className="item-title title-deposit text-turquoise">
                                        EMAIL US
                                    </span>
                                    <span className="item-description">
                                        help@cohostin.com
                                    </span>
                                </a>
                            </li>
                            {/*                 <!-- <li>
                  <a
                    className="dropdown-item item-turquoise"
                    href="#"
                  >
                    <span className="item-title title-deposit text-turquoise">
                      CHAT NOW
                    </span>
                    <span className="item-description">
                      Online: 8AM-5PM MST
                    </span>
                  </a>
                </li> --> 
                        </ul> */}
                    </li>
                    <a href="services" className="btn hide-mobile">
                        <span className="bg"></span>
                        <span className="title">Schedule Call</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;