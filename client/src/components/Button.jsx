import '../styles/components/button.scss'

const Button = ({ variant, text, onClick }) => {
    return (
        <button className={`button button--${variant}`} onClick={onClick}>{text}</button>
    )
}

export default Button;