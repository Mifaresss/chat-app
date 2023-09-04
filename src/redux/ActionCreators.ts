import axios from '../axios'
import { IAuth, IAuthResponse } from '../models/models'

export const register = (data: IAuth) => {
	return async (dispatch: any) => {
		try {
			const response = await axios.post<IAuthResponse>('auth/register', data)
			// dispatch(
			// 	authSlice.actions.loginSuccess({
			// 		access: response.data.access,
			// 		username: data.username,
			// 	}),
			// )
		} catch (e) {
			console.log('Error register', e)
		}
	}
}

export const login = (data: IAuth) => {
	return async (dispatch: any) => {
		try {
			const response = await axios.post<IAuthResponse>('auth/login', data)
			// dispatch(
			// 	authSlice.actions.loginSuccess({
			// 		access: response.data.access,
			// 		username: data.username,
			// 	}),
			// )
		} catch (e) {
			console.log('Error Login', e)
		}
	}
}
