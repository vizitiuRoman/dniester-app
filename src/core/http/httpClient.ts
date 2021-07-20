import { environment } from '@environments/environment';
import axios, { AxiosInstance } from 'axios';

export default axios.create({
    baseURL: environment.API_URL,
}) as AxiosInstance;
