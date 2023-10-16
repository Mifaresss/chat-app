'use client'
import s from './PrivateChatRoom.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from '../PrivateChats/components/NotAuthorized/NotAuthorized'
import { ChatPageTemplatePrivates } from '@/components/ChatPageTemplatePrivates/ChatPageTemplatePrivates'
import { Socket, io } from 'socket.io-client'
import { apiBaseUrl } from '@/api/base'
import { setChatId } from '@/redux/slices/privatChatSlice.ts'
import { Message, addMessage, setMessages, setMessagesLoading } from '@/redux/slices/messagesSlice'

interface Props {
	chatId: string
}

const privateChatUrl = apiBaseUrl + 'private-chat'

export let privateSocket: Socket
export const connectSocket = ({ user_id, chat_id }: { user_id: string; chat_id: string }): void => {
	privateSocket = io(privateChatUrl, {
		query: {
			user_id,
			chat_id,
		},
	})
}

export function PrivateChatRoom({ chatId }: Props) {
	const userId = useAppSelector(state => state.user.userId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setChatId(chatId))
	}, [dispatch, chatId])

	useEffect(() => {
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

			connectSocket({ user_id: userId, chat_id: chatId })
			privateSocket?.on('history', (data: any) => {
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
			})
			privateSocket?.on('message', handleReceiveMessage)
		}

		return () => {
			privateSocket?.off('message', handleReceiveMessage)
			privateSocket?.disconnect()
		}
	}, [userId, chatId, dispatch])

	return (
		<div className={s.wrapper}>
			<div className={s.mainContainer}>
				{userId ? (
					<div className={s.contentWrapper}>
						<ChatPageTemplatePrivates chatId={chatId} />
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
