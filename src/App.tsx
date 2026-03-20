import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Academic from './components/Academic';
import Publications from './components/Publications';
import Photography from './components/Photography';
import Teaching from './components/Teaching';
import Footer from './components/Footer';
import ScrollSection from './components/ScrollSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ScrollSection>
        <About />
      </ScrollSection>
      <ScrollSection>
        <Academic />
      </ScrollSection>
      <ScrollSection>
        <Publications />
      </ScrollSection>
      <ScrollSection>
        <Photography />
      </ScrollSection>
      <ScrollSection>
        <Teaching />
      </ScrollSection>
      <Footer />
    </div>
  );
}

export default App;
