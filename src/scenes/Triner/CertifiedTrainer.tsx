import { motion } from 'framer-motion';
import { FaMedal, FaDumbbell, FaTrophy, FaStar } from 'react-icons/fa';
import PageHeader from '../PageHeader/PageHeader';

const trainers = [
  {
    name: "Mr. Sujit Roy",
    achievements: [
      { icon: <FaMedal />, text: "Siliguri Group Champion 2023" },
      { icon: <FaTrophy />, text: "North Bengal Overall Runner-up 2023" },
      { icon: <FaStar />, text: "West Bengal State Group Champion 2023" },
      { icon: <FaStar />, text: "NPC Pro League Qualifier" },
    ],
  },
  {
    name: "Ms. Lipika Roy",
    achievements: [
      { icon: <FaMedal />, text: "State Level Powerlifting Champion" },
      { icon: <FaTrophy />, text: "3x North Bengal Strong Women Winner" },
      { icon: <FaStar />, text: "North Bengal Women’s Fitness 2nd Place" },
    ],
  },
];

const CertifiedTrainers = () => {
  return (
    <section className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Certified Trainer" path="certified-trainer" name="Certified Trainer" />

      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1
          className="text-5xl font-bold mb-12 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Certified Trainers
        </motion.h1>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 px-4">
          {trainers.map((trainer, index) => (
            <motion.article
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <FaDumbbell className="text-yellow-400 text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-yellow-400">{trainer.name}</h2>
              <ul className="text-lg mt-4 space-y-2">
                {trainer.achievements.map((ach, idx) => (
                  <li key={idx} className="flex justify-center items-center gap-2">
                    <span className="text-yellow-400">{ach.icon}</span>
                    {ach.text}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainers;
