import s from './LoginButton.module.css'
import { ButtonHTMLAttributes } from 'react'

interface LoginButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
}

export function LoginButton({ label, ...props }: LoginButtonPropsType) {

	return (
		<button className={s.loginButton} {...props}>
			{label}
		</button>
	)
}
