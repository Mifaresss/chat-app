import s from './LoginButton.module.css'

interface LoginButtonPropsType {
	children: string,
	className?: string
}

export function LoginButton({ children, className }: LoginButtonPropsType) {

	return (
		<button
			className={[s.loginButton, className].join(' ')}>
			{children}
		</button>
	)
}
