import { ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and tone your muscles with our Weight Training Classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find balance, flexibility, and inner peace in our Yoga Classes. Whether you're a beginner or an experienced yogi, our classes cater to all levels. Join us for a holistic and rejuvenating experience.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Target your core muscles and achieve a strong, sculpted midsection with our Ab Core Classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on exciting fitness adventures with our Adventure Classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our dynamic Fitness Classes to enhance your overall fitness levels. Whether you prefer cardio, strength training, or a mix of both, we have something for everyone.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Receive personalized training and guidance in our specialized Training Classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image6,
  },
];

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Explore our diverse range of classes designed to meet your fitness goals. Whether you're looking to build strength, improve flexibility, or embark on exciting fitness adventures, we have a class for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
