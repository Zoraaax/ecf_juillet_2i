import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import '../styles/components/input.scss'

const Form = () => {

    const [username, setUsername] = useState('')
    const { create } = useUser()


    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await create(username)
            console.log('Utilisateur crée', user);
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Nom d'utilisateur" onChange={handleChange} />
            <Button variant="primary" text="C'est parti !" />
        </form>
    )
}

export default Form;