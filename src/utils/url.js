/*
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
const isProduction = process.env.NODE_ENV === 'production';

const url = isProduction ? '' : 'http://localhost:8088/';

const apiUrl = '/api';

export {
    apiUrl,
    url
}