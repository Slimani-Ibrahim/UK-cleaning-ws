import React, { useEffect, useState } from 'react';
import {
    Header,
    LandingPage,
    AboutSection,
    ServicesSection,
    TeamSection,
    CounterSection,
    WorkSection,
    TestimonialSection,
    ContactForm,
    Footer
} from 'components/custom/';
import { Loader, ScrollerBtn } from 'components/shared'
import Helper from 'helper/index';
import $ from 'jquery'

export const MasterPage = () => {

    const [shouldbeRendred, setShouldbeRendred] = useState(false);

    useEffect(() => {
        const resources = [
            "assets/js/tether.min.js",
            "assets/js/bootstrap.min.js",
            "assets/js/jquery.easing.js",
            // fancybox Js 
            "assets/js/jquery.mousewheel-3.0.6.pack.js",
            "assets/js/jquery.fancybox.pack.js",
            //  carousel Js
            "assets/js/owl.carousel.js",
            // imagesloaded Js
            "assets/js/imagesloaded.pkgd.min.js",
            // masonry,isotope Effect Js 
            "assets/js/isotope.pkgd.min.js",
            "assets/js/masonry.pkgd.min.js",
            "assets/js/jquery.appear.js",
            // Mail Function Js
            "assets/js/mail.js",
            // revolution Js
            "assets/js/jquery.themepunch.tools.min.js",
            "assets/js/jquery.themepunch.revolution.min.js",
            // "assets/extensions/revolution.extension.slideanims.min.js",
            // "assets/extensions/revolution.extension.layeranimation.min.js",
            // "assets/extensions/revolution.extension.navigation.min.js",
            // "assets/extensions/revolution.extension.parallax.min.js",
            "assets/js/jquery.revolution.js",
            // custom Js
            'assets/js/custom.js',
            'assets/js/jquery.min.js',
        ];

        const styles = [
            'assets/css/bootstrap.min.css',
            'assets/css/font-awesome.css',
            'assets/css/ionicons.css',
            'assets/css/jquery.fancybox.css',
            'assets/css/settings.css',
            'assets/css/layers.css',
            'assets/css/owl.carousel.css',
            'assets/css/style.css',
            'assets/css/header1.css',
            'assets/css/footer1.css',
            'assets/css/index.css',
            'assets/css/theme-color/default.css',
        ]

        Helper.importStyles(styles);
        Promise.resolve(Helper.importScripts(['assets/js/jquery.min.js'])).then(() => {
            //window.onload = () => {
            // if (typeof jQuery !== undefined) {
            //     // jQuery is loaded  
            //     Helper.importScripts(resources);
            //     setShouldbeRendred(true);
            // } else {
            //     // jQuery is not loaded
            //     alert("Something went rong !"); setShouldbeRendred(true);
            // }
            //}
            $(document).ready(() => {
                Helper.importScripts(resources);
                setShouldbeRendred(true);
            })
        });
    }, []);


    return (
        <>
            {
                !shouldbeRendred ?
                    <Loader />
                    :
                    <>
                        <Header />
                        <LandingPage />
                        <AboutSection />
                        <CounterSection />
                        <ServicesSection />
                        <TeamSection />
                        <WorkSection />
                        <ContactForm />
                        <TestimonialSection />
                        <Footer />
                        <ScrollerBtn />
                    </>
            }
        </>
    );
}
