'use client'
import s from './PrivateChats.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from './components/NotAuthorized/NotAuthorized'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { useEffect, useRef, useState } from 'react'
import { setPrivateChats, fetchPrivateChats } from '@/redux/slices/privateChatsSlice'
import { Loader } from '@/UI/Loader/Loader'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { LeaveChatPopup } from '@/components/LeaveChatPopup/LeaveChatPopup'
import { Button } from '@/UI/Button/Button'
import { apiBaseUrl } from '@/api/base'
import { Socket, io } from 'socket.io-client'

const privateChatUrl = apiBaseUrl + 'private-chat'
let privateSocket: Socket
const connectSocket = ({ user_id }: { user_id: string }): void => {
	privateSocket = io(privateChatUrl, {
		query: {
			user_id,
		},
	})
}

export function PrivateChats() {
	const userId = useAppSelector(state => state.user.userId)
	const { chats, loading, error } = useAppSelector(state => state.privateChats)
	const path = usePathname()

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchPrivateChats(userId))
	}, [dispatch, userId])

	const [chatIdToExit, setChatIdToExit] = useState<string | null>(null)
	const dialogRef = useRef<HTMLDialogElement | null>(null)
	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	async function addNewPrivateChat() {
		await connectSocket({ user_id: userId })
		privateSocket?.on('history', data => {
			if (data.chats) {
				dispatch(setPrivateChats(data.chats))
			}
		})
	}

	return (
		<div className={s.privateChatPage} style={userId ? { backgroundColor: '#f4f6ff' } : {}}>
			<div className={s.privateChatContainer}>
				{userId ? (
					<>
						<section className={s.mainContent}>
							<div style={{ margin: 'auto' }}>
								<Button
									title='Створити новий чат'
									style={{ width: 'auto' }}
									onClick={addNewPrivateChat}
								/>
							</div>
							<ul className={s.chatList}>
								{loading ? (
									<div style={{ margin: 'auto' }}>
										<Loader />
									</div>
								) : (
									error ||
									chats.map(({ id, title }) => (
										<li
											className={s.chatItem}
											key={id}
											// onClick={() => {
											// 	setChatIdToExit(id)
											// 	openPopupHandler()
											// }}
										>
											<Link className={s.chatLink} href={path + '/' + id}>
												<SvgIcon
													className={s.chatIcon}
													width={50}
													height={50}
													src='icons/sprite.svg'
													name='mail'
												/>
												<p className={s.chatName}>{title}</p>
											</Link>
										</li>
									))
								)}
							</ul>
						</section>
						<LeaveChatPopup ref={dialogRef} chatId={chatIdToExit} />
					</>
				) : (
					<div className={s.unauthorized}>
						<HeroSection infoBlock />
						<NotAuthorized />
					</div>
				)}
			</div>
		</div>
	)
}
