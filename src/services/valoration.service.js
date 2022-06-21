import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.168.1.49:3001/api/', responseType: 'json'});

/**
 * ADD_VALORATION (params: Product Id & data: Valoration Object)
 * */
export const addValoration = (param, data) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post(`valorations/${param}`, data).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}