import { useState } from "react";
import heroImage from "../assets/DryCleanHero.jpg"; // Replace with the path to your hero image
import descriptionImage from "../assets/aboutSection.jpg";
import RequestCallForm from "../components/RequestCallForm";

const dryCleaningServices = [
  {
    service: "Daily Wear",
    items: [
      { item: "Shirt", originalPrice: "₹109", discountedPrice: "₹89" },
      { item: "Shirt Starch", originalPrice: "₹59", discountedPrice: "₹440" },
      { item: "T Shirt", originalPrice: "₹109", discountedPrice: "₹89" },
      { item: "Ladies Top", originalPrice: "₹159", discountedPrice: "₹99" },
      { item: "Trouser", originalPrice: "₹139", discountedPrice: "₹89" },
      { item: "Jeans", originalPrice: "₹139", discountedPrice: "₹84" },
      {
        item: "Skirt Medium Starch",
        originalPrice: "₹70",
        discountedPrice: "₹49",
      },
      { item: "Skirt Half", originalPrice: "₹159", discountedPrice: "₹89" },
      { item: "Skirt Full", originalPrice: "₹339", discountedPrice: "₹119" },
      { item: "Dress", originalPrice: "₹299", discountedPrice: "₹249" },
      {
        item: "Dress Designer",
        originalPrice: "₹419",
        discountedPrice: "₹349",
      },
      { item: "Gown Medium", originalPrice: "₹589", discountedPrice: "₹399" },
      { item: "Gown Plain", originalPrice: "₹479", discountedPrice: "₹349" },
      { item: "Gown Heavy", originalPrice: "₹859", discountedPrice: "₹649" },
      { item: "Kids Dress", originalPrice: "₹179", discountedPrice: "₹149" },
      { item: "Suit (2 Pcs)", originalPrice: "-", discountedPrice: "₹220" },
      { item: "Suit (3 Pcs)", originalPrice: "-", discountedPrice: "₹300" },
    ],
  },
  {
    service: "Ethnic Wear",
    items: [
      {
        item: "Payjama / Salwar / Legging",
        originalPrice: "₹119",
        discountedPrice: "₹89",
      },
      {
        item: "Payjama / Salwar / Legging Starch",
        originalPrice: "₹39",
        discountedPrice: "₹29",
      },
      { item: "Plazo Plain", originalPrice: "₹149", discountedPrice: "₹89" },
      { item: "Plazo Heavy", originalPrice: "₹349", discountedPrice: "₹149" },
      { item: "Kurta / Kameez", originalPrice: "₹149", discountedPrice: "₹89" },
      {
        item: "Kurta / Kameez Starch",
        originalPrice: "₹50",
        discountedPrice: "₹49",
      },
      {
        item: "Kurta / Kameez - Work",
        originalPrice: "₹240",
        discountedPrice: "₹149",
      },
      {
        item: "Kurta / Kameez - Heavy Work",
        originalPrice: "₹369",
        discountedPrice: "₹230",
      },
      {
        item: "Kurta / Kameez - Heavy Work Starch",
        originalPrice: "₹119",
        discountedPrice: "₹89",
      },
      { item: "Sharara - R", originalPrice: "₹359", discountedPrice: "₹250" },
      { item: "Dupatta", originalPrice: "₹70", discountedPrice: "₹55" },
      { item: "Dupatta Starch", originalPrice: "₹39", discountedPrice: "₹30" },
      { item: "Dupatta Heavy", originalPrice: "₹219", discountedPrice: "₹110" },
      { item: "Blouse", originalPrice: "₹99", discountedPrice: "₹79" },
      { item: "Saree Regular", originalPrice: "₹219", discountedPrice: "₹149" },
      { item: "Saree", originalPrice: "₹319", discountedPrice: "₹220" },
      { item: "Saree Starch", originalPrice: "₹109", discountedPrice: "₹80" },
      { item: "Heavy Saree", originalPrice: "-", discountedPrice: "₹299" },
      { item: "Heavy Blouse", originalPrice: "-", discountedPrice: "₹109" },
    ],
  },
  {
    service: "Shoes",
    items: [
      { item: "Ankle", originalPrice: "₹1099", discountedPrice: "₹599" },
      {
        item: "Ankle Premium",
        originalPrice: "₹1650",
        discountedPrice: "₹899",
      },
      {
        item: "Ankle Super Dlx",
        originalPrice: "₹2200",
        discountedPrice: "₹1199",
      },
      { item: "Slippers", originalPrice: "₹129", discountedPrice: "₹97" },
      {
        item: "Slippers Premium",
        originalPrice: "₹189",
        discountedPrice: "₹142",
      },
      {
        item: "Slippers Super Dlx",
        originalPrice: "₹260",
        discountedPrice: "₹195",
      },
      { item: "Belle", originalPrice: "₹329", discountedPrice: "₹247" },
      {
        item: "Belle Designer",
        originalPrice: "₹389",
        discountedPrice: "₹292",
      },
      { item: "Belle Premium", originalPrice: "₹489", discountedPrice: "₹367" },
      { item: "Sports", originalPrice: "₹470", discountedPrice: "₹353" },
      {
        item: "Sports Permium",
        originalPrice: "₹699",
        discountedPrice: "₹524",
      },
      { item: "Suede", originalPrice: "₹769", discountedPrice: "₹499" },
      { item: "Kids Shoe", originalPrice: "₹379", discountedPrice: "₹199" },
    ],
  },
  {
    service: "Bags",
    items: [
      {
        item: "Backpack Leather",
        originalPrice: "₹660",
        discountedPrice: "₹399",
      },
      { item: "Mens Wallet", originalPrice: "₹249", discountedPrice: "₹149" },
      {
        item: "Ladies Hand Purse",
        originalPrice: "₹660",
        discountedPrice: "₹495",
      },
      {
        item: "Ladies Hand Purse Premium",
        originalPrice: "₹1319",
        discountedPrice: "₹699",
      },
      {
        item: "Ladies Purse Medium",
        originalPrice: "₹879",
        discountedPrice: "₹499",
      },
      { item: "Laptop Bag", originalPrice: "₹329", discountedPrice: "₹247" },
      {
        item: "Kids School Bag",
        originalPrice: "₹309",
        discountedPrice: "₹232",
      },
    ],
  },
  {
    service: "Woolen",
    items: [
      { item: "Sweat Shirt", originalPrice: "₹229", discountedPrice: "₹149" },
      { item: "Sweater Half", originalPrice: "₹179", discountedPrice: "₹110" },
      { item: "Sweater Full", originalPrice: "₹240", discountedPrice: "₹149" },
      { item: "Waist Coat", originalPrice: "₹229", discountedPrice: "₹160" },
      { item: "Coat", originalPrice: "₹299", discountedPrice: "₹210" },
      { item: "Over Coat", originalPrice: "₹549", discountedPrice: "₹320" },
      { item: "Jacket Half", originalPrice: "₹260", discountedPrice: "₹150" },
      { item: "Jacket Full", originalPrice: "₹319", discountedPrice: "₹200" },
      { item: "Shawl", originalPrice: "₹299", discountedPrice: "₹150" },
      {
        item: "Shawl Fancy / Pa",
        originalPrice: "₹470",
        discountedPrice: "₹220",
      },
      {
        item: "Blanket Ac / Sma",
        originalPrice: "₹359",
        discountedPrice: "₹200",
      },
      {
        item: "Blanket Ac / Larg",
        originalPrice: "₹439",
        discountedPrice: "₹299",
      },
      { item: "Comforter", originalPrice: "₹419", discountedPrice: "₹399" },
      { item: "Blanket - S", originalPrice: "₹489", discountedPrice: "₹299" },
      { item: "Blanket - D", originalPrice: "₹629", discountedPrice: "₹349" },
      {
        item: "Quilt / Rajai - S",
        originalPrice: "₹459",
        discountedPrice: "₹349",
      },
      {
        item: "Quilt / Rajai - D",
        originalPrice: "₹549",
        discountedPrice: "₹599",
      },
    ],
  },
  {
    service: "Household",
    items: [
      { item: "Bedsheet - S", originalPrice: "₹189", discountedPrice: "₹129" },
      { item: "Bedsheet - D", originalPrice: "₹289", discountedPrice: "₹149" },
      { item: "Bed Cover", originalPrice: "₹349", discountedPrice: "₹199" },
      { item: "Pillow Cover", originalPrice: "₹79", discountedPrice: "₹49" },
      { item: "Cushion Cover", originalPrice: "₹109", discountedPrice: "₹79" },
      {
        item: "Curtain Window",
        originalPrice: "₹209",
        discountedPrice: "₹110",
      },
      {
        item: "Curtain Window",
        originalPrice: "₹249",
        discountedPrice: "₹179",
      },
      {
        item: "Curtain Door / Panel",
        originalPrice: "₹319",
        discountedPrice: "₹249",
      },
      {
        item: "Curtain Door Lining",
        originalPrice: "₹369",
        discountedPrice: "₹199",
      },
      {
        item: "Curtain Ceiling / Pelmet",
        originalPrice: "₹409",
        discountedPrice: "₹249",
      },
      {
        item: "Curtain Ceiling Lining",
        originalPrice: "₹539",
        discountedPrice: "₹349",
      },
      {
        item: "Curtain Net / Partition",
        originalPrice: "₹289",
        discountedPrice: "₹159",
      },
    ],
  },
  {
    service: "Sofa",
    items: [
      { item: "Sofa / Seat", originalPrice: "₹329", discountedPrice: "₹250" },
      {
        item: "Leather Sofa / Se",
        originalPrice: "₹399",
        discountedPrice: "₹299",
      },
      { item: "Small Chair", originalPrice: "₹159", discountedPrice: "₹119" },
      { item: "Cushion Large", originalPrice: "₹109", discountedPrice: "₹82" },
      { item: "Cushion Small", originalPrice: "₹99", discountedPrice: "₹74" },
      { item: "Dining Chair", originalPrice: "₹209", discountedPrice: "₹157" },
    ],
  },
];

const DryCleaningRateList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative md:h-[50vh] h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-gradient-to-r from-black to-transparent h-full flex items-center justify-center mt-[80px]">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-2">
              Dry Cleaning Rate List
            </h1>
            <p className="md:text-xl text-lg text-white opacity-80">
              Professional & Reliable Cleaning Services for All Your Needs
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
              Dry Cleaning Services by Fresh Zone
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
                Why Choose Our Dry Cleaning Services?
              </h2>
              <p>
                At Fresh Zone, our premium dry cleaning service ensures your
                garments look their best. Utilizing cutting-edge cleaning
                techniques and eco-friendly solutions, we treat each item with
                the utmost care.
              </p>
              <p>
                From delicate silks to heavy jackets, our specialized processes
                remove stains and preserve colors, ensuring your clothes retain
                their original beauty and extend their lifespan.
              </p>
              <p>
                Choose Fresh Zone for meticulous, high-quality dry cleaning.
                With our attention to detail and quick turnaround, we provide
                exceptional care for every piece of clothing in your wardrobe.
              </p>
              <p>
                Let us make dry cleaning effortless with convenient pick-up and
                drop-off options that fit your schedule.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 relative">
            <img
              src={descriptionImage}
              alt="Dry Cleaning Services"
              className="rounded-lg shadow-lg w-full"
              style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)" }}
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-semibold">
              Starts from ₹70/KG
            </div>
          </div>
        </div>
      </section>

      {/* Service Rate List Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Service Rate List
          </h2>

          {/* Accordion for each service */}
          {dryCleaningServices.map((service, index) => (
            <div
              key={index}
              className="mb-6 border-b border-gray-200 rounded-lg shadow-md bg-white overflow-hidden"
            >
              <button
                className="w-full text-left text-xl font-semibold text-[#22c55e] py-4 px-6 flex justify-between items-center focus:outline-none"
                onClick={() => {
                  const content = document.getElementById(`content-${index}`);
                  content.classList.toggle("hidden");
                }}
              >
                {service.service}
                <span className="text-gray-500">+</span>
              </button>

              {/* Table for items within each service */}
              <div id={`content-${index}`} className="hidden p-4 bg-gray-50">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b-2 py-2 px-4 font-semibold text-gray-700">
                        Item
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
                    {service.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="border-b py-2 px-4 text-gray-600">
                          {item.item}
                        </td>
                        <td className="border-b py-2 px-4 text-gray-600">
                          {item.originalPrice}
                        </td>
                        <td className="border-b py-2 px-4 text-gray-600">
                          {item.discountedPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Request Call Form */}
      {isFormOpen && (
        <RequestCallForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default DryCleaningRateList;
