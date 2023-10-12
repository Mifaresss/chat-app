'use client'
import s from './Aside.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { BurgerButton } from '../BurgerButton/BurgerButton'
import { Loader } from '../Loader/Loader'
import { ChatName } from './components/ChatName/ChatName'
import { InitialState } from '@/redux/slices/roomsSlice'
import { toggleChatSideBar } from '@/redux/slices/toggleChatSideBarSlice'
import { useEffect, useRef } from 'react'

interface Props {
	rooms: InitialState.Room[]
}

export function Aside({ rooms }: Props) {
	const isOpen = useAppSelector(state => state.toggleChatSideBar.isOpen)

	const dispatch = useAppDispatch()

	const asideRef = useRef<HTMLElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
				dispatch(toggleChatSideBar(false))
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [dispatch])

	return (
		<aside ref={asideRef} className={[s.aside, isOpen ? s.open : ''].join(' ')}>
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
						onClick={() => {
							dispatch(toggleChatSideBar(false))
						}}
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
