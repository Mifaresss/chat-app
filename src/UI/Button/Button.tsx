import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.css'

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

export function Button({ title, className, ...props }: ButtonPropsType) {

	return (
		<button {...props} className={[s.button, className].join(' ')}>
			{title}
		</button>
	)
}
