import { ArrowRight, BookOpen, FlaskConical, Trophy, ClipboardCheck } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  const tags = [
    { icon: FlaskConical, label: 'NEET' },
    { icon: BookOpen, label: 'Science' },
    { icon: ClipboardCheck, label: 'Mock Tests' },
    { icon: Trophy, label: 'Class 11/12' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-100 text-[#FF6F00] rounded-full">
              Premier Coaching Institute in Dhankawadi
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A237E] leading-tight">
              Achieve 100% Progress in Your Academic Journey
            </h1>

            <p className="text-lg text-gray-600">
              Expert coaching for Class XI & XII Science, NEET entrance preparation,
              and Class IX tutorials. Small batch sizes ensure individual attention
              and personalized learning.
            </p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <Icon className="w-5 h-5 text-[#FF6F00]" />
                    <span className="font-medium text-gray-700">{tag.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#00BCD4] hover:bg-[#00ACC1] text-white rounded-xl font-medium flex items-center gap-2 transition-colors shadow-lg"
              >
                Book a Demo Class
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:+919850911010"
                className="px-8 py-4 bg-white border-2 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white rounded-xl font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758685733987-54952cd1c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Professor teaching student in science lab"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#FF6F00]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-xl font-bold text-[#1A237E]">100% Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
