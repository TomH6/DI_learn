import axios from "axios";

axios.create({
    baseURL: 'http://localhost:2222/api/users'
});

export default axios;