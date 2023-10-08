'use client'
import s from './ChatRoom.module.css'
import { ChatPageTemplate } from '@/components/ChatPageTemplate/ChatPageTemplate'
import { Title } from '@/UI/Title/Title'
import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/hooks/redux'
import { connectSocket, socket } from '@/api/socket'
import { EmojiNumber } from '@/types/emojies'

interface Props {
	id: string
}
export type Message = {
	text: string
	senderId: string
	chatId: string
	userName: string
	userMood: EmojiNumber
	createdAt: Date
}

export function ChatRoom({ id }: Props) {
	const { userId, userName, userMood } = useAppSelector(state => state.user)
	const [text, setText] = useState('')
	const [messages, setMessages] = useState<Message[]>([])

	useEffect(() => {
		connectSocket(userId)
		socket.emit('new-user-add', userId)
		socket.emit('get-curent-chatRoom', id, userId)
		socket.on('get-chatRoom', chatRoom => {
			setMessages(chatRoom?.messages)
		})
		return () => {
			socket.disconnect()
			socket.off('get-curent-chatRoom')
			socket.off('get-chatRoom')
			socket.off('new-user-add')
		}
	}, [userId, id])

	function sendMessageHandler() {
		const message = {
			text,
			senderId: userId,
			chatId: id,
			userName,
			userMood,
		}
		if (message.text !== '') {
			setText('')
			socket.emit('send-message', message)
		}
	}

	useEffect(() => {
		socket.on('receive-message', data => {
			console.log('receive-message:', data)
			if (data !== null) {
				setMessages(prevMessages => {
					if (!prevMessages) return data
					return [...prevMessages, data]
				})
			}
		})
	}, [])

	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				<div className={s.contentWrapper}>
					<aside className={s.aside}>
						<Title title={id} />
					</aside>
					<ChatPageTemplate
						messages={messages}
						text={text}
						setText={setText}
						sendMessage={sendMessageHandler}
					/>
				</div>
			</div>
		</div>
	)
}
