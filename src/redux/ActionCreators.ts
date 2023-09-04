import { API } from '../axios/index'
import { IAuth, IAuthResponse } from '../models/models'

import { authSlice } from '../redux/AuthSlice'

export const login = (data: IAuth) => {
	return async (dispatch: any) => {
		console.log('login')
		try {
			console.log('login')
			const response = await API.post<IAuthResponse>('auth/signup', data)
			console.log(response)
			dispatch(
				authSlice.actions.loginSuccess({
					username: response.data.data.username,
					isAuthenticated: response.data.data.isAuthenticated,
				}),
			)
		} catch (e) {
			console.log('Error Login', e)
		}
	}
}
