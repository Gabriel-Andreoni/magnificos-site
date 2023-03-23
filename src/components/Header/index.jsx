import './Header.css'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <header className="header--menu">
            <img src={logo} alt="imagem de um logo" />
            <nav className="header--nav">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#foodMenu">Cardápio</a>
                    </li>
                    <li>
                        <a href="#footer">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}