import style from'./App.module.css';
import { Header } from './components/header/Header';
import { LoginSection } from './components/loginSection/LoginSection'
import netflixBackGround from '../img/netflix-background.png'

function App() {
return (
    <>
      <div className={style.headerLogInSection} style={{
      backgroundImage: `url(${netflixBackGround} `, 
      height:'900px', 
      width:'100%', 
      backgroundRepeat:'no-repeat',

      }} >
        <Header />
        <LoginSection />
      </div>
    </>
  );
}

export default App
