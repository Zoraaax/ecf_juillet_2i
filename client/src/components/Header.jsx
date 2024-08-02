import '../styles/components/header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__brand">
                <h1 className="header__title">QuizAventure</h1>
                <h2 className="header__subtitle">Testez vos connaissances tout en vous amusant !</h2>
            </div>
        </header>
    )
}

export default Header;