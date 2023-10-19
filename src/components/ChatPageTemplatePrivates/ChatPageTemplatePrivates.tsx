'use client'
import s from './ChatPageTemplatePrivates.module.css'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { useAppSelector } from '@/hooks/redux'
import { privateSocket } from '@/modules/PrivateChatRoom/PrivateChatRoom'
import { KeyboardEvent, useState } from 'react'
import { BeforeChatBody } from './components/BeforeChatBody/BeforeChatBody'

interface Props {}

export function ChatPageTemplatePrivates({}: Props) {
	const userId = useAppSelector(state => state.user.userId)
	const chatId = useAppSelector(state => state.privateChat.id)

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
		const message = { message: text, userId, room: chatId }
		setText('')
		privateSocket?.emit('message', message)
	}

	return (
		<div className={s.chatBody}>
			<BeforeChatBody />
			<MessagesBlock />
			<div className={s.sendBlockWrapper}>
				<ChatTextInput
					socket={privateSocket}
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
