import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Journey from './components/sections/Journey';
import WhyFynd from './components/sections/WhyFynd';
import BeautyPass from './components/sections/BeautyPass';
import PitchClose from './components/sections/PitchClose';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Journey />
      <WhyFynd />
      <BeautyPass />
      <PitchClose />
      <Footer />
    </div>
  );
}

export default App;
