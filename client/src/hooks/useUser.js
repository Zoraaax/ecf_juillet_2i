import { createUser } from "../api/user"

export const useUser = () => {
    const create = async (username) => {
        try {
            return await createUser(username);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    return {
        create
    }
}
