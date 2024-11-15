import {
  FaTshirt,
  FaTasks,
  FaHome,
  FaCity,
  FaStar,
  FaPlay,
} from "react-icons/fa";
import CountUp from "react-countup";
import aboutImage from "../assets/AboutImage.jpg";
import {
  FaRegPaperPlane,
  FaClock,
  FaTruck,
  FaFlask,
  FaShieldAlt,
} from "react-icons/fa";
import { useState } from "react";
import RequestCallForm from "../components/RequestCallForm";
import Testimonials from "./Testimonial";

const steps = [
  { number: 1, title: "Dirty Clothes Collected" },
  { number: 2, title: "Quick Pickup" },
  { number: 3, title: "Expert Inspection" },
  { number: 4, title: "Steam & Chemical Spotting" },
  { number: 5, title: "Preprocessing Treatment" },
  { number: 6, title: "Advanced Cleaning Process" },
  { number: 7, title: "Steam Ironing" },
  { number: 8, title: "Quality Check & Packaging" },
  { number: 9, title: "Delivery at Your Doorstep" },
  { number: 10, title: "Satisfied Customer" },
];

const features = [
  {
    icon: <FaRegPaperPlane />,
    title: "Paperless Operations",
    description:
      "Experience a greener approach with our fully paperless tracking and management system.",
  },
  {
    icon: <FaClock />,
    title: "Real-time Updates",
    description:
      "Stay informed with real-time tracking of your laundry through our easy-to-use app.",
  },
  {
    icon: <FaTruck />,
    title: "Free Pickup & Delivery",
    description:
      "Enjoy hassle-free laundry with our complimentary pickup and delivery service right to your door.",
  },
  {
    icon: <FaFlask />,
    title: "Eco-friendly Cleaning Agents",
    description:
      "We use enzyme-based, eco-friendly cleaning solutions that are tough on stains and gentle on fabrics.",
  },
  {
    icon: <FaShieldAlt />,
    title: "7-day Satisfaction Guarantee",
    description:
      "We stand by our quality. If you’re not satisfied, we’ll reprocess your order within 7 days, free of charge.",
  },
];

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto px-6 md:flex md:items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-[#22c55e] font-semibold mb-2">SINCED FEBRUARY 5, 2024</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              India&apos;s Premier On-Demand Laundry & Dry Cleaning Service
            </h2>
            <p className="text-gray-700 mb-4">
              Fresh Zone Dry Cleaning is dedicated to offering top-notch dry
              cleaning and laundry services, ensuring quality and convenience
              for all our customers. With a focus on reliability, quality, and
              superior customer service, we make laundry easy and hassle-free.
            </p>
            <p className="text-gray-700 mb-4">
              From delicate garments to bulky items, our professional care and
              advanced equipment ensure each piece receives the best possible
              treatment. We cater to all your laundry needs, providing both
              routine cleaning and urgent services within 48 hours.
            </p>
            <p className="text-gray-700 mb-4">
            Our mission is to set a new standard in laundry care, combining advanced technology, skilled professionals, and a commitment to sustainability. Whether it’s delicate fabrics, bulky items, or daily wear, we handle each item with care and precision, offering a hassle-free experience for our customers.
            </p>
            <p className="text-gray-700 mb-4">
            In addition to quality cleaning, we’re committed to making laundry more accessible with a fast, reliable, and door-to-door service. With Fresh Zone Dry Cleaning, your items will be cleaned, pressed, and returned within 48 hours, so you can focus on the things that matter most.
            </p>
            <p className="text-gray-700">
              Whether you need dry cleaning or laundry, we’ve got you covered
              with door-to-door service. Fresh Zone Dry Cleaning is committed to
              delivering excellence with every wash!
            </p>
          </div>

          {/* Image Section */}
          <div
            className="md:w-1/2 mt-8 md:mt-0 md:ml-10 relative"
            style={{ boxShadow: "10px 10px #22c55e" }}
          >
            <img
              src={aboutImage}
              alt="About Fresh Zone"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white text-[#22c55e] p-4 rounded-full shadow-lg hover:bg-blue-50 transition duration-200">
                <FaPlay className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-6 grid grid-cols-2 md:flex justify-around items-center gap-6 md:gap-0">
          {/* Stat Item */}
          <div className="text-center space-y-1">
            <FaTshirt className="text-4xl md:text-[4.25rem] text-[#22c55e] mx-auto mb-1" />
            <p className="text-2xl md:text-[2.25rem] font-extrabold text-gray-900">
              <CountUp start={0} end={2500} duration={2.5} suffix="+"  />
            </p>
            <p className="text-[#22c55e] font-medium tracking-wide text-xs">
              CLOTHES WASHED
            </p>
          </div>

          {/* Stat Item */}
          <div className="text-center space-y-1">
            <FaTasks className="text-4xl md:text-[4.25rem] text-[#22c55e] mx-auto mb-1" />
            <p className="text-2xl md:text-[2.25rem] font-extrabold text-gray-900">
              <CountUp start={0} end={100} duration={2.5} suffix="+"  />
            </p>
            <p className="text-[#22c55e] font-medium tracking-wide text-xs">
              ORDERS PROCESSED
            </p>
          </div>

          {/* Additional Stats */}
          <div className="text-center space-y-1">
            <FaHome className="text-4xl md:text-[4.25rem] text-[#22c55e] mx-auto mb-1" />
            <p className="text-2xl md:text-[2.25rem] font-extrabold text-gray-900">
              <CountUp start={0} end={95} duration={2.5} suffix="+" />
            </p>
            <p className="text-[#22c55e] font-medium tracking-wide text-xs">
              SATISFIED FAMILIES
            </p>
          </div>

          <div className="text-center space-y-1">
            <FaCity className="text-4xl md:text-[4.25rem] text-[#22c55e] mx-auto mb-1" />
            <p className="text-2xl md:text-[2.25rem] font-extrabold text-gray-900">
              <CountUp start={0} end={10} duration={2.5} />
            </p>
            <p className="text-[#22c55e] font-medium tracking-wide text-xs">
              CITIES
            </p>
          </div>

          <div className="text-center space-y-1">
            <FaStar className="text-4xl md:text-[4.25rem] text-[#22c55e] mx-auto mb-1" />
            <p className="text-2xl md:text-[2.25rem] font-extrabold text-gray-900">
              <CountUp start={0} end={4.6} duration={2.5} decimals={1} />
            </p>
            <p className="text-[#22c55e] font-medium tracking-wide text-xs">
              RATING
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            10-Step Formula for Exceptional Laundry Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-[#22c55e] text-white font-bold rounded-full h-12 w-12 flex items-center justify-center text-2xl">
                  {step.number}
                </div>
                <p className="text-gray-800 font-semibold">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={aboutImage}
              alt="Why Choose Us"
              className="rounded-lg shadow-lg w-full"
              style={{ borderRadius: "0 100px 100px 0" }}
            />
          </div>

          <div className="md:w-1/2 md:pl-10">
            <p className="text-[#22c55e] font-semibold mb-2">
              OUR DIFFERENCE
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Fresh Zone?
            </h2>
            <p className="text-gray-700 mb-6">
              At Fresh Zone, we’re committed to providing top-quality laundry
              and dry-cleaning services with a touch of excellence.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="text-[#22c55e] text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#22c55e] text-white px-4 py-2 rounded-full hover:bg-green-600 text-lg"
            onClick={openForm}
          >
            Request Call Back
          </button>
          <RequestCallForm isOpen={isFormOpen} onClose={closeForm} />
        </div>
      </section>

      <Testimonials/>
    </>
  );
};

export default About;
