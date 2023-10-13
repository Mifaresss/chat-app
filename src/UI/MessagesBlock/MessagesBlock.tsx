import s from './MessagesBlock.module.css'
import { useEffect, useRef } from 'react'
import { Loader } from '../Loader/Loader'
import { Message } from '../Message/Message'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { socket } from '@/api/socket'
import { addMessage } from '@/redux/slices/messagesSlice'

interface Props {}

export function MessagesBlock({}: Props) {
	const { messages, loading } = useAppSelector(state => state.messages)

	const dispatch = useAppDispatch()

	const messagesEndRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
		}
	}, [messages])

	useEffect(() => {
		socket?.on('receive-message', data => {
			if (data != null) {
				dispatch(addMessage(data))
			}
		})
	}, [dispatch])

	console.log('messages:', messages)

	return (
		<section className={s.messagesBlock}>
			<div className={s.messagesWrapper}>
				{loading ? (
					<div style={{ margin: 'auto' }}>
						<Loader />
					</div>
				) : messages.length ? (
					messages.map((message, index: number) => {
						const previousMessage = messages[index - 1]

						return (
							<Message
								key={index}
								index={index}
								previousMessage={previousMessage}
								message={message}
							/>
						)
					})
				) : (
					<div style={{ margin: 'auto' }}>
						<SubSubTitle label='Поки пусто:) Будь першим!' style={{ textAlign: 'center' }} />
					</div>
				)}
				<div ref={messagesEndRef}></div>
			</div>
		</section>
	)
}
