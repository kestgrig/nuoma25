import './Header.css';
import logo from '/img/netflix-logo.png'


export function Header() {
    return (
        <header className='mainHeader'>
            <div className='mainlogo'>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <nav className='language-select'>
                <select className="language-select">
                    <option value="english">English</option>
                    <option value="lithuanian">Lietuvių</option>
                </select>
                <button className='signInBtn'>Sign In</button>
            </nav>
        </header>
        
    )
    
}