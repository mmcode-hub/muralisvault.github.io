import { Camera } from 'lucide-react';

const Photography = () => {
  const placeholders = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section id="photography" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Photography
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Capturing the beauty of technology, nature, and moments through the lens.
            A visual journey of my passion for photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((num) => (
            <div
              key={num}
              className="group relative aspect-square bg-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                <Camera size={48} className="text-slate-500" />
              </div>
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">Photo {num}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 italic">
            Photography portfolio showcasing diverse subjects and techniques
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;
