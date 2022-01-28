import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://juliankrochmal-reduxstore.netlify.app/'
})

export default axiosClient