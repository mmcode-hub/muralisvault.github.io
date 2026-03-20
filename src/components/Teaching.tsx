import { Users, Building2, GraduationCap } from 'lucide-react';

const Teaching = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Teaching & Training
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Building2 size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
              Industry Training
            </h3>
            <p className="text-slate-700 text-center mb-4">
              Resource person for prestigious organizations including
            </p>
            <div className="text-center">
              <p className="font-semibold text-blue-600">
                Bharat Heavy Electricals Limited (B.H.E.L)
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <GraduationCap size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
              University Programs
            </h3>
            <p className="text-slate-700 text-center">
              Conducted training programs and workshops for faculty members across
              multiple universities, sharing expertise in modern teaching methodologies
              and emerging technologies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Users size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
              Student Development
            </h3>
            <p className="text-slate-700 text-center">
              Organized numerous workshops, seminars, and training sessions to enhance
              student skills in programming, AI, and professional development.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Training Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Python Programming & Advanced Concepts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Artificial Intelligence & Machine Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Data Science & Analytics</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Web Technologies & Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Research Methodology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Industry Best Practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
