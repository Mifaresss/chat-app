'use client'
import s from './ChatRoom.module.css'
import { ChatPageTemplate } from '@/components/ChatPageTemplate/ChatPageTemplate'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
// import { connectSocket, socket } from '@/api/socket'
import { Aside } from '@/UI/Aside/Aside'
import { fetchRooms } from '@/redux/slices/roomsSlice'
import { addMessage, setMessagesLoading, setMessages, Message } from '@/redux/slices/messagesSlice'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from '../PrivateChats/components/NotAuthorized/NotAuthorized'
import { socket } from '@/api/socket'

interface Props {
	id: string
}

export function ChatRoom({ id }: Props) {
	const rooms = useAppSelector(state => state.rooms.rooms)
	const userId = useAppSelector(state => state.user.userId)

	const dispatch = useAppDispatch()
	useEffect(() => {
		if (rooms.length === 0) {
			dispatch(fetchRooms())
		}
	}, [dispatch, rooms.length])

	useEffect(() => {
		const handleReceiveMessage = (message: Message) => {
			dispatch(addMessage(message))
		}

		if (userId) {
			dispatch(setMessagesLoading(true))
			// connectSocket(userId)
			socket.connect()
			socket.emit('new-user-add', userId)
			socket.emit('get-curent-chatRoom', id, userId)
			socket.on('get-chatRoom', chatRoom => {
				dispatch(setMessages(chatRoom.messages))
				dispatch(setMessagesLoading(false))
			})
			socket.on('receive-message', handleReceiveMessage)
		}

		return () => {
			socket?.off('get-curent-chatRoom')
			socket?.off('get-chatRoom')
			socket?.off('new-user-add')
			socket?.off('receive-message', handleReceiveMessage)
			socket?.disconnect()
		}
	}, [userId, id, dispatch])

	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				{userId ? (
					<div className={s.contentWrapper}>
						<Aside rooms={rooms} />
						<ChatPageTemplate roomId={id} />
					</div>
				) : (
					<>
						<HeroSection infoBlock />
						<NotAuthorized />
					</>
				)}
			</div>
		</div>
	)
}
