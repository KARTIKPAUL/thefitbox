import { motion } from "framer-motion";
import PageHeader from "../PageHeader/PageHeader";

const Sauna = () => {
  return (
    <div className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Sauna" path="sauna" name="Sauna" />
      <div className="w-full bg-gray-100 flex flex-col items-center py-12">
        <motion.h1
          className="text-5xl font-bold mb-8 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Relax & Rejuvenate in Our Sauna
        </motion.h1>

        <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Aliquam faucibus purus in massa tempor. Ut tristique et egestas quis ipsum. Eget velit aliquet sagittis id consectetur purus ut. Non sodales neque sodales ut etiam sit amet. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Eget egestas purus viverra accumsan in nisl nisi. Convallis tellus id interdum velit laoreet id donec. A lacus vestibulum sed arcu non odio euismod. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci.
            <br /><br />
            Ultricies lacus sed turpis tincidunt id aliquet. Dictum fusce ut placerat orci. Arcu dictum varius duis at. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Duis ut diam quam nulla porttitor massa id neque aliquam. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Elit eget gravida cum sociis natoque penatibus et magnis.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Sauna;