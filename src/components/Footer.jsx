import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-green-500">Freshzone Dry Clean</h3>
          <p className="text-gray-400 leading-relaxed">
            Providing top-tier dry cleaning and laundry services with a focus on quality and customer satisfaction. We are here to make your laundry experience seamless and hassle-free!
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 md:ml-[96px]">
          <h3 className="text-2xl font-semibold text-green-500">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#home" className="hover:text-green-500 transition duration-200">Home</a></li>
            <li><a href="#services" className="hover:text-green-500 transition duration-200">Services</a></li>
            <li><a href="#about" className="hover:text-green-500 transition duration-200">About Us</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition duration-200">Contact Us</a></li>
            <li><a href="#testimonials" className="hover:text-green-500 transition duration-200">Testimonials</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="space-y-4 md:ml-[-25px]">
          <h3 className="text-2xl font-semibold text-green-500">Policies</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#privacy" className="hover:text-green-500 transition duration-200">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-green-500 transition duration-200">Terms of Service</a></li>
            <li><a href="#refund" className="hover:text-green-500 transition duration-200">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 md:ml-[-116px]">
          <h3 className="text-2xl font-semibold text-green-500">Contact Us</h3>
          <p className="flex items-center text-gray-400 space-x-2">
            <FaMapMarkerAlt className="text-green-500" />
            <span>B4/32, Ground Floor, Sector 8, Rohini, Delhi, 110085</span>
          </p>
          <p className="flex items-center text-gray-400 space-x-2">
            <FaPhoneAlt className="text-green-500" />
            <a href="tel:9555252208" className="hover:text-green-500 transition duration-200">+91 95552 52208</a>
            <a href="tel:9910749910" className="hover:text-green-500 transition duration-200">+91 99107 49910</a>
          </p>
          <p className="flex items-center text-gray-400 space-x-2">
            <FaEnvelope className="text-green-500" />
            <a href="mailto:freshzonelaundryservices@gmail.com" className="hover:text-green-500 transition duration-200">freshzonelaundryservices@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Freshzone Dry Clean. All rights reserved | Powerd By BUSSINESSKARO.COM</p>
      </div>
    </footer>
  );
};

export default Footer;
