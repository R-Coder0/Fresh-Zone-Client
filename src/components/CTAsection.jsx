import { useState } from 'react';
import RequestCallForm from './RequestCallForm';

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="bg-black text-white text-center py-10 px-6 mt-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let&apos;s make your laundry experience easier and more convenient!
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Get in touch with our specialists for a free consultation. Discover how we can take care of your laundry needs with top-notch service and convenience!
      </p>
      <button
        onClick={openForm} // Trigger the form to open
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition duration-200"
      >
        <span role="img" aria-label="chat">💬</span> Book a Laundry Pickup
      </button>

      {/* Render the form component */}
      <RequestCallForm isOpen={isFormOpen} onClose={closeForm} />
    </section>
  );
};

export default CTASection;
