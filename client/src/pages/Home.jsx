import Form from "../components/Form";
import Header from "../components/Header";
import './home.scss'

const Home = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Form />
            </main>
        </>
    )
}

export default Home;