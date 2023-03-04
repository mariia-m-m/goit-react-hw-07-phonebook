import axios from 'axios'

const contactInctance = axios.create({
    baseURL: "https://64022085ab6b7399d0b4823a.mockapi.io/api/contacts"
})

export const getAllcontacts = async () => {
    const { data } = await contactInctance.get("/");
    return data
}

export const addContact = async (data) => {
    const { data: result } = await contactInctance.post("/", data);
    return result
}

export const deleteContact = async (id) => {
    const { data } = await contactInctance.delete(`/${id}`);
    return data;
}