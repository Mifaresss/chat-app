import axios from 'axios'

const apiBaseUrl = 'https://chat-demo-4fz7.onrender.com'

const apiInstance = axios.create({
	baseURL: `${apiBaseUrl}`,
})

export { apiInstance, apiBaseUrl }
