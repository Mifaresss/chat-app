'use client'
import s from './ChatRoom.module.css'
import { ChatPageTemplate } from '@/components/ChatPageTemplate/ChatPageTemplate'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { Aside } from '@/UI/Aside/Aside'
import { fetchRooms } from '@/redux/slices/roomsSlice'
import { addMessage, setMessagesLoading, setMessages, Message } from '@/redux/slices/messagesSlice'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from '../PrivateChats/components/NotAuthorized/NotAuthorized'
import { apiBaseUrl } from '@/api/base'
import { Socket, io } from 'socket.io-client'
import { useRouter } from 'next/navigation'
import { setIsWritingData } from '@/redux/slices/isWritingSlice'
const roomsUrl = apiBaseUrl + 'rooms'

interface Props {
	roomId: string
}

export let roomsSocket: null | Socket = null

export const getSocket = ({ userId, roomId }: { userId: string; roomId: string }) => {
	console.log({ userId, roomId })
	const socket = io(roomsUrl, {
		query: {
			userId,
			roomId,
		},
	})

	return socket
}

export function ChatRoom({ roomId }: Props) {
	const rooms = useAppSelector(state => state.rooms.rooms)
	const userId = useAppSelector(state => state.user.userId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (rooms.length === 0) {
			dispatch(fetchRooms())
		}
	}, [dispatch, rooms.length])

	const router = useRouter()

	useEffect(() => {
		const handleReceiveError = (errorCode: number) => {
			switch (errorCode) {
				case 0:
				case 1:
				case 2:
					router.push('/404')
					return null

				case 3:
					roomsSocket = io(roomsUrl, {
						query: {
							userId,
							roomId,
						},
					})
			}
		}
		const handleReceiveHistory = (data: any) => {
			const newMessages: Message[] = data.messages.map(
				(message: { chatId: any; text: any; user: any; createdAt: any }) => ({
					chatId: message.chatId,
					text: message.text,
					user: message.user,
					createdAt: message.createdAt,
				}),
			)
			dispatch(setMessages(newMessages))
			dispatch(setMessagesLoading(false))
		}
		const handleStartWrite = (data: { userName: string }) => {
			dispatch(setIsWritingData({ isWriting: true, userName: data.userName }))
		}
		const handleEndWrite = () => {
			dispatch(setIsWritingData({ isWriting: false, userName: null }))
		}
		const handleReceiveMessage = (message: Message) => {
			dispatch(addMessage(message))
		}

		if (userId) {
			dispatch(setMessagesLoading(true))
			roomsSocket = getSocket({ userId, roomId })

			roomsSocket.on('error', handleReceiveError)
			roomsSocket.on('history', handleReceiveHistory)
			roomsSocket.on('user-start-write', handleStartWrite)
			roomsSocket.on('user-end-write', handleEndWrite)
			roomsSocket.on('message', handleReceiveMessage)
		}

		return () => {
			roomsSocket?.off('error', handleReceiveError)
			roomsSocket?.off('history', handleReceiveHistory)
			roomsSocket?.off('user-start-write', handleStartWrite)
			roomsSocket?.off('user-end-write', handleEndWrite)
			roomsSocket?.off('message', handleReceiveMessage)
			roomsSocket?.disconnect()
		}
		// ↓↓↓ fix bug with roomId === undefined on backend ↓↓↓
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId, roomId, dispatch, router, roomsSocket])

	if (!userId) {
		return (
			<div className={s.wrapper}>
				<div className={s.mainContainer}>
					<HeroSection infoBlock />
					<NotAuthorized />
				</div>
			</div>
		)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				<div className={s.contentWrapper}>
					<Aside rooms={rooms} />
					<ChatPageTemplate roomId={roomId} />
				</div>
			</div>
		</div>
	)
	// return isValidId ? (
	// ) : (
	// <div style={{ margin: 'auto' }}>
	// 	<Loader />
	// </div>
	// )
}
