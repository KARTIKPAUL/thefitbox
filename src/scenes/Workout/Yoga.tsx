import { motion } from 'framer-motion';
import PageHeader from '../PageHeader/PageHeader';

const YogaPage = () => {
  return (
    <div className="w-full text-gray-800 mx-auto pt-20 mt-12">
      <PageHeader title="Yoga" path="yoga" name="Yoga" />
      
      <div className="w-full bg-gray-100 flex flex-col items-center py-12 px-6">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-[#5d0000] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience the Power of Yoga
        </motion.h1>
        
        <motion.p 
          className="text-lg max-w-4xl text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Because this exercise requires no equipment, you can do it any time and at any place.
        </motion.p>
        
        <motion.div 
          className="max-w-4xl text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <p>Aliquam faucibus purus in massa tempor. Ut tristique et egestas quis ipsum. Eget velit aliquet sagittis id consectetur purus ut. Non sodales neque sodales ut etiam sit amet. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Eget egestas purus viverra accumsan in nisl nisi. Convallis tellus id interdum velit laoreet id donec. A lacus vestibulum sed arcu non odio euismod. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Ultricies lacus sed turpis tincidunt id aliquet. Dictum fusce ut placerat orci. Arcu dictum varius duis at.</p>
          <br />
          <p>Orci phasellus egestas tellus rutrum tellus pellentesque eu. Duis ut diam quam nulla porttitor massa id neque aliquam. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Cursus vitae congue mauris rhoncus. Feugiat in ante metus dictum at. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Vulputate dignissim suspendisse in est ante in nibh. Semper viverra nam libero justo laoreet sit amet. Blandit volutpat maecenas volutpat blandit aliquam. In egestas erat imperdiet sed euismod. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Eget aliquet nibh praesent tristique magna. Malesuada nunc vel risus commodo viverra maecenas. Rhoncus aenean vel elit scelerisque mauris. Porttitor eget dolor morbi non arcu.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default YogaPage;