'use client'
import s from './ChatPageTemplate.module.css'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { socket } from '@/api/socket'
import { useAppSelector } from '@/hooks/redux'
import { KeyboardEvent, useState } from 'react'

interface Props {
	roomId: string
}

export function ChatPageTemplate({ roomId }: Props) {
	const userId = useAppSelector(state => state.user.userId)

	const [text, setText] = useState('')

	function sendMessageOnKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
		const isKeyEnter = e.key === 'Enter'
		const isMessageExist = !!text.trim().length

		if (isKeyEnter) e.preventDefault()

		if (isMessageExist && isKeyEnter) {
			sendMessage()
		} else if (!isMessageExist && isKeyEnter) {
			setText('')
		}
	}

	function sendMessageOnClick() {
		if (text.trim().length) {
			sendMessage()
		} else {
			setText('')
		}
	}

	function sendMessage() {
		const message = { text, senderId: userId, chatId: roomId }
		setText('')
		socket?.emit('send-message', message)
	}

	return (
		<div className={s.chatBody}>
			<MessagesBlock />
			<div className={s.sendBlockWrapper}>
				<ChatTextInput
					className={s.sendInput}
					value={text}
					onChange={({ target }) => {
						setText((target as HTMLTextAreaElement).value)
					}}
					onKeyDown={sendMessageOnKeyDown}
				/>
				<div className={s.sendButtonsWrapper}>
					<SvgIcon
						className={s.button}
						src='icons/sprite.svg'
						name='send'
						onClick={sendMessageOnClick}
					/>
					{/* <SvgIcon className={s.button} src='icons/sprite.svg' name='smile' /> */}
				</div>
			</div>
		</div>
	)
}
