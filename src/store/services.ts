import axios from "axios"

export const newPost = async ({formData}:any) => {
    console.log(formData)
    const response = await axios.post("http://127.0.0.1:8000/api/posts/create",formData);

    return response;
}