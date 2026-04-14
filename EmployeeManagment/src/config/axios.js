import axios from "axios";

const api = axios.create({
    baseURL : 'https://698f19c5aded595c2533d6ab.mockapi.io/',
    timeout : 5000,
    headers : {
        'content-type' : 'application/json'
    }
})

export default api;