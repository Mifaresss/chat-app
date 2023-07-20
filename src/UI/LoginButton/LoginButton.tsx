import s from './LoginButton.module.css'

interface LoginButtonPropsType {
	children: string,
	setIsPopUpFalse: () => void
}

export function LoginButton({ children }: LoginButtonPropsType) {

	return (
		<button className={s.loginButton}>
			{children}
		</button>
	)
}
