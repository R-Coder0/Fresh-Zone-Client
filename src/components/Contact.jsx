import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp URL
    const whatsappMessage = `Hello, my name is ${formData.name}. My email is ${formData.email} and my phone number is ${formData.phone}. Here’s my message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919555252208?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch with Us</h2>
        <p className="text-gray-700 mb-12">We’d love to hear from you! Fill out the form below or reach us through our contact information and social media links.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="flex flex-col space-y-8">
            {/* Contact Details */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Details</h3>
              <p className="flex items-center text-gray-700 mb-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> <a href="https://maps.app.goo.gl/f1bZhhCyFJEK6GYi6">B4/32, Ground floor, Halar Rd, Pocket 7, Sector 8B, Sector 8, Rohini, Delhi, 110085</a>
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <FaPhoneAlt className="mr-2 text-green-500" /> <a href="tel:9555252208">+91 95552 52208</a>
              </p>
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="mr-2 text-green-500" /> <a href="mailto:freshzonelaundryservices@gmail.com">freshzonelaundryservices@gmail.com</a>
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4 justify-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111987.54275353033!2d77.04149193906248!3d28.70128949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0382269be69d%3A0x263cf042f059f1ae!2sFRESHZONE%20DRYCLEANING%20%26%20LAUNDRY!5e0!3m2!1sen!2sin!4v1730107335850!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
                title="Business Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
