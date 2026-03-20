import { FileText, Presentation, Users as Users2 } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Publications & Talks
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Key Publications
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-slate-800 mb-1">
                  Optimization of Cache Size
                </h4>
                <p className="text-sm text-slate-600 mb-2">2017</p>
                <p className="text-slate-700">
                  Research paper exploring efficient cache management strategies for
                  improved system performance and resource utilization.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold text-slate-800 mb-1">
                  Weblog Mining Techniques
                </h4>
                <p className="text-sm text-slate-600 mb-2">Ph.D. Research</p>
                <p className="text-slate-700">
                  Comprehensive study on extracting meaningful patterns and insights
                  from web server logs using advanced data mining algorithms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Presentation size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Conference Talks
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-slate-800 mb-1">
                  PyConf Hyderabad 2026
                </h4>
                <p className="text-sm text-slate-600 mb-2">Upcoming</p>
                <p className="text-slate-700">
                  Scheduled to share insights on Python applications in academic research
                  and teaching methodologies.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold text-slate-800 mb-1">
                  Various Academic Conferences
                </h4>
                <p className="text-sm text-slate-600 mb-2">2000 - Present</p>
                <p className="text-slate-700">
                  Regular speaker at national and international conferences on AI,
                  Machine Learning, and Computer Science education.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg text-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Users2 size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Community Involvement
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">ChennaiPy</h4>
              <p className="text-blue-100">
                Active member of the Chennai Python User Group, contributing to the
                growth of the Python community through regular meetups, knowledge
                sharing sessions, and mentoring aspiring developers.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Open Source Advocate</h4>
              <p className="text-blue-100">
                Strong proponent of open-source technologies and collaborative learning.
                Encouraging students and professionals to contribute to the global
                developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
