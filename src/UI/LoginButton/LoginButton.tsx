import s from './LoginButton.module.css'
import { ButtonHTMLAttributes } from 'react'

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
}

export function LoginButton({ label, className, ...props }: LoginButtonProps) {
	return (
		<button className={[s.loginButton, className].join(' ')} {...props}>
			{label}
		</button>
	)
}
