import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: 'Priya Sharma',
      role: 'Parent of Class 12 Student',
      rating: 5,
      text: 'Nice academy, 100 percent progress seen in my child\'s performance. The teachers are dedicated and the study material is excellent.',
    },
    {
      name: 'Rajesh Patil',
      role: 'NEET Aspirant',
      rating: 5,
      text: 'The teachers are very supportive and provide continuous practice sheets to strengthen basic concepts. Best decision for NEET preparation!',
    },
    {
      name: 'Sneha Deshmukh',
      role: 'Parent of Class 11 Student',
      rating: 5,
      text: 'The best place in Dhankawadi for competitive and board exam preparation. Small batch sizes ensure individual attention.',
    },
    {
      name: 'Amit Kumar',
      role: 'Class 12 Student',
      rating: 5,
      text: 'Excellent guidance for board exams. The doubt-clearing sessions and regular tests have significantly improved my understanding of concepts.',
    },
    {
      name: 'Meera Joshi',
      role: 'Parent of NEET Student',
      rating: 5,
      text: 'Parent-teacher meetings help us track progress effectively. The e-learning portal is a great addition for practice at home.',
    },
    {
      name: 'Karan Singh',
      role: 'Class 11 Student',
      rating: 5,
      text: 'The library facility and study environment are outstanding. Teachers make difficult concepts easy to understand.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-orange-100 text-[#FF6F00] rounded-full mb-4">
          Wall of Love
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
          Our Success Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from our students and parents about their experience at R.S. Academy
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF6F00] text-[#FF6F00]" />
              ))}
            </div>

            <div className="relative mb-4">
              <Quote className="w-8 h-8 text-blue-100 absolute -top-2 -left-2" />
              <p className="text-gray-700 leading-relaxed pl-6">
                {review.text}
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="font-bold text-[#1A237E]">{review.name}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-8 bg-gradient-to-r from-[#1A237E] to-blue-600 text-white rounded-2xl px-8 py-6 shadow-lg">
          <div className="text-left">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-blue-100">Happy Students</p>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-left">
            <p className="text-4xl font-bold">15+</p>
            <p className="text-blue-100">Years Experience</p>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-left">
            <p className="text-4xl font-bold">100%</p>
            <p className="text-blue-100">Progress Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
