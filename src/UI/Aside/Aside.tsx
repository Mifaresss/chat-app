import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { BurgerButton } from '../BurgerButton/BurgerButton'
import { Loader } from '../Loader/Loader'
import s from './Aside.module.css'
import { ChatName } from './components/ChatName/ChatName'
import { InitialState } from '@/redux/slices/roomsSlice'
import { toggleChatSideBar } from '@/redux/slices/toggleChatSideBarSlice'

interface Props {
	rooms: InitialState.Room[]
}

export function Aside({ rooms }: Props) {
	const isOpen = useAppSelector(state => state.toggleChatSideBar.isOpen)

	const dispatch = useAppDispatch()

	return (
		<aside className={[s.aside, isOpen ? s.open : ''].join(' ')}>
			<div className={s.burgerButtonWrapper}>
				<BurgerButton
					className={s.burgerButton}
					isOpen={isOpen}
					style={{ zIndex: 5 }}
					onClick={() => {
						dispatch(toggleChatSideBar(!isOpen))
					}}
				/>
			</div>
			{rooms.length ? (
				rooms.map(room => (
					<ChatName
						key={room.id}
						className={[s.chatName, isOpen ? s.open : ''].join('')}
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
