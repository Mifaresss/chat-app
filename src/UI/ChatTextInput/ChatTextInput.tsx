import { HTMLAttributes } from 'react'
import s from './ChatTextInput.module.css'

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	value: string
}

export function ChatTextInput({ value, onKeyDown, ...props }: Props) {
	return (
		<textarea
			{...props}
			className={s.chatTextInput}
			placeholder='Напишіть Ваше повідомлення...'
			value={value}
			onKeyDown={e => {
				// e?.key === 'Enter' && !e.shiftKey && e.preventDefault()
				onKeyDown && onKeyDown(e)
			}}
		/>
	)
}
