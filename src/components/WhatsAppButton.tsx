import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton: React.FC = () => {
  const phoneNumber = '972542412474'; // Replace with actual phone number
  const message = 'שלום רועי עזרי, אני מעוניין/ת ליצור קשר בנושא...';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[6.5rem] right-[18px] z-50 w-[60px] h-[60px] bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="צור קשר בוואטסאפ"
    >
      <FaWhatsapp className="h-7 w-7 group-hover:scale-110 transition-transform duration-200" />

      {/* Tooltip */}
      <div
        // הדיב החיצוני של הטולטיפ
        className="absolute top-1/2 right-full transform -translate-y-1/2 mr-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
      >
        צור קשר בוואטסאפ

        {/* הדיב של החץ */}
        <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;