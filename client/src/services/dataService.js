// src/services/dataService.js
//import axios from 'axios';

//const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

/**
 * Fetches data from a specified endpoint.
 * @param {string} endpoint - The API endpoint.
 * @returns {Promise<Object>} - The data from the response.
 */
/* export const getData = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
*/

/**
 * Posts data to a specified endpoint.
 * @param {string} endpoint - The API endpoint.
 * @param {Object} data - The data to post.
 * @returns {Promise<Object>} - The response data.
 */
/* export const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

/**
 * Updates data at a specified endpoint.
 * @param {string} endpoint - The API endpoint.
 * @param {Object} data - The data to update.
 * @returns {Promise<Object>} - The response data.
 */
/*export const updateData = async (endpoint, data) => {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

/**
 * Deletes data at a specified endpoint.
 * @param {string} endpoint - The API endpoint.
 * @returns {Promise<Object>} - The response data.
 */
/*export const deleteData = async (endpoint) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
*/