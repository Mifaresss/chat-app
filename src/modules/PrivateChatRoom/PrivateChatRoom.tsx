'use client'
import s from './PrivateChatRoom.module.css'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from '../PrivateChats/components/NotAuthorized/NotAuthorized'
import { ChatPageTemplatePrivates } from '@/components/ChatPageTemplatePrivates/ChatPageTemplatePrivates'
import { Socket, io } from 'socket.io-client'
import { apiBaseUrl } from '@/api/base'
import { setChatData } from '@/redux/slices/privatChatSlice.ts'
import { Message, addMessage, setMessages, setMessagesLoading } from '@/redux/slices/messagesSlice'
import { useRouter } from 'next/navigation'
import { Loader } from '@/UI/Loader/Loader'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { setIsWritingData } from '@/redux/slices/isWritingSlice'

interface Props {
	chatId: string
}

const privateChatUrl = apiBaseUrl + 'private-chat'

export const getSocket = ({ userId, chatId }: { userId: string; chatId: string }) => {
	const socket = io(privateChatUrl, {
		query: {
			userId,
			chatId,
		},
	})

	return socket
}

export let privateSocket: null | Socket = null

export function PrivateChatRoom({ chatId }: Props) {
	const [isValidId, setIsValidId] = useState(false)
	const [isDeletedChat, setIsDeletedChat] = useState(false)

	const userId = useAppSelector(state => state.user.userId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setChatData({ id: chatId }))
	}, [chatId, dispatch])

	const router = useRouter()

	useEffect(() => {
		const handleReceiveError = (errorCode: number) => {
			switch (errorCode) {
				case 1:
					setIsDeletedChat(true)

				case 2:
					router.push('/404')
					return null

				case 3:
					privateSocket = io(privateChatUrl, {
						query: {
							userId,
							chatId,
						},
					})
			}
		}
		const handleReceiveHistory = (data: any) => {
			setIsValidId(true)
			const newMessages: Message[] = data.messages.map(
				(message: { chatId: any; message: any; author: any; createdAt: any }) => ({
					chatId: message.chatId,
					text: message.message,
					user: message.author,
					createdAt: message.createdAt,
				}),
			)
			dispatch(setMessages(newMessages))
			dispatch(setMessagesLoading(false))
			dispatch(setChatData({ id: data.chat.id, title: data.chat?.title }))
		}
		const handleStartWrite = (data: { userName: string }) => {
			dispatch(setIsWritingData({ isWriting: true, userName: data.userName }))
		}
		const handleEndWrite = () => {
			dispatch(setIsWritingData({ isWriting: false, userName: null }))
		}
		const handleReceiveMessage = (message: any) => {
			const newMessage: Message = {
				chatId: message.chatId,
				createdAt: message.createdAt,
				text: message.message,
				user: message.author,
			}
			dispatch(addMessage(newMessage))
		}

		if (userId) {
			dispatch(setMessagesLoading(true))
			privateSocket = getSocket({ userId, chatId })

			privateSocket.on('error', handleReceiveError)
			privateSocket.on('history', handleReceiveHistory)
			privateSocket.on('user-start-write', handleStartWrite)
			privateSocket.on('user-end-write', handleEndWrite)
			privateSocket.on('message', handleReceiveMessage)
		}

		return () => {
			dispatch(setIsWritingData({ isWriting: false, userName: null }))
			privateSocket?.off('error', handleReceiveError)
			privateSocket?.off('history', handleReceiveHistory)
			privateSocket?.off('user-start-write', handleStartWrite)
			privateSocket?.off('user-end-write', handleEndWrite)
			privateSocket?.off('message', handleReceiveMessage)
			privateSocket?.disconnect()
		}
		// ↓↓↓ fix bug with roomId === undefined on backend ↓↓↓
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId, chatId, dispatch, router, privateSocket])

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

	if (isDeletedChat) {
		return (
			<div style={{ margin: 'auto', backgroundColor: 'var(--background-c)' }}>
				<SubTitle title='Цей чат було видалено(' align='center' />
			</div>
		)
	}

	return isValidId ? (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				<div className={s.contentWrapper}>
					<ChatPageTemplatePrivates />
				</div>
			</div>
		</div>
	) : (
		<div style={{ margin: 'auto' }}>
			<Loader />
		</div>
	)
}
