  
import style from '../loginSection/LoginSection.module.css'
import logo from '/src/img/netflix-logo.png';


export function LoginSection () {

  return (
    <>
      <div className={style.backGround}>
        <header className={style.mainHeader}>
          <div className={style.mainlogo}>
            <img className={style.logo} src={logo} alt="Logo" />
          </div>
          <nav className={style.btnSelect}>
            <ul id="nav" >
              <li className={style.nuoma}>
                <a href="ilgalaike-automobiliu-nuoma">Automobilių nuoma</a>
                <a href="ilgalaike-automobiliu-nuoma">Technikos nuoma</a>
                <a href="veiklos-nuoma">Įrankių nuoma</a>
                <a href="apie-mus">Apie mus</a>
                <a href="kontaktai">Kontaktai</a>
              </li>
            </ul>
            <select className={style.languageSelect}>
              <option value="english">LT</option>
              <option value="lithuanian">ENG</option>
            </select>
          </nav>
        </header>
        <section className={style.content}>
          <h1 className={style.unlimited}>Automobilių, technikos, įrankių nuoma Kaune<br/> </h1>
          <h2 className={style.price}></h2>

        </section>
        </div>
    </>
  );
}