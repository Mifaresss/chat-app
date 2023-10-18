import s from './ChatTextInput.module.css'
import { HTMLAttributes } from 'react'

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
