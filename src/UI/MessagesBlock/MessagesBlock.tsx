import s from './MessagesBlock.module.css'
import { useEffect, useRef } from 'react'
import { Loader } from '../Loader/Loader'
import { Message } from '../Message/Message'
import { useAppSelector } from '@/hooks/redux'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'

interface Props {}

export function MessagesBlock({}: Props) {
	const { messages, loading } = useAppSelector(state => state.messages)

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const messagesContainerRef = useRef<HTMLDivElement>(null)

	const isNearBottom = () => {
		const container = messagesContainerRef.current
		if (container) {
			return container.scrollTop + container.clientHeight + 200 >= container.scrollHeight
		}
		return false
	}

	useEffect(() => {
		if (messagesEndRef.current /* && isNearBottom() */) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
		}
	}, [messages])

	return (
		<section className={s.messagesBlock} ref={messagesContainerRef}>
			{loading ? (
				<div style={{ margin: 'auto' }}>
					<Loader />
				</div>
			) : messages.length ? (
				messages.map((message, index: number) => {
					const previousMessage = messages[index - 1]

					return <Message key={index} previousMessage={previousMessage} message={message} />
				})
			) : (
				<div style={{ margin: 'auto' }}>
					<SubSubTitle label='Поки пусто:) Будь першим!' style={{ textAlign: 'center' }} />
				</div>
			)}
			<div ref={messagesEndRef} style={{ marginTop: '1rem' }}></div>
		</section>
	)
}
