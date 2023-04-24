
import AxiosInstance from './Interceptor'

const Environment = {

    async get(path: any) {
        let api = await AxiosInstance.get(path)
        return api;
    },

    async post(path: any, payload: any) {
        let api = await AxiosInstance.post(path, payload)
        return api;
    },

    async put(path: any, payload: any) {
        let api = await AxiosInstance.post(path, payload)
        return api;
    },

    async patch(path: any, payload: any) {
        let api = await AxiosInstance.post(path, payload)
        return api;
    },

    async delete(path: any, payload: any) {
        let api = await AxiosInstance.post(path, payload)
        return api;
    },
}

export default Environment;