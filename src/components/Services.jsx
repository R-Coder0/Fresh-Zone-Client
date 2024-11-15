import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import png from '../assets/DC-png.png';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('dryclean');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = {
    dryclean: [
      {
        icon: png,
        title: 'DryClean',
        description: 'We use various best available technology and machines to increase the longevity of your favorite garments...',
        shortDescription: 'We use various best available technology...',
        price: '/pc',
        features: ['Wetcleaning Treatment', 'Spotting', 'Individual Packing'],
        link: '/dry-cleaning-rates' // Link to the dry cleaning rates page
      },
      {
        icon: png,
        title: 'Laundry/Steam Iron',
        description: 'Experience the epitome of freshness and eco-conscious care...',
        shortDescription: 'Experience the epitome of freshness...',
        price: '/pc',
        features: ['100% Organic', 'Wet Cleaning Technology', 'Spotting & Repairing', 'Box Packing'],
        link: '/laundry-rates' // Link to the laundry rates page
      },
      {
        icon: png,
        title: 'Leather Jacket',
        description: 'We use the latest technology and advanced machinery to ensure optimal preservation...',
        shortDescription: 'We use the latest technology...',
        price: '/pc',
        features: ['Spot Treatment', 'Steam Cleaning', 'Custom Treatment', 'Drying & Finishing'],
        link: '/leather-Jacket-rates' // Link to the dry cleaning rates page
      }
    ],
  };

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8 border-b border-gray-200">
          {['dryclean'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab ? 'border-b-4 border-green-500 text-green-700' : 'text-gray-500'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Rates
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:pr-[10rem] md:pl-[10rem]">
          {services[activeTab]?.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
              style={{ minHeight: '420px' }}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <img src={service.icon} alt={`${service.title} icon`} className="h-12 w-12" />
                  <p className="text-gray-600 text-sm">Starts at <span className="text-green-600">{service.price}</span></p>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-2">
                  {expandedIndex === index ? service.description : service.shortDescription}
                </p>
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-green-500 text-sm mb-4 inline-block"
                >
                  {expandedIndex === index ? 'Read Less' : 'Read More'}
                </button>

                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full bg-transparent text-green-600 border border-green-600 py-2 rounded-full hover:bg-green-50 transition">
                <Link to={service.link}>View Rate List</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
