import { motion } from "framer-motion";
import PageHeader from "../PageHeader/PageHeader";

const ZumbaPage = () => {
  return (
    <div className="w-full text-white mx-auto pt-20 mt-12">
      <PageHeader title="Zumba" path="zumba" name="Zumba Classes" />

      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1
          className="text-5xl font-bold mb-8 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience the Energy of Zumba!
        </motion.h1>

        <motion.p
          className="max-w-4xl text-lg text-gray-800 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Aliquam faucibus purus in massa tempor. Ut tristique et egestas quis ipsum. Eget velit aliquet sagittis id consectetur purus ut. Non sodales neque sodales ut etiam sit amet. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Eget egestas purus viverra accumsan in nisl nisi. Convallis tellus id interdum velit laoreet id donec.
        </motion.p>

        <motion.p
          className="max-w-4xl text-lg text-gray-800 text-center leading-relaxed mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          Orci phasellus egestas tellus rutrum tellus pellentesque eu. Duis ut diam quam nulla porttitor massa id neque aliquam. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Cursus vitae congue mauris rhoncus. Feugiat in ante metus dictum at. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.
        </motion.p>
      </div>
    </div>
  );
};

export default ZumbaPage;
