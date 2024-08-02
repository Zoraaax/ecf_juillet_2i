import axios from 'axios';

export const createUser = async (username) => {
    try {
        const response = await axios.post("http://localhost:3000/api/users", { username });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || error.message);
    }
}