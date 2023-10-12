import { ButtonHTMLAttributes } from 'react'
import s from './PassiveButton.module.css'

interface PassiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

export function PassiveButton({ title, className, ...props }: PassiveButtonProps) {
	return (
		<button {...props} className={[s.button, className].join(' ')}>
			{title}
		</button>
	)
}
