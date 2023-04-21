import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL

class ApiService{

    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.axios = axios.create({
            baseURL: BASE_URL
        })
    }
    
    async get(relativeUrl){
        const res = {};
        try{
            const data = await this.axios.get(relativeUrl);
            res.data = data.data;
        }catch(e){
            res.error = e;
        }
        return res;
    }

}

const baseApiService = new ApiService(BASE_URL);
export default baseApiService;