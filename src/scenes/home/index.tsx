import useMediaQuery from '@/hooks/useMediaQuery';
// import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';

import { motion } from 'framer-motion';
import Benefits from '../benefits';
import OurClasses from '../ourClasses';
import ContactUs from '../ContactUs';
import FindUs from '../FindUs/Findus';
import Testimonials from '../Testimonials/Testimonilas';
import Feedback from '@/Feedback/Feedback';
import { Link } from 'react-router-dom';



function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (

    <>
    <section className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Main Content */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Left Section - Text & CTA */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
           
            <Link
            className="flex items-center gap-1 text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            to="/contact-us"
            >
            <span>Learn more</span> 
                 <svg
                  className="w-6 h-6 text-primary-500 transform transition-transform hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
          </Link>

          </motion.div>
        </div>

        {/* Right Section - Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* Sponsors Section */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>


<Benefits />
<OurClasses />
<ContactUs />
<FindUs />
<Testimonials />
<Feedback />


    </>


  );
}

export default Home;
