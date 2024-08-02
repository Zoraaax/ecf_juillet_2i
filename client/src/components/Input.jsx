import '../styles/components/input.scss'

const Input = ({ label, onChange, value }) => {
    return (
        <div className="input__container">
            <label htmlFor="username" className="input__label">{label}</label>
            <input type="text" placeholder="Indiquez votre nom d'utilisateur" name="username" className="input" onChange={onChange} value={value} />
        </div>
    )
}

export default Input;