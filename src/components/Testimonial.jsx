import { useState, useEffect } from 'react';
import './Testimonial.css';
import profile from '../assets/profile.jpg';

const testimonials = [
  {
    id: 1,
    text: "I have been a regular customer of DhobiLite since more than a year. The responsiveness has been great. Their setup seems to have the rare combination of systemic rigor along with individual care. Would surely recommend.",
    name: "Shubhankar Sharma",
    title: "IT Professional",
    image: profile,
  },
  {
    id: 2,
    text: "Best online laundry services in NCR. I primarily use their laundry services, good value for money and customer service. Very polite staff!",
    name: "Deepshikha",
    title: "Student, LBS",
    image: profile,
  },
  {
    id: 3,
    text: "Hassle-free laundry at reasonable rates. They pick up clothes from your doorstep and deliver them back to your doorstep. You get notification messages at every step. Totally satisfied with their work.",
    name: "Manish Oberoi",
    title: "Businessman",
    image: profile,
  },
  {
    id: 3,
    text: "Hassle-free laundry at reasonable rates. They pick up clothes from your doorstep and deliver them back to your doorstep. You get notification messages at every step. Totally satisfied with their work.",
    name: "Manish Oberoi",
    title: "Businessman",
    image: profile,
  },
  {
    id: 3,
    text: "Hassle-free laundry at reasonable rates. They pick up clothes from your doorstep and deliver them back to your doorstep. You get notification messages at every step. Totally satisfied with their work.",
    name: "Manish Oberoi",
    title: "Businessman",
    image: profile,
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide interval in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <p className="testimonial-subtitle">OUR CUSTOMERS SAY</p>
      <h2 className="testimonial-title">Customers are our brand ambassadors</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === activeIndex ? 'focused' : 'blurred'
            }`}
          >
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="customer-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="customer-image"
              />
              <h4 className="customer-name">{testimonial.name}</h4>
              <p className="customer-title">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
