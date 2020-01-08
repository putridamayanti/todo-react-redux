import axios from "axios";

export const Client = axios.create({
    baseURL: "http://localhost:8000/api/",
    // headers: {
    //     "Content-Type": "application/json",
    // }
});
