import axios from 'axios'

const baseUrl = 'https://our-chat-outh-back-production.up.railway.app/'
// process.env.NODE_ENV =
// ? 'https://our-chat-outh-back-production.up.railway.app/'
// : 'http://localhost:8000/';

const socketApi = axios.create({
	baseURL: `${baseUrl}`,
})

export { socketApi }
