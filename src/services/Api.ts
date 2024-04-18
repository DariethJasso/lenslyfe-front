/* import axios from "axios";

// Interfaz para los datos del usuario
interface UserData {
    name: string;
    lastName: string;
    email: string;
    password: string;
    password_confirmation: string;
}

// Interfaz para los errores de validación


export const registerUser = async (data: UserData) => {
    const response = await axios.post("http://localhost:8000/api/auth/register", data);

    const dataResponse = response.data;
    return {
        statusCode: response.status,
        data: dataResponse
    }
};

export const UserLogin = async (data: UserData) => {
    const response = await axios.post("http://localhost:8000/api/auth/login", data);

    const dataResponse = response.data;
    return {
        statusCode: response.status,
        data: dataResponse
    }
}
 */