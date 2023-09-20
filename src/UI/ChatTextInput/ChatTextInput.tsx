import { HTMLAttributes } from 'react'
import s from './ChatTextInput.module.css'

interface PropsType extends HTMLAttributes<HTMLTextAreaElement> {
	value: string
}

export function ChatTextInput({ value, ...props }: PropsType) {
	return (
		<textarea
			{...props}
			className={s.chatTextInput}
			placeholder='Напишіть Ваше повідомлення...'
			value={value}
		/>
	)
}
