import { motion } from "framer-motion";
import { Users, Dumbbell, CheckCircle, Home, MapPin, Phone, Mail, Gift } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="flex flex-col items-center py-12 px-6">
        <div className="w-full max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
              About TheFitBox Fitness Gym
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Welcome to TheFitBox Fitness Gym – The Premier Fitness Destination in Alipurduar! We offer a 
              fully air-conditioned, comfortable environment for all. Join our community and achieve 
              your fitness goals with us!
            </p>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div 
            className="bg-gray-800 rounded-2xl p-8 mb-16 text-center shadow-xl w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Philosophy</h2>
            <p className="text-xl leading-relaxed text-gray-300">
              "Fitness is not one-size-fits-all. Our certified trainers provide personalized diet and 
              workout plans tailored to your body type and goals. We are here to guide you to 
              optimum health and fitness."
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 w-full mb-16">
            {[
              { icon: <Dumbbell />, title: "Premium Facilities", desc: "Cardio, strength training, and stretching areas with imported equipment in a fully AC environment." },
              { icon: <Users />, title: "Expert Coaching", desc: "Male & female certified trainers offering personalized guidance and tailored workout plans." },
              { icon: <Home />, title: "Modern Amenities", desc: "Spacious locker rooms, nutrition bar, Wi-Fi, and temperature-controlled water." },
              { icon: <CheckCircle />, title: "Convenience Services", desc: "Ample parking, pickup/drop service, and post-workout massage therapy." },
              { icon: <Gift />, title: "Nutrition & Recovery", desc: "Healthy snacks & drinks at our nutrition bar and post-workout recovery solutions." },
              { icon: <Users />, title: "Group Fitness", desc: "50+ weekly classes including HIIT, Yoga, Pilates, and Boxing for all levels." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-yellow-400 mb-4 flex justify-center text-5xl">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Location & Contact */}
          <motion.div 
            className="bg-gray-800 rounded-2xl p-8 mb-16 text-center shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Find Us</h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p><MapPin className="inline mr-2" /> Near Madhab More, New Town, Alipurduar, India -736121</p>
              <p><Phone className="inline mr-2" />  099077 30482</p>
              <p><Mail className="inline mr-2" /> thefitboxalipurduar@gmail.com</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center bg-yellow-400 rounded-2xl p-8 shadow-lg w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Special Launch Offer!</h2>
            <p className="text-gray-900 mb-8 text-lg">First 30 members get exclusive discounts - Start your transformation today!</p>
            <motion.button 
              className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
