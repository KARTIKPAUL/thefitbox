
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const faqData: FaqItem[] = [
    {
      question: "What are the gym's operating hours?",
      answer: "Our gym is open from 5:00 AM to 10:00 PM, Monday to Saturday. We are closed on Sundays.",
    },
    {
      question: "Where is TheFitBox Gym located?",
      answer: "Near Madhab More, New Town, Alipurduar, India -736121",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 3-day free trial for new members to experience our facilities.",
    },
    {
      question: "Can I pause or cancel my membership?",
      answer: "Yes, you can pause your membership for a valid reason (such as injury or travel). Cancellation policies depend on your membership plan.",
    },
    {
      question: " Do you offer personal training?",
      answer: "Yes, we have certified personal trainers available for 1-on-1 coaching. You can book a session separately or as part of a package.",
    },
    {
      question: " Are there any group classes?",
      answer: "Yes, we offer classes for Yoga, Zumba, HIIT, and Strength Training. Check our schedule at the front desk.",
    },
  ];

  // State to handle active dropdown
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the dropdown
  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='app'>
      
      <div className="pb-8 bg-customBlue1">
        <h1 className="text-orange-500 text-center text-xl font-bold py-5">Frequently Asked Questions!</h1>
        <div className="max-w-6xl mx-auto space-y-6 px-4 lg:px-8 bg-white py-8 rounded-xl">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300"
            >
              <div
                onClick={() => toggleDropdown(index)}
                className="cursor-pointer p-6 flex justify-between items-center group"
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-[#E35A1E] transition duration-300">
                  {faq.question}
                </h3>
                <span className="text-blue-600">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-lg transform group-hover:scale-125 transition duration-300" />
                  ) : (
                    <FaChevronDown className="text-lg transform group-hover:scale-125 transition duration-300" />
                  )}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-gray-800 border-t border-gray-200 bg-blue-50 animate-fadeIn">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Faqs;
