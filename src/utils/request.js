import axios from 'axios';
axios.defaults.withCredentials = true;
const request = axios.create({
    baseURL: 'http://localhost:7070',
    headers: {
        'Content-type': 'application/json',
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};

export const DELETE = async (path, options = {}) => {
    const response = await request.delete(path, options);
    return response.data;
};
export default request;
