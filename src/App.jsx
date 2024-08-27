import './App.module.css';

import { LoginSection } from './components/loginSection/LoginSection';
import { SectionTwoTrend } from './components/sectionTwoTrend/SectionTwoTrend';
import { SectionTwoCard } from './components/sectionTwoCard/SectionTwoCard';
import { ReasonsToJoin } from './components/reasonToJoin/ReasonToJoin';
import { Questions } from './components/questions/Questions';
import { Footer } from './components/footer/Footer';

function App() {
  
  return (
    <>
      <LoginSection />
      <SectionTwoTrend />
      <SectionTwoCard />
      <ReasonsToJoin />
      <Questions />
      <Footer />
    </>
  );
}

export default App
