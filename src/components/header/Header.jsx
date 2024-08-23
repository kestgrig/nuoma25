import style from './Header.module.css';
import logo from '/img/netflix-logo.png';


export function Header() {
    return (
        <header className={style.mainHeader}>
            <div className={style.mainlogo}>
                <img className={style.logo} src={logo} alt="Logo" />
            </div>
            <nav className={style.languageSelect}>
                <select className={style.languageSelect}>
                    <option value="english">English</option>
                    <option value="lithuanian">Lietuvių</option>
                </select>
                <button className={style.signInBtn}>Sign In</button>
            </nav>
        </header>
        
    )
    
}