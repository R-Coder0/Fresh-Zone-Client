/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const RequestCallForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyWhatsAppNumber = "+919555252208"; 
    const whatsappMessage = `Hello, my name is ${name}. Email: ${email}. Subject: ${subject}. Message: ${message}`;
    const whatsappURL = `https://wa.me/${companyWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gradient-to-br from-green-100 via-white to-blue-100 p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          ✖
        </button>

        <h2 className="text-3xl font-bold mb-6 text-green-500 text-center">Request a Call Back</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition"
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition"
              placeholder="Write your message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 mr-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition text-sm font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 ml-2 bg-green-500 text-white flex justify-center items-center space-x-2 rounded-lg hover:bg-green-600 transition text-sm font-semibold"
            >
              <FaWhatsapp /> <span>Submit via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestCallForm;
