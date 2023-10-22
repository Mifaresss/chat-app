import s from './Button.module.css'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

export function Button({ title, className, ...props }: Props) {
	return (
		<button {...props} className={[s.button, className].join(' ')}>
			{title}
		</button>
	)
}
