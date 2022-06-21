import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({baseURL: 'http://192.168.1.49:3001/api/', responseType: 'json', headers: { 'Content-Type': 'application/json' }});

const retryDelay = (retryNumber = 0) => { 
    const seconds = Math.pow(2, retryNumber) * 1000; 
    const randomMs = 1000 * Math.random(); 
    return seconds + randomMs; 
  }; 

axiosRetry(axios, { 
    retries: 2, 
    retryDelay,
    retryCondition: axiosRetry.isRetryableError
}); 

/**
 * FIND_ALL_PRODUCTS (Void)
 * */
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('products').then(res => {
        resolve(res);
    }).catch(err => {
        reject(err)
    })
    })
}

/**
 * ADD_PRODUCT (Product Object)
 * */
export const addProduct = (data) => {
    console.log('ADD PRODUCT');
    return new Promise((resolve, reject) => {
        axiosInstance.post('products', data).then(res => {
            console.log('res', res);
            resolve(res);
        }).catch(err => {
            console.error('err', err);
            reject(err)
        })
    })
}

/**
 * GET_PRODUCT (Product Id)
 * */
 export const findById = (param) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`products/${param}`).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * DELETE_PRODUCT (Product Id)
 * */
 export const deleteProduct = (param) => {
    return new Promise((resolve, reject) => {
        axiosInstance.delete(`products/${param}`).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}