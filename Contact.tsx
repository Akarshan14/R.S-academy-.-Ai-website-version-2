import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm ${formData.name}. I'm interested in ${formData.course}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919850911010?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Book a demo class or reach out to us for any queries
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#1A237E]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A237E] mb-2">Address</h3>
                <p className="text-gray-600">
                  Sr No 28, Saudagar Society,<br />
                  Dhankawadi, Pune - 411043
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#FF6F00]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A237E] mb-2">Phone</h3>
                <a
                  href="tel:+919850911010"
                  className="text-gray-600 hover:text-[#FF6F00] transition-colors"
                >
                  +91 98509 11010
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A237E] mb-2">Hours</h3>
                <p className="text-gray-600">
                  Open Daily<br />
                  10:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A237E] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-3">Why Choose R.S. Academy?</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF6F00] rounded-full"></div>
                Individual attention in small batches
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF6F00] rounded-full"></div>
                Experienced and supportive faculty
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF6F00] rounded-full"></div>
                Regular parent-teacher meetings
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF6F00] rounded-full"></div>
                Comprehensive study materials
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-[#1A237E] mb-6">
            Book a Demo Class
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A237E] bg-gray-50"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A237E] bg-gray-50"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A237E] bg-gray-50"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Course Interested In</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A237E] bg-gray-50"
              >
                <option value="">Select a course</option>
                <option value="Class 9 Tutorial">Class 9 Tutorial</option>
                <option value="Class 11 Science">Class 11 Science</option>
                <option value="Class 12 Science">Class 12 Science</option>
                <option value="NEET Preparation">NEET Preparation</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A237E] bg-gray-50 resize-none"
                placeholder="Any specific questions?"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#00BCD4] hover:bg-[#00ACC1] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
