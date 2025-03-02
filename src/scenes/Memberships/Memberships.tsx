import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';

const Membership = () => {
  const membershipOffers = [
    {
      title: "Introductory Offer",
      description:
        "Discounted rate for the first three months, free fitness consultation, and a complimentary personal training session."
    },
    {
      title: "Annual Membership",
      description:
        "Significant savings for members who commit to a yearly plan, ideal for long-term fitness goals."
    },
    {
      title: "Off-Peak Membership",
      description:
        "Reduced rates for members who visit during designated less busy hours while enjoying full facility access."
    },
    {
      title: "Corporate Packages",
      description:
        "Discounted rates for businesses signing up employees, promoting workplace wellness and morale."
    },
    {
      title: "Referral Bonuses",
      description:
        "Existing members receive a bonus such as a free month or personal training discounts for successful referrals."
    },
    {
      title: "Group Classes Pack",
      description:
        "Discounted bulk purchase of Yoga, Zumba, and other group fitness classes for community workout enthusiasts."
    },
    {
      title: "Flexible Payment Options",
      description:
        "Various payment plans to suit different budgets and lifestyles, making fitness accessible to everyone."
    },
    {
      title: "Loyalty Rewards",
      description:
        "Exclusive discounts on renewals and special offers on services for long-standing members."
    }
  ];

  return (
    <div className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Membership Offers" path="membership" name="Membership" />
      <div className="w-full bg-gray-100 flex flex-col items-center py-12">
        <motion.h1
          className="text-5xl font-bold mb-8 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Choose the Right Membership for You
        </motion.h1>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
          {membershipOffers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-3xl font-bold text-yellow-400">{offer.title}</h2>
              <p className="text-lg mt-4">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
