import axios from "axios";
const qs = require('qs');
const AxiosInstance = axios.create({ baseURL:'http://localhost:8080',
    paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
    }
})
export default AxiosInstance