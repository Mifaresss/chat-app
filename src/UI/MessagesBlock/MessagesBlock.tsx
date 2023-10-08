import s from './MessagesBlock.module.css'
import { useEffect, useRef } from 'react'
import { Loader } from '../Loader/Loader'
import { Message } from '../Message/Message'
import { useAppSelector } from '@/hooks/redux'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'

interface Props {}

export function MessagesBlock({}: Props) {
	const { messages, loading } = useAppSelector(state => state.messages)

	const scroll = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (scroll.current) {
			scroll.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages])

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
			</div>
		</section>
	)
}
