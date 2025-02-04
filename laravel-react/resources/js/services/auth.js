// resources/js/services/auth.js
import axios from 'axios';

// We don't need to specify the full URL since Laravel Breeze 
// configures axios to use the correct base URL
const authService = {
    async register(userData) {
        try {
            // Make sure CSRF token is included
            await axios.get('/sanctum/csrf-cookie');
            
            const response = await axios.post('/register', userData);
            if (response.data.access_token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    async login(credentials) {
        try {
            // Get CSRF cookie first
            await axios.get('/sanctum/csrf-cookie');
            
            const response = await axios.post('/login', credentials);
            if (response.data.access_token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('user');
        return axios.post('/logout');
    },

    // Helper method to check if user is logged in
    isAuthenticated() {
        return localStorage.getItem('user') !== null;
    }
};

export default authService;