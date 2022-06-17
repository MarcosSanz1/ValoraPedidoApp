import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.168.1.41:3001/api/', responseType: 'json'});

/**
 * FIND_ALL_VALORATIONS (Recibe un id de producto)
 * */
export const getValorations = (param) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('valorations').then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * ADD_VALORATION (Recibe un id de producto por parametro y un objeto valoration)
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