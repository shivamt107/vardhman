import React from 'react';

const Footer = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">About</h4>
          <p className="leading-6">Vardaan Electronics Industries Pvt. Ltd., is an ISO 9001 company setup in 2021 for the manufacturing of IPIS, PA, PIS, infotainment system and CCTV systems for Rolling stock application.</p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Address</h4>
          <p className="leading-6 mb-4">Vardaan Electronics Industries Pvt Ltd
            A-184, A Block, Sector 63,
            Noida, UP-201301, India</p>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p className="leading-6">Email: info@vardaanindustries.in</p>
          <p className="leading-6">Phone: +1 (555) 123-4567</p>
          <p className="mt-4">
            <button 
              className="bg-[#20B2AA] text-white px-6 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 hover:bg-[#1a9087] hover:shadow-lg" 
              onClick={onContactClick}
            >
              Contact Us
            </button>
          </p>
        </div>

        <div className="md:col-span-2 text-center pt-6 border-t border-gray-700">
          <p className="text-sm">© 2025 Vardaan Industries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
