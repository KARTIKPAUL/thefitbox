import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function Benefit({ icon, title, description }: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      {/* Icon Section */}
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      {/* Title & Description */}
      <h4 className="font-bold">{title}</h4>
      <p className="my-3 text-left">{description}</p>

      {/* Learn More Link */}
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href="/contact-us"
      >
        <Link
            className=" text-left flex items-center gap-1 text-sm font-bold text-primary-500 underline hover:text-secondary-500"
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
      </AnchorLink>
    </motion.div>
  );
}

export default Benefit;
