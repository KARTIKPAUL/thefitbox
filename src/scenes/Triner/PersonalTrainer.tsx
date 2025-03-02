import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';

const PersonalTrainer = () => {
  return (
    <section className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Personal Trainers" path="personal-trainers" name="Personal Trainers" />

      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1
          className="text-5xl font-bold mb-12 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Personal Trainers
        </motion.h1>

        <div className="max-w-6xl w-full text-center text-gray-900">
          <p className="text-lg mb-8">
            At <span className="font-bold text-[#5d0000]">TheFitBox Fitness Gym</span> in Alipurduar, our personal trainers are dedicated to guiding you toward fitness success. With a blend of expertise, experience, and passion, they help members achieve their goals—whether you’re a beginner or a seasoned athlete.
          </p>
          <p className="text-lg mb-12">
            Our trainers design personalized workout plans, provide detailed exercise guidance, and keep you motivated throughout your journey. At TheFitBox Fitness Gym, our trainers are more than just instructors—they are your partners in achieving lasting wellness.
          </p>
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 px-4">
          {/* Trainer 1 */}
          <motion.article
            className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-yellow-400">Sujit Roy</h2>
            <p className="text-lg mt-4">Expert in bodybuilding, strength training, and weight loss programs.</p>
          </motion.article>

          {/* Trainer 2 */}
          <motion.article
            className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-yellow-400">Lipika Roy</h2>
            <p className="text-lg mt-4">Certified powerlifting coach specializing in strength and endurance training.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainer;
