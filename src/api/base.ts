import axios from 'axios'

// const apiBaseUrl = 'https://chat-demo-4fz7.onrender.com/'
const apiBaseUrl = 'https://our-chat-api.up.railway.app'
// const apiBaseUrl = 'http://localhost:5500/'

const apiInstance = axios.create({
	baseURL: apiBaseUrl,
})

export { apiInstance, apiBaseUrl }
