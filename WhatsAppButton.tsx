import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = "Hello! I'd like to know more about R.S. Academy courses.";
    const whatsappUrl = `https://wa.me/919850911010?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="WhatsApp Enquiry"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-16 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp Enquiry
      </span>
    </button>
  );
}
