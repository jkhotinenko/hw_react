import axios from "axios";

const axiosServ=axios.create({baseURL:'https://jsonplaceholder.typicode.com'})

export {
    axiosServ
}