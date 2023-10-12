'use client'
import s from './ChatPageTemplate.module.css'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { socket } from '@/api/socket'
import { useAppSelector } from '@/hooks/redux'
import { Dispatch, KeyboardEvent, MouseEventHandler, useState } from 'react'

interface Props {
	roomId: string
}

export function ChatPageTemplate({ roomId }: Props) {
	const userId = useAppSelector(state => state.user.userId)

	const [text, setText] = useState('')

	function sendMessageHandler(e?: KeyboardEvent<HTMLTextAreaElement>) {
		const isKeyEnter = e?.key === 'Enter'

		if (!text.trim().length) {
			isKeyEnter && setText('')
			return
		}

		const message = { text, senderId: userId, chatId: roomId }

		if (isKeyEnter && !e.shiftKey) {
			setText('')
			socket?.emit('send-message', message)
		} else if (!e) {
			setText('')
			socket?.emit('send-message', message)
		}
	}

	return (
		<div className={s.contentWrapper}>
			<div className={s.chatBody}>
				<MessagesBlock />
				<div className={s.sendBlockWrapper}>
					<ChatTextInput
						className={s.sendInput}
						value={text}
						onChange={({ target }) => {
							setText((target as HTMLTextAreaElement).value)
						}}
						onKeyDown={sendMessageHandler}
					/>
					<div className={s.sendButtonsWrapper}>
						<SvgIcon
							className={s.button}
							src='icons/sprite.svg'
							name='send'
							onClick={() => {
								sendMessageHandler()
							}}
						/>
						{/* <SvgIcon className={s.button} src='icons/sprite.svg' name='smile' /> */}
					</div>
				</div>
			</div>
		</div>
	)
}
