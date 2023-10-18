'use client'
import s from './PrivateChats.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { useEffect, useRef, useState } from 'react'
import { addPrivateChat, fetchPrivateChats } from '@/redux/slices/privateChatsSlice'
import { Loader } from '@/UI/Loader/Loader'
import { Button } from '@/UI/Button/Button'
import { apiInstance } from '@/api/base'
import { NotAuthorized } from './components/NotAuthorized/NotAuthorized'
import { ChatItem } from './components/ChatItem/ChatItem'

export function PrivateChats() {
	const userId = useAppSelector(state => state.user.userId)
	const { chats, loading, error } = useAppSelector(state => state.privateChats)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchPrivateChats(userId))
	}, [dispatch, userId])

	async function addNewPrivateChat() {
		// setIsCreatingPrivateChat(true)
		const { data } = await apiInstance.post('privates/add', {
			userId,
		})
		// setIsCreatingPrivateChat(false)
		dispatch(addPrivateChat({ id: data.id, title: data.title }))
	}

	const isChatsExist = !!chats.length

	return (
		<div className={s.privateChatPage} style={userId ? { backgroundColor: '#f4f6ff' } : {}}>
			<div className={s.privateChatContainer}>
				{userId ? (
					<section className={s.mainContent}>
						{isChatsExist && (
							<div style={{ margin: 'auto' }}>
								<Button
									title='Створити новий чат'
									style={{ width: 'auto' }}
									onClick={addNewPrivateChat}
								/>
							</div>
						)}
						<ul className={s.chatList}>
							{loading ? (
								<div style={{ margin: 'auto' }}>
									<Loader />
								</div>
							) : error || isChatsExist ? (
								chats.map(({ id, title }) => <ChatItem key={id} id={id} title={title} />)
							) : (
								<p className={s.noChats}>
									<span>
										У тебе поки що немає жодного чату. Створи свій або перейди за існуючим
										посиланням
									</span>
									<Button
										title='Створити новий чат'
										style={{ width: 'auto' }}
										onClick={addNewPrivateChat}
									/>
								</p>
							)}
						</ul>
					</section>
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
