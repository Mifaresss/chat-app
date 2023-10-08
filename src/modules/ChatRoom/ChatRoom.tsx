'use client'
import s from './ChatRoom.module.css'
import { ChatPageTemplate } from '@/components/ChatPageTemplate/ChatPageTemplate'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { connectSocket, socket } from '@/api/socket'
import { Aside } from '@/UI/Aside/Aside'
import { fetchRooms } from '@/redux/slices/roomsSlice'
import { addMessage, setLoading, setMessages } from '@/redux/slices/messagesSlice'

interface Props {
	id: string
}

export function ChatRoom({ id }: Props) {
	const rooms = useAppSelector(state => state.rooms.rooms)
	const { userId, userName, userMood } = useAppSelector(state => state.user)

	const dispatch = useAppDispatch()
	useEffect(() => {
		if (rooms.length === 0) {
			dispatch(fetchRooms())
		}
	}, [dispatch, rooms.length])

	const [text, setText] = useState('')

	useEffect(() => {
		dispatch(setLoading(true))
		connectSocket(userId)
		socket.emit('new-user-add', userId)
		socket.emit('get-curent-chatRoom', id, userId)
		socket.on('get-chatRoom', chatRoom => {
			dispatch(setMessages(chatRoom.messages))
			dispatch(setLoading(false))
		})
		return () => {
			socket.disconnect()
			socket.off('get-curent-chatRoom')
			socket.off('get-chatRoom')
			socket.off('new-user-add')
		}
	}, [userId, id, dispatch])

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
			if (data !== null) {
				dispatch(addMessage(data))
			}
		})
	}, [dispatch])

	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				<div className={s.contentWrapper}>
					<Aside rooms={rooms} />
					<ChatPageTemplate text={text} setText={setText} sendMessage={sendMessageHandler} />
				</div>
			</div>
		</div>
	)
}
