import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6542ed5ff8c241bda238c6d28413b576'
    }
})