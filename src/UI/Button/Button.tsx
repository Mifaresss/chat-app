import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

export function Button({ title, className, ...props }: ButtonProps) {
	return (
		<button {...props} className={[s.button, className].join(' ')}>
			{title}
		</button>
	)
}
