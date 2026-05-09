import { BookOpen, MessageCircle, Globe, ClipboardCheck } from 'lucide-react';

export function AcademyDifference() {
  const features = [
    {
      icon: BookOpen,
      title: 'Library Access',
      description: 'Well-stocked in-house library with reference materials, practice papers, and study guides to support your learning journey.',
      color: 'bg-blue-100 text-[#1A237E]',
    },
    {
      icon: MessageCircle,
      title: 'Doubt Clearing',
      description: 'Personalized doubt-clearing sessions for every query. No question is too small - we ensure complete understanding.',
      color: 'bg-orange-100 text-[#FF6F00]',
    },
    {
      icon: Globe,
      title: 'E-Learning Portal',
      description: 'Access online resources, performance reports, and study materials anytime. Track your progress with detailed analytics.',
      color: 'bg-teal-100 text-[#00BCD4]',
    },
    {
      icon: ClipboardCheck,
      title: 'Regular Assessments',
      description: 'Weekly mock tests and regular assessments to ensure exam readiness and identify areas for improvement.',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
          The R.S. Academy Difference
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive support to ensure every student achieves their academic goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-[#1A237E] rounded-2xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Small Batch Sizes for Individual Attention
            </h3>
            <p className="text-blue-100 leading-relaxed">
              We maintain small class sizes to avoid overcrowded classrooms and ensure
              each student receives personalized attention and guidance from our experienced faculty.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#FF6F00]">11th</p>
              <p className="text-sm text-blue-100">Science Stream</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#FF6F00]">12th</p>
              <p className="text-sm text-blue-100">Science Stream</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#FF6F00]">NEET</p>
              <p className="text-sm text-blue-100">Entrance Prep</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#FF6F00]">9th</p>
              <p className="text-sm text-blue-100">Tutorials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
