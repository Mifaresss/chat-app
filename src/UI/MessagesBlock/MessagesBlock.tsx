import s from './MessagesBlock.module.css'
import { useEffect, useRef } from 'react'
import { Loader } from '../Loader/Loader'
import { Message } from '../Message/Message'
import { useAppSelector } from '@/hooks/redux'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { SvgIcon } from '../SvgIcon/SvgIcon'

interface Props {}

export function MessagesBlock({}: Props) {
	const { isWriting, userName } = useAppSelector(state => state.isWriting)
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
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: 0,
						top: 0,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<SubSubTitle label='Поки пусто:)' style={{ textAlign: 'center' }} />
				</div>
			)}
			{isWriting && (
				<div className={s.writing}>
					<SvgIcon className={s.writingIcon} name='edit' src='icons/sprite.svg' />
					<SubSubTitle className={s.writingName} label={userName ?? '??'} />
					<span>щось пише...</span>
				</div>
			)}
			<div ref={messagesEndRef} style={{ marginTop: '1rem' }}></div>
		</section>
	)
}
