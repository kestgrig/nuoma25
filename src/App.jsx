import './App.module.css';

import { Questions } from './components/questions/Questions.jsx';
import { LoginSection } from './components/loginSection/LoginSection.jsx';
import { ReasonsToJoin } from './components/reasonToJoin/ReasonToJoin.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { SectionTwoTrend } from './components/sectionTwoTrend/SectionTwoTrend.jsx';
import { SectionTwoCard } from './components/sectionTwoCard/SectionTwoCard.jsx';

function App() {

  return (
    <>
      <LoginSection />
      <SectionTwoTrend />
      <ReasonsToJoin />
      <Footer />
    </>
  );
}

export default App