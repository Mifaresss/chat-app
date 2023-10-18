'use client'
import s from './Aside.module.css'
import { Loader } from '../Loader/Loader'
import { ChatName } from './components/ChatName/ChatName'
import { InitialState } from '@/redux/slices/roomsSlice'
interface Props {
	rooms: InitialState.Room[]
}

export function Aside({ rooms }: Props) {
	return (
		<aside className={s.aside}>
			{rooms.length ? (
				rooms.map(room => (
					<ChatName
						key={room.id}
						className={s.chatName}
						chatName={room.title}
						chatId={room.id}
					/>
				))
			) : (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
					}}
				>
					<Loader />
				</div>
			)}
		</aside>
	)
}
