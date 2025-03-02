import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';
import { FaDumbbell, FaHeartbeat, FaBicycle, FaUtensils, FaWifi, FaLock, FaShower, FaCar, FaUsers } from 'react-icons/fa';

const Features = () => {
  const featuresList = [
    { icon: <FaHeartbeat />, title: "Separate Cardio Area" },
    { icon: <FaDumbbell />, title: "Strength Training Zone" },
    { icon: <FaBicycle />, title: "Stretching Area" },
    { icon: <FaShower />, title: "Washrooms (M & F)" },
    { icon: <FaLock />, title: "Locker Room" },
    { icon: <FaUsers />, title: "Changing Room" },
    { icon: <FaUtensils />, title: "Food Court & Nutrition Bar" },
    { icon: <FaWifi />, title: "Wi-Fi Access" },
    { icon: <FaCar />, title: "Parking Facilities" },
    { icon: <FaDumbbell />, title: "Pickup and Drop Service" },
    { icon: <FaHeartbeat />, title: "Machine Massage Therapy" },
    { icon: <FaShower />, title: "Drinking Water (Hot, Cold, Normal)" },
    { icon: <FaDumbbell />, title: "Imported Equipment" },
    { icon: <FaUsers />, title: "Expert Trainers (M & F)" },
    { icon: <FaUsers />, title: "Group Fitness Classes" },
    { icon: <FaUtensils />, title: "Nutrition Guidance" },
    { icon: <FaDumbbell />, title: "Clean & Modern Facilities" },
    { icon: <FaUsers />, title: "Flexible Membership Options" },
  ];

  return (
    <section className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Features" path="features" name="Our Features" />
      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1
          className="text-5xl font-bold mb-12 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to TheFitBox Fitness Gym
        </motion.h1>
        <p className="text-lg mb-8 text-gray-900 text-center max-w-4xl">
          Your ultimate destination for holistic health and wellness, located in the heart of ! Step into our world where fitness goals are not just met but exceeded with state-of-the-art facilities, personalized training programs, and a community that inspires and motivates. Whether you’re a beginner or a seasoned athlete, TheFitBox Fitness Gym is committed to providing a top-notch fitness experience. Let’s get fit, let’s make it a big deal!
        </p>
        
        <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8 px-4">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center flex flex-col items-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-yellow-400 text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-yellow-400">{feature.title}</h2>
            </motion.div>
          ))}
        </div>

        <p className="text-lg mt-12 text-gray-900 text-center max-w-4xl">
          Thank you for exploring TheFitBox Fitness Gym, where your fitness journey transforms into a lifestyle of health and vitality. Join our community today and take advantage of our special discount for the first 30 members. Because here at TheFitBox, every workout is a step towards your best self. Stay fit, stay healthy, and keep making big deals out of your fitness goals!
        </p>
      </div>
    </section>
  );
};

export default Features;