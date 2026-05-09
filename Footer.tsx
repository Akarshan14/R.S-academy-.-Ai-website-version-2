import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1A237E] font-bold text-xl">RS</span>
              </div>
              <h3 className="text-2xl font-bold">R.S. Academy</h3>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Premier coaching institute in Dhankawadi specializing in Class 11, Class 12,
              and NEET Science entrance preparation with a focus on individual attention
              and guaranteed progress.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6F00] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6F00] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6F00] rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#home" className="hover:text-[#FF6F00] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FF6F00] transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF6F00] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF6F00] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Sr No 28, Saudagar Society, Dhankawadi, Pune - 411043
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919850911010" className="hover:text-[#FF6F00] transition-colors">
                  +91 98509 11010
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Open Daily: 10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} R.S. Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
