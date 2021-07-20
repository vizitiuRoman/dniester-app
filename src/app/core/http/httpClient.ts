import axios, { AxiosInstance } from 'axios';

import { environment } from '@environments/environment';

export default axios.create({
    baseURL: environment.API_URL,
}) as AxiosInstance;
