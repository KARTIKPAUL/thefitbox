import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';

const YogaAndZumba = () => {
  return (
    <section className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Yoga & Zumba" path="yoga-zumba" name="Yoga & Zumba" />

      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1
          className="text-5xl font-bold mb-12 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience Yoga & Zumba
        </motion.h1>

        <div className="max-w-6xl w-full text-center text-gray-900">
          <p className="text-lg mb-8">
            At <span className="font-bold text-[#5d0000]">TheFitBox Fitness Gym</span> in Alipurduar, we offer dynamic Yoga and high-energy Zumba sessions to help you achieve a balanced and healthy lifestyle.
          </p>
          <p className="text-lg mb-12">
            Our certified instructors guide you through mindful Yoga sessions for flexibility and relaxation, while Zumba classes keep you energized with dance-inspired workouts. Join us to enhance your fitness in a fun and supportive environment.
          </p>
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 px-4">
          {/* Yoga */}
          <motion.article
            className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-yellow-400">Yoga Sessions</h2>
            <p className="text-lg mt-4">Improve flexibility, reduce stress, and find inner peace with guided Yoga practices.</p>
          </motion.article>

          {/* Zumba */}
          <motion.article
            className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-yellow-400">Zumba Classes</h2>
            <p className="text-lg mt-4">Get your heart pumping with dance-based workouts that make fitness fun and exciting.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default YogaAndZumba;
