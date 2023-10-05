import s from './MessageText.module.css'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	text: string
	date: string
	isAuthor: boolean
	className?: string
}

export function MessageText({ text, date, isAuthor, className, ...props }: Props) {
	const style = isAuthor ? { borderRadius: '0.625rem 0.625rem 0 0.625rem' } : {}

	return (
		<p className={[s.message, className].join(' ')} style={style} {...props}>
			{text}
			<span className={s.messageDate}>{date}</span>
		</p>
	)
}
