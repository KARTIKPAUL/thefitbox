import { motion } from 'framer-motion';
import { FaDumbbell } from 'react-icons/fa';
import PageHeader from '../PageHeader/PageHeader';

const EquipmentPage = () => {
  return (
    <div className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Imported Equipment" path="equipment" name="Equipment" />
      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-[#5d0000]  text-center"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Premium Imported Equipment
        </motion.h1>
        
        <div className="max-w-5xl text-center text-gray-900">
          <p className="text-lg leading-relaxed mb-8">
            At TheFitBox Fitness Gym, we take pride in elevating your workout experience with our range of international-level imported gym equipment. Each piece of machinery is selected with the utmost care from the finest global manufacturers, ensuring that our members have access to the latest and most effective tools for fitness.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            These state-of-the-art machines boast cutting-edge technology and ergonomic designs that not only enhance your performance but also ensure maximum safety and comfort during your training sessions. With our imported gym equipment, you can expect nothing less than a world-class workout environment that’s on par with elite fitness centers around the globe.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            We believe that our commitment to quality equipment is pivotal in helping you achieve your fitness milestones with precision and excellence.
          </p>
        </div>
        
        <motion.div 
          className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center mt-6 hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <FaDumbbell className="text-yellow-400 text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-yellow-400">World-Class Equipment</h2>
          <p className="text-lg mt-4 text-gray-300">
            Experience the best fitness technology from global leaders in the industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentPage;
