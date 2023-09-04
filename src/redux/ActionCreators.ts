import { API } from '../axios/index'
import { IAuth, IAuthResponse } from '../models/models'

export const login = (data: IAuth) => {
	return async (dispatch: any) => {
		console.log('login')
		try {
			console.log('login')
			const response = await API.post<IAuthResponse>('auth/signup', data)
			console.log(response.data)
		} catch (e) {
			console.log('Error Login', e)
		}
	}
}
