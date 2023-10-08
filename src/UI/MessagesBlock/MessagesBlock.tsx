import s from './MessagesBlock.module.css'
import { useEffect, useRef } from 'react'
import { useAppSelector } from '@/hooks/redux'
import { Loader } from '../Loader/Loader'
import { Message } from '../Message/Message'
import { Message as MessageType } from '@/modules/ChatRoom/ChatRoom'

interface Props {
	messages: MessageType[]
}

export function MessagesBlock({ messages }: Props) {
	const scroll = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (scroll.current) {
			scroll.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages])

	return (
		<section className={s.messagesBlock}>
			<div className={s.messagesWrapper}>
				{messages?.length ? (
					messages?.map((message: MessageType, index: number) => {
						const previousMessage = messages[index - 1]
						const sameAuthor = previousMessage?.senderId === message.senderId

						return (
							<Message key={index} index={index} sameAuthor={sameAuthor} message={message} />
						)
					})
				) : (
					<div style={{ margin: 'auto' }}>
						<Loader />
					</div>
				)}
			</div>
		</section>
	)
}
