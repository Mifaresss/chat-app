export interface IAuth {
	username: string
}

export interface IAuthResponse {
	status: string
	code: number
	data: {
		username: string
	}
}
