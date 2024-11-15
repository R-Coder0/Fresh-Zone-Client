import { useState } from "react";
import leatherJacketImage from "../assets/LeatherJackethero.jpg"; // Replace with actual image path
import About from "../assets/LeatherAbout.jpg";
import RequestCallForm from "../components/RequestCallForm";

const leatherJacketRates = [
    {
      category: "Leather Jacket",
      description: "Specialized care for your leather jackets with advanced preservation techniques.",
      rates: [
        {
          service: "Leather Jacket",
          originalPrice: "₹660",
          discountedPrice: "₹495",
        },
        {
          service: "Leather Jacket Rexine",
          originalPrice: "₹470",
          discountedPrice: "₹353",
        },
        {
          service: "Leather Jacket Suede",
          originalPrice: "₹809",
          discountedPrice: "₹607",
        },
        {
          service: "Leather Jacket Premium",
          originalPrice: "₹1759",
          discountedPrice: "₹1319",
        },
      ],
    },
  ];
  
  const LeatherJacketRateList = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    return (
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section
        className="relative md:h-[50vh] h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${leatherJacketImage})` }}
      >
        <div className="bg-gradient-to-r from-black to-transparent h-full flex items-center justify-center mt-[80px]">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-2">
              Leather Jacket Rate List
            </h1>
            <p className="md:text-xl text-lg text-white opacity-80">
            Expert Care for Your Leather Jackets – Preserve, Protect, and Perfect
            </p>
          </div>
        </div>
      </section>
  
        {/* Description Section */}
        <section className="bg-gray-900 text-white py-12 px-6 mt-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Leather Jacket Cleaning Services by Fresh Zone
              </h1>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-200 inline-flex items-center mt-4"
              >
                <span className="flex items-center">
                  Request Call Back
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </span>
              </button>
              <div className="space-y-6 mt-4 text-lg">
                <h2 className="text-xl font-semibold">
                  Why Choose Fresh Zone for Your Leather Jacket Care?
                </h2>
                <p>
                  Fresh Zone provides specialized leather jacket cleaning services,
                  using advanced techniques to preserve your leather garments&apos; quality,
                  texture, and longevity.
                </p>
                <p>
                  Our services include custom treatments and gentle cleaning to prevent
                  damage, ensuring your leather jackets remain soft, clean, and durable.
                </p>
                <p>
                  Choose Fresh Zone for trusted, high-quality leather care that extends
                  the life and appearance of your favorite jackets.
                </p>
              </div>
            </div>
  
            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 relative">
              <img
                src={About}
                alt="Leather Jacket Services"
                className="rounded-lg shadow-lg w-full"
                style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)" }}
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-semibold">
                Starts from ₹495
              </div>
            </div>
          </div>
        </section>
  
        {/* Rate List Section */}
        <section className="py-8 px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Leather Jacket Service Rate List
          </h2>
  
          {/* Rate List Content (Always Open) */}
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">{leatherJacketRates[0].description}</p>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">
                    Service
                  </th>
                  <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">
                    Original Price
                  </th>
                  <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">
                    Discounted Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {leatherJacketRates[0].rates.map((rate, idx) => (
                  <tr key={idx}>
                    <td className="border-b py-2 px-4 text-gray-600">
                      {rate.service}
                    </td>
                    <td className="border-b py-2 px-4 text-gray-600">
                      {rate.originalPrice}
                    </td>
                    <td className="border-b py-2 px-4 text-gray-600">
                      {rate.discountedPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
  
        {/* Request Call Form */}
        {isFormOpen && <RequestCallForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
      </div>
    );
  };
  
  export default LeatherJacketRateList;