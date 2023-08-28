import axios from 'axios'

const baseUrl = 'https://our-chat-outh-back-production.up.railway.app/'
// process.env.NODE_ENV =
// ? 'https://our-chat-outh-back-production.up.railway.app'
// : 'http://localhost:8000/';

const API = axios.create({
	baseURL: `${baseUrl}`,
})

const authToken = {
	set(token) {
		API.defaults.headers.common.Authorization = `Bearer ${token}`
	},

	unset() {
		API.defaults.headers.common.Authorization = ''
	},
}

API.interceptors.response.use(
	response => response,
	async error => {
		if (error.response.status === 401) {
			try {
				console.log('interceptors.response')
			} catch (error) {
				return Promise.reject(error)
			}
		}
		return Promise.reject(error)
	}
)
export { API, authToken }
