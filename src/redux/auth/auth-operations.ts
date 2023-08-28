import { API } from '../../API'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify'

// interface RegistrationCredentials {
//   userName: string;
// }

const registerUser = createAsyncThunk(
	'auth/signup',
	async (credentials, { rejectWithValue }) => {
		console.log(credentials)
		try {
			const response = await API.post('auth/signup', credentials)
			const data = response.data
			console.log(data)
			return data
		} catch (error: any) {
			 return rejectWithValue(error.response ? error.response.data : 'Під час виконання сталася помилка')
		}
	}
)

export { registerUser }
