import axios, {AxiosPromise} from 'axios';

axios.defaults.headers.get['Accept'] = 'application/json';

const Request = {
    get: (path: string): AxiosPromise => axios.get(`${process.env.API_ENDPOINT}${path}`)
};

export default Request;