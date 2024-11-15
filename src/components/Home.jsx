// Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/HeroImage.jpg'; 
import CTASection from './CTAsection';

const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const locations = ['Chandannagar, Hooghly', 'Kolkata', 'Delhi', 'Mumbai'];
  const [currentLocation, setCurrentLocation] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 100; 
  const erasingSpeed = 50; 
  const delayBetweenWords = 1000;

  useEffect(() => {
    const currentWord = locations[index];
    let timeout;

    if (isTyping) {
      if (currentLocation.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentLocation(currentWord.slice(0, currentLocation.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetweenWords);
      }
    } else {
      if (currentLocation.length > 0) {
        timeout = setTimeout(() => {
          setCurrentLocation(currentLocation.slice(0, -1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setIndex((prevIndex) => (prevIndex + 1) % locations.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentLocation, isTyping, index, locations]);

  return (
    <>
      <section
        id="home"
        className="flex items-center justify-center md:justify-start text-white px-6 bg-cover bg-center relative h-[40rem]"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Mobile background image */}
        <style>
          {`
            @media (max-width: 768px) {
              #home {
                background-image: url(${hero});
              }
            }
          `}
        </style>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-0 text-center md:text-left">
          
          {/* Main Heading */}
          <h1 className="text-[2.8rem] md:ml-[90px] md:text-[4.2rem] font-bold mb-4 leading-tight text-white md:text-white">
            Dry Clean & Laundry with 48h Delivery in <span className="text-green-400">49 cities</span>
          </h1>

          {/* Dynamic Location Text with Typing Effect */}
          <p className="text-[1.8rem] md:text-3xl font-semibold mb-6 md:ml-[90px] text-white">
            Currently serving <span className="text-green-300">{currentLocation}</span>
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6">
            <button className="bg-green-500 text-white text-lg md:text-base px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-200 md:ml-[90px]">
              <Link to="/#services">Explore Services</Link>
            </button>
          </div>
        </div>
      </section>
      <CTASection/>
    </>
  );
};

export default Home;
