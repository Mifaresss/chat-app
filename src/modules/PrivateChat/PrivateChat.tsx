'use client'
import s from './PrivateChat.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from './components/NotAuthorized/NotAuthorized'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { BeforeChatBody } from './components/BeforeChatBody/BeforeChatBody'
import { useAppSelector } from '@/hooks/redux'
import { useState } from 'react'

export function PrivateChat() {
	const userId = useAppSelector(state => state.user.userId)

	const [message, setMessage] = useState('')

	function sendMessage() {
		// socket.emit('message', {
		// 	message,
		// 	from: userId,
		// })
	}

	return (
		<div className={s.privateChatPage} style={userId ? { backgroundColor: '#f4f6ff' } : {}}>
			<div className={s.privateChatContainer}>
				{userId ? (
					<div className={s.contentWrapper}>
						<BeforeChatBody />
						<div className={s.chatBody}>
							<MessagesBlock />
							<div className={s.sendBlockWrapper}>
								<ChatTextInput
									className={s.sendInput}
									value={message}
									onChange={({ target }) => {
										setMessage((target as HTMLTextAreaElement).value)
									}}
								/>
								<div className={s.sendButtonsWrapper}>
									<SvgIcon
										className={s.button}
										src='icons/sprite.svg'
										name='send'
										onClick={sendMessage}
									/>
									<SvgIcon className={s.button} src='icons/sprite.svg' name='smile' />
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<HeroSection infoBlock />
						<NotAuthorized />
					</>
				)}
			</div>
		</div>
	)
}
