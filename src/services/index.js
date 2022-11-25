import * as request from '../utils/request';
import axios from 'axios';

export const GetAllUser = async () => {
    try {
        const res = await request.get(`/api/get-all-user`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
