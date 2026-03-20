import { Briefcase, Award, Users } from 'lucide-react';

const Academic = () => {
  return (
    <section id="academic" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Academic Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-12">
            <div className="relative">
              <div className="md:w-1/2 md:ml-auto md:pl-12">
                <div className="bg-slate-50 p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Briefcase size={28} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        Associate Professor & Head
                      </h3>
                      <p className="text-slate-600">Department of Computer Science</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    Nehru Memorial College (Autonomous)
                  </p>
                  <p className="text-slate-700 mb-4">30+ Years of Service</p>
                  <p className="text-slate-700">
                    Led the Department of Computer Science with dedication, fostering academic
                    excellence and innovation. Guided countless students in their pursuit of
                    knowledge and professional development.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
            </div>

            <div className="relative">
              <div className="md:w-1/2 md:pr-12">
                <div className="bg-slate-50 p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Award size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      Areas of Specialization
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Artificial Intelligence:</strong> Deep learning, neural networks, and intelligent systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Python Programming:</strong> Advanced programming concepts and application development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Machine Learning:</strong> Predictive modeling and data-driven solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Web Mining:</strong> Data extraction and analysis from web sources</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
            </div>

            <div className="relative">
              <div className="md:w-1/2 md:ml-auto md:pl-12">
                <div className="bg-slate-50 p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      Academic Contributions
                    </h3>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Mentored hundreds of undergraduate and postgraduate students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Developed innovative curriculum for computer science programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Established industry-academia collaboration programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Led research initiatives in emerging technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
