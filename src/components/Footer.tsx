import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dr. Muralidharan M.</h3>
            <p className="text-slate-300">
              Retired Associate Professor & Head<br />
              Department of Computer Science
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:muralinehru@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={20} />
                <span>muralinehru@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} />
                <span>Tiruchirappalli, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <a
              href="https://indiravihar.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
            >
              <ExternalLink size={20} />
              <span>indiravihar.blogspot.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Muralidharan Murugesan. All rights reserved.</p>
            <p className="mt-2 text-sm">38 Years of Excellence in Higher Education</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
