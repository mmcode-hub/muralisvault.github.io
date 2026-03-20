import { BookOpen, Code, Camera } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Educator & Administrator
            </h3>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Throughout my distinguished career spanning nearly four decades, I have had the
              privilege of shaping minds and contributing to the field of Computer Science
              education. My journey has been marked by a commitment to excellence, innovation,
              and continuous learning.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              I hold a <strong>Ph.D. in Computer Science</strong> with specialization in
              <strong> Weblog Mining</strong> from Bharathidasan University. My research
              interests have always been at the intersection of emerging technologies and
              practical applications.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Beyond academia, I am deeply passionate about Python programming, Artificial
              Intelligence, and Photography. I believe in the power of technology to transform
              lives and the importance of capturing moments through the lens.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen size={32} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Education</h4>
              </div>
              <p className="text-slate-700">
                Ph.D. in Computer Science (Weblog Mining)<br />
                Bharathidasan University
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Code size={32} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Expertise</h4>
              </div>
              <p className="text-slate-700">
                Artificial Intelligence, Python Programming, Machine Learning,
                Web Technologies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Camera size={32} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Passion</h4>
              </div>
              <p className="text-slate-700">
                Photography enthusiast capturing the beauty of technology and nature
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
