import { HTMLAttributes } from 'react'
import s from './ChatTextInput.module.css'

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	value: string
}

export function ChatTextInput({ value, ...props }: Props) {
	return (
		<textarea
			{...props}
			className={s.chatTextInput}
			placeholder='Напишіть Ваше повідомлення...'
			value={value}
		/>
	)
}
