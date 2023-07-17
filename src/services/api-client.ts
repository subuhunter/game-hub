import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f99cefd5ca8348a7b04c53f1389ba3d1'
    }
})