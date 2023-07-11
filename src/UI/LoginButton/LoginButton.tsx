import s from './LoginButton.module.css'

interface LoginButtonPropsType {
	children: string
}

export function LoginButton({ children }: LoginButtonPropsType) {

	return (
		<button className={s.loginButton}>
			{children}
		</button>
	)
}
