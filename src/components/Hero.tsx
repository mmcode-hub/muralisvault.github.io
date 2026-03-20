import { Download, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
              <GraduationCap size={80} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Muralidharan Murugesan
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 font-light">
            Retired Associate Professor & Head
          </h2>

          <p className="text-xl text-slate-300 mb-4">
            Department of Computer Science
          </p>

          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg mb-8 font-semibold text-lg">
            38 Years of Excellence in Higher Education
          </div>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Dedicated educator, researcher, and technology enthusiast with a passion for
            Artificial Intelligence, Python Programming, and Photography
          </p>

          <a
            href="/assets/pdf/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download size={24} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
