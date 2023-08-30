import { HTMLAttributes } from 'react'
import s from './ChatTextInput.module.css'

interface PropsType extends HTMLAttributes<HTMLTextAreaElement> {}

export function ChatTextInput({ ...props }: PropsType) {
	return (
		<textarea
			{...props}
			className={s.chatTextInput}
			placeholder='Напишіть Ваше повідомлення...'
		/>
	)
}
