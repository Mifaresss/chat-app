export interface IAuth {
	userName: string
}

export interface IAuthResponse {
	status: string
	code: number
	data: {
		userName: string
	}
}
