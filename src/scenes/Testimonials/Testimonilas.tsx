import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sraya Kar",
    feedback: "2 years ago Hands down, best choice I’ve made training at THE FIT BOX. VERY friendly team who make me actually want to go train. I look forward to walking through the doors and always feel amazing when I leave.This is a fantastic gym. I really like the ambience and the environment. ✨❤",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Upama Biswas",
    feedback: "Seriously best gym in town..... Quality of the instruments are too good..... Very polite behaviour....... The best thing about this gym is it's location.",
    image: "https://images.pexels.com/photos/4475024/pexels-photo-4475024.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Jagannath Das",
    feedback: "Looking forward to a fit start this new year, you are at the right place, to make a kick start.100% recommend.",
    image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600",
    
    rating: 4,
  },
  
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 800
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 600
        },
      },
    ],
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      ));
  };

  return (
    <div className="px-6 bg-gradient-to-b from-primary-black to-gray-900 py-16 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-10 uppercase tracking-wide">
          What Our Customers Say
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </h1>

        <div className="-mx-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 focus:outline-none">
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-[400px]"> {/* Fixed height */}
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-500/20"
                    />
                    <div className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                      {testimonial.rating}.0
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 text-center">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-600 text-center leading-relaxed overflow-y-auto flex-1"> {/* Scrollable content */}
                    "{testimonial.feedback}"
                  </p>
                  <div className="mt-2 flex gap-1 text-xl">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
