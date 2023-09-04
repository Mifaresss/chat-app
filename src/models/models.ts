export interface IAuth {
  password: string
  username: string
}

export interface IAuthResponse {
  access: string
  refresh: string
}