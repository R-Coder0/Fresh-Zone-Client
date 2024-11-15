// Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import RequestCallForm from "../components/RequestCallForm";
import logo from "../assets/Fzlogo.jpg";

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-5">
      <div className="flex items-center space-x-4">
  <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
    <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
    <span className="text-gray-800">Fresh Zone</span>
  </Link>
  <div className="border-l-2 border-gray-300 h-8"></div>
  <a href="https://maps.app.goo.gl/R4PYJZWCy828xgbi6">
    <FaMapMarkerAlt className="text-black text-2xl" />
  </a>
</div>


        {/* Center: Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link
              to="/#home"
              className="hover:text-orange-500 text-lg cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              className="hover:text-orange-500 text-lg cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/machine-repairing"
              className="hover:text-orange-500 text-lg cursor-pointer"
            >
              Machine Repairing
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              className="hover:text-orange-500 text-lg cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className="hover:text-orange-500 text-lg cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Contact and Call to Action for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:09555252208"
            className="flex items-center px-4 py-2 border border-black text-black rounded-full hover:bg-blue-50 text-lg"
          >
            <FaPhoneAlt className="mr-2" />
            95552 52208
          </a>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-800 text-lg"
            onClick={openForm}
          >
            Request Call Back
          </button>
          <RequestCallForm isOpen={isFormOpen} onClose={closeForm} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-700">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col space-y-6 p-6 text-gray-800 font-semibold">
          <Link
            to="/#home"
            className="hover:text-orange-500 text-lg"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/#services"
            className="hover:text-orange-500 text-lg"
            onClick={toggleMobileMenu}
          >
            Our Services
          </Link>
          <Link
            to="/machine-repairing"
            className="hover:text-orange-500 text-lg"
            onClick={toggleMobileMenu}
          >
            Machine Repairing
          </Link>
          <Link
            to="/#about"
            className="hover:text-orange-500 text-lg"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="hover:text-orange-500 text-lg"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
