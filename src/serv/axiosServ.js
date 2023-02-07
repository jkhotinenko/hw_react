import axios from "axios"

const axiosServ=axios.create({baseURL:'https://api.spacexdata.com/v3'})

export {
    axiosServ
}