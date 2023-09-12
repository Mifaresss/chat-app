export interface IAuth {
	userName: string
	userMood: string
}

export interface IAuthResponse {
	status: string
	code: number
	data: {
		username: string
		isAuthenticated: boolean
	}
}
