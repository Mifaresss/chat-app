import React, { useEffect, HTMLAttributes, ChangeEvent, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useAppSelector } from '@/hooks/redux'
import s from './ChatTextInput.module.css'
import { debounce } from 'lodash'

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	value: string
	socket: Socket | null
}

export function ChatTextInput({ value, socket, onChange, ...props }: Props) {
	const userName = useAppSelector(state => state.user.userName)
	const chatId = useAppSelector(state => state.privateChat.id)

	// const [isTyping, setIsTyping] = useState(false)
	// let isTyping = false

	const handleTyping = debounce(() => {
		console.log('stop')
		// isTyping = false
		socket?.emit('user-start-write', { room: chatId, userName })
	}, 1000)

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e)
		// if (!isTyping) {
		// 	console.log('start')
		// 	isTyping = true
		// }
		console.log('start')
		handleTyping()
	}

	useEffect(() => {
		return () => {
			handleTyping.cancel()
			socket?.disconnect()
		}
	}, [handleTyping, props, onChange, socket])

	return (
		<textarea
			{...props}
			className={s.chatTextInput}
			placeholder='Напишіть Ваше повідомлення...'
			value={value}
			onChange={handleChange}
		/>
	)
}
