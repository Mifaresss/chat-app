import s from './LoginButton.module.css'
import { ButtonHTMLAttributes } from 'react'

interface LoginButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
}

export function LoginButton({ label, className, ...props }: LoginButtonPropsType) {
	return (
		<button className={[s.loginButton, className].join(' ')} {...props}>
			{label}
		</button>
	)
}
