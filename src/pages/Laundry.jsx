import { useState, useEffect } from "react";
import laundryImage from "../assets/Laundryhero.jpg";
import About from "../assets/LaundryAbout.jpg";
import RequestCallForm from "../components/RequestCallForm";

const laundryRates = [
  {
    category: "Laundry",
    description: "Affordable and efficient laundry for daily wear.",
    rates: [
      {
        service: "Wash & Iron",
        price: "₹89/kg",
        note: "Cuff and collar cleaning",
      },
      {
        service: "Wash & Fold",
        price: "₹69/kg",
        note: "We do not provide a warranty for color fading on garments during the laundry process. Customers are advised to check garment care labels for wash instructions before use.",
      },
      {
        service: "Woolen Laundry",
        price: "₹125/kg",
      },
      {
        service: "Premium & Express Laundry",
        price: "₹149/kg",
      },
    ],
  },
  {
    category: "Steam Iron",
    description: "Enhanced laundry options with steam iron and express services.",
    subcategories: [
      {
        subcategory: "Gents Wear",
        rates: [
          { service: "Suit (2 Pc.)", price: "₹120" },
          { service: "Suit (3 Pc.)", price: "₹130" },
          { service: "Coat (Small)", price: "₹80" },
          { service: "Coat (Over Coat)", price: "₹100" },
          { service: "Pant", price: "₹40" },
          { service: "Shirt", price: "₹40" },
          { service: "Shirt (Ch + I)", price: "₹40" },
          { service: "T-Shirt", price: "₹40" },
          { service: "Kurta Pyjama", price: "₹80" },
          { service: "Kurta", price: "₹60" },
          { service: "Sherwani (B)", price: "₹150" },
          { service: "Sherwani (S)", price: "₹100" },
          { service: "Shawl", price: "₹60" },
        ],
      },
      {
        subcategory: "Ladies Wear",
        rates: [
          { service: "Suit (2 Pc.)", price: "₹80" },
          { service: "Suit (3 Pc.)", price: "₹100" },
          { service: "Saree Cotton (Ch + P)", price: "₹100" },
          { service: "Medium (Ch + P)", price: "₹100" },
          { service: "Heavy (Ch + P)", price: "₹120" },
          { service: "Saree (s + p)", price: "₹100" },
          { service: "Saree Heavy", price: "₹130" },
          { service: "Coat Ladies (Small)", price: "₹60" },
          { service: "Coat Ladies (Big)", price: "₹80" },
          { service: "Pant", price: "₹50" },
          { service: "Shirt", price: "₹50" },
          { service: "Shirt (ch + p)", price: "₹50" },
          { service: "Dress Light (S + P)", price: "₹100" },
          { service: "Dress Heavy (S + P)", price: "₹170" },
          { service: "Dress (s) Ladies (2pc.)", price: "₹70" },
          { service: "Dress Ladies (3pc.)", price: "₹100" },
          { service: "Lehnga Chunni Top", price: "₹250" },
          { service: "Shawl Ladies", price: "₹50" },
          { service: "Stol", price: "₹50" },
          { service: "Blouse Light", price: "₹30" },
          { service: "Blouse Heavy", price: "₹50" },
          { service: "Blouse (ch + p) Light", price: "₹50" },
          { service: "Blouse (ch + p) Heavy", price: "₹50" },
          { service: "Sweater Half", price: "₹50" },
          { service: "Sweater Full", price: "₹70" },
        ],
      },
    ],
  },
];

const LaundryRateList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedSubIndex, setExpandedSubIndex] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleContent = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleSubContent = (categoryIndex, subIndex) => {
    setExpandedSubIndex((prevState) => ({
      ...prevState,
      [categoryIndex]: prevState[categoryIndex] === subIndex ? null : subIndex,
    }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative md:h-[50vh] h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${laundryImage})` }}
      >
        <div className="bg-gradient-to-r from-black to-transparent h-full flex items-center justify-center mt-[80px]">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-2">
              Laundry & Steam Iron Rate List
            </h1>
            <p className="md:text-xl text-lg text-white opacity-80">
              Reliable Laundry Services for Fresh and Flawless Results
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
              Laundry and Steam Iron services by Fresh Zone
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
                Why Choose Fresh Zone for Your Laundry Services?
              </h2>
              <p>
                Fresh Zone Dry Cleaning offers a top-tier laundry experience
                with advanced technology and eco-friendly methods. From delicate fabrics
                to daily wear, we ensure each garment receives the care it deserves.
              </p>
              <p>
                Our convenient pick-up and drop-off service makes laundry hassle-free.
                Every wash, fold, and iron service is provided with attention to quality and customer satisfaction.
              </p>
              <p>
                Trust Fresh Zone for reliable, sustainable, and expertly managed laundry services,
                crafted to extend the life of your garments.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 relative">
            <img
              src={About}
              alt="Laundry Services"
              className="rounded-lg shadow-lg w-full"
              style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)" }}
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-semibold">
              Starts from ₹89/KG
            </div>
          </div>
        </div>
      </section>

      {/* Rate List Section */}
      <section className="py-8 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Service Rate List
        </h2>

        {/* Rate List Content */}
        {laundryRates.map((category, index) => (
          <div key={index} className="mb-6 p-4 bg-white shadow-lg rounded-lg">
            <button
              onClick={() => toggleContent(index)}
              className="w-full text-left text-xl font-semibold text-green-600 mb-2"
            >
              {category.category} <span>{expandedIndex === index ? '-' : '+'}</span>
            </button>
            {expandedIndex === index && (
              <div>
                <p className="text-gray-700 mb-4">{category.description}</p>
                {category.subcategories ? (
                  category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <button
                        onClick={() => toggleSubContent(index, subIndex)}
                        className="w-full text-left text-lg font-semibold text-blue-600 mb-2"
                      >
                        {sub.subcategory} <span>{expandedSubIndex[index] === subIndex ? '-' : '+'}</span>
                      </button>
                      {expandedSubIndex[index] === subIndex && (
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr>
                              <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">Service</th>
                              <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sub.rates.map((rate, idx) => (
                              <tr key={idx}>
                                <td className="border-b py-2 px-4 text-gray-600">{rate.service}</td>
                                <td className="border-b py-2 px-4 text-gray-600">{rate.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))
                ) : (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">Service</th>
                        <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">Price</th>
                        <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.rates.map((rate, idx) => (
                        <tr key={idx}>
                          <td className="border-b py-2 px-4 text-gray-600">{rate.service}</td>
                          <td className="border-b py-2 px-4 text-gray-600">{rate.price}</td>
                          <td className="border-b py-2 px-4 text-gray-600">{rate.note || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Request Call Form */}
      {isFormOpen && <RequestCallForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
    </div>
  );
};

export default LaundryRateList;
