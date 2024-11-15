import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWrench, FaClock, FaShieldAlt, FaCogs, FaSync, FaExclamationTriangle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import machineRepairHero from '../assets/MachineRepairinghero.jpg';
import repairImage1 from '../assets/MachineRepairingabout.jpg';
import img1 from '../assets/Machien-Reparing/IMG-20241108-WA0032.jpg';
import img2 from '../assets/Machien-Reparing/IMG-20241108-WA0033.jpg';
import img3 from '../assets/Machien-Reparing/IMG-20241108-WA0034.jpg';
import img4 from '../assets/Machien-Reparing/IMG-20241108-WA0035.jpg';
import img5 from '../assets/Machien-Reparing/IMG-20241108-WA0036.jpg';
import img6 from '../assets/Machien-Reparing/IMG-20241108-WA0037.jpg';
import img7 from '../assets/Machien-Reparing/IMG-20241108-WA0038.jpg';
import img8 from '../assets/Machien-Reparing/IMG-20241108-WA0039.jpg';
import img9 from '../assets/Machien-Reparing/IMG-20241108-WA0040.jpg';
import img10 from '../assets/Machien-Reparing/IMG-20241108-WA0041.jpg';
import img11 from '../assets/Machien-Reparing/IMG-20241108-WA0042.jpg';
import img12 from '../assets/Machien-Reparing/IMG-20241108-WA0043.jpg';
import img13 from '../assets/Machien-Reparing/IMG-20241108-WA0044.jpg';
import img14 from '../assets/Machien-Reparing/IMG-20241108-WA0045.jpg';
import img15 from '../assets/Machien-Reparing/IMG-20241108-WA0046.jpg';
import img16 from '../assets/Machien-Reparing/IMG-20241108-WA0047.jpg';
import img17 from '../assets/Machien-Reparing/IMG-20241108-WA0048.jpg';
import img18 from '../assets/Machien-Reparing/IMG-20241108-WA0049.jpg';
import img19 from '../assets/Machien-Reparing/IMG-20241108-WA0050.jpg';
import img20 from '../assets/Machien-Reparing/IMG-20241108-WA0052.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const MachineRepairing = () => {
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[40vh] md:h-[70vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${machineRepairHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white relative z-10 tracking-wide px-8 py-4 rounded-md shadow-2xl backdrop-blur-md animate-fadeIn">
          Machine Repairing Services
        </h1>
      </div>

      {/* Introduction Section */}
      <section className="bg-white py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fadeInLeft">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
              Premium Machine Repair Services for Optimal Performance
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              At Fresh Zone, we specialize in maintaining high-performance laundry equipment to ensure reliable operations. Our skilled technicians provide expert repairs tailored to the unique demands of your machines, from washing units and dryers to ironing and pressing equipment.
            </p>
            <ul className="list-none space-y-2 text-lg text-gray-600 leading-relaxed">
              <li className="flex items-center">
                <FaWrench className="text-green-500 mr-2" /> Fast and reliable service
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-green-500 mr-2" /> Certified technicians with extensive experience
              </li>
              <li className="flex items-center">
                <FaCogs className="text-green-500 mr-2" /> Repairs for leading brands such as LG, Electrolux, and Speed Queen
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 animate-fadeInRight">
            <img
              src={repairImage1}
              alt="Machine Repair Service"
              className="rounded-lg shadow-lg w-full transform hover:scale-105 transition duration-300 ease-in-out"
              style={{ boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section with Swiper */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery of Our Repair Work</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-md shadow-sm"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`repair-image-${index}`}>
                <img
                  src={image}
                  alt={`Repair Work ${index + 1}`}
                  className="rounded-md w-full h-40 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-white py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Quicker Access to Success</h2>
          <p className="text-lg text-gray-600 mt-4">Reduce costs with superior productivity and generate profits with higher consistency.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Direct drive technology</h3>
              <p className="text-gray-600">LG’s trademarked inverter direct drive, in which the drum is directly attached to the drum. This mechanism reduces the number of moving parts, reducing maintenance costs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Automatic suds detection</h3>
              <p className="text-gray-600">The washer automatically detects over-suds and moves into a suds reduction mode to deliver a superior wash output.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Tilted drum</h3>
              <p className="text-gray-600">LG washers are inclined at an angle of 10°, enabling the washer to use less water without compromising on quality.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Energy optimization</h3>
              <p className="text-gray-600">The dryers automatically control the flow of air and gas, allocating precise energy to boost efficiency.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Space saver</h3>
              <p className="text-gray-600">AdaptAble trademark control, reversible door feature, and compact design help you save valuable space.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Energy star qualification</h3>
              <p className="text-gray-600">Save money and help the environment with LG’s energy star qualified appliances.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Save operating costs and service down-time</h3>
              <p className="text-gray-600">All LG commercial laundry products can be serviced from the front and are heat-treated for wear protection, reducing downtime.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">LG service guarantee</h3>
              <p className="text-gray-600">Global development facilities help ensure customer satisfaction and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-green-400">Our Specialized Machine Repairing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Washing Machine Repair',
                description: 'Professional repairs for residential and commercial washing machines, ensuring high cleaning standards and water efficiency.',
                icon: <FaWrench className="text-green-400 mb-2 text-4xl" />
              },
              {
                title: 'Dryer Repair',
                description: 'Comprehensive repair services to guarantee even heating, reduced drying times, and fabric protection for optimal performance.',
                icon: <FaClock className="text-green-400 mb-2 text-4xl" />
              },
              {
                title: 'Iron & Press Machine Repair',
                description: 'Specialized repairs for ironing and pressing machines, ensuring perfectly wrinkle-free results and improved pressing efficiency.',
                icon: <FaShieldAlt className="text-green-400 mb-2 text-4xl" />
              },
              {
                title: 'Spare Parts Replacement',
                description: 'Original spare parts replacement for various machine models to ensure quality and durability.',
                icon: <FaCogs className="text-green-400 mb-2 text-4xl" />
              },
              {
                title: 'Preventive Maintenance',
                description: 'Routine checks and preventive maintenance to prevent unexpected breakdowns and extend machine life.',
                icon: <FaSync className="text-green-400 mb-2 text-4xl" />
              },
              {
                title: 'Emergency Repair Services',
                description: 'Urgent repair services to minimize downtime and keep your business running smoothly.',
                icon: <FaExclamationTriangle className="text-green-400 mb-2 text-4xl" />
              }
            ].map((service, index) => (
              <div key={`service-${index}`} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-200">
                <div className="text-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-green-400 mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Commitment to Quality</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Fresh Zone, we understand that your laundry equipment is the backbone of your business. Downtime can lead to service disruptions and customer dissatisfaction. That’s why we are dedicated to providing fast and effective machine repair services.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our certified technicians are trained to handle even the most complex issues, ensuring that your equipment is back up and running with minimal delay. We use cutting-edge diagnostic tools to identify problems accurately and implement lasting solutions.
          </p>
          <blockquote className="bg-gray-100 border-l-4 border-green-400 p-4 mb-6 italic text-gray-600">
            &quot;Your satisfaction is our success. We’re committed to ensuring your equipment performs at its best, so you can focus on what matters most—your business.&quot;
          </blockquote>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choose Fresh Zone for a partner that prioritizes your success by ensuring your machines remain in peak condition, allowing you to focus on delivering top-quality laundry services to your customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MachineRepairing;
