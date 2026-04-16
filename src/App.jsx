import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Chapter from './components/sections/Chapter';
import ImpactWall from './components/sections/ImpactWall';
import PitchClose from './components/sections/PitchClose';

import { chapters, chapterById } from './data/chapters';
import { journeyStages } from './data/journey';
import {
  DiscoverScene,
  ExperienceScene,
  PurchaseScene,
  FulfilScene,
  RetainScene,
} from './components/scenes/Dioramas';

const sceneById = {
  discover: DiscoverScene,
  experience: ExperienceScene,
  purchase: PurchaseScene,
  fulfil: FulfilScene,
  retain: RetainScene,
};

// Map stages by id for quick lookup
const stageById = Object.fromEntries(journeyStages.map((s) => [s.id, s]));

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0612' }}>
      <Navbar />
      <Hero />

      {chapters.map((chapter, i) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          stage={stageById[chapter.id]}
          Scene={sceneById[chapter.id]}
          reverse={i % 2 === 1}
        />
      ))}

      <ImpactWall />
      <PitchClose />
      <Footer />
    </div>
  );
}

export default App;
