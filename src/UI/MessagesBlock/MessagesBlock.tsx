import { MessageList } from '@/components/MessageList/MessageList'
import s from './MessagesBlock.module.css'
import { testMessages } from './data'
import { useEffect, useState } from 'react'
import { socket } from '@/api/socket'
import { ConnectionState } from './components/ConnectionState'
import { Events } from './components/Events'
import { ConnectionManager } from './components/ConnectionManager'

interface Props {}

export function MessagesBlock({}: Props) {
	const [isConnected, setIsConnected] = useState(socket.connected)
	const [fooEvents, setFooEvents] = useState<any>([])

	useEffect(() => {
		function onConnect() {
			setIsConnected(true)
		}

		function onDisconnect() {
			setIsConnected(false)
		}

		function onFooEvent(value: any) {
			setFooEvents((previous: any) => [...previous, value])
		}

		socket.on('connect', onConnect)
		socket.on('disconnect', onDisconnect)
		socket.on('foo', onFooEvent)

		return () => {
			socket.off('connect', onConnect)
			socket.off('disconnect', onDisconnect)
			socket.off('foo', onFooEvent)
		}
	}, [])

	return (
		<section className={s.messagesBlock}>
			{/* <ConnectionState isConnected={isConnected} />
			<Events events={fooEvents} />
			<ConnectionManager /> */}
			<div className={s.messagesWrapper}>
				{testMessages.map((messageList, i) => (
					<MessageList key={i} {...messageList} />
				))}
			</div>
		</section>
	)
}
