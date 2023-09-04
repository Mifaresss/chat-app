import axios from '../axios'
import { IAuth, IAuthResponse } from '../models/models'

export const login = (data: IAuth) => {
	return async (dispatch: any) => {
		try {
			const response = await axios.post<IAuthResponse>('auth/signup', data)
			console.log(response.data)
		} catch (e) {
			console.log('Error Login', e)
		}
	}
}
