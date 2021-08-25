import axios from "axios";

const api = axios.create({
    //baseURL: "https://evening-lake-42269.herokuapp.com/",
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
