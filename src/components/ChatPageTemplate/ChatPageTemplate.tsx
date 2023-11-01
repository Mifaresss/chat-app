'use client'
import s from './ChatPageTemplate.module.css'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { useAppSelector } from '@/hooks/redux'
import { roomsSocket } from '@/modules/ChatRoom/ChatRoom'
import { debounce } from 'lodash'
import { KeyboardEvent, useCallback, useState } from 'react'

interface Props {
	roomId: string
}

export function ChatPageTemplate({ roomId }: Props) {
	const userId = useAppSelector(state => state.user.userId)
	const userName = useAppSelector(state => state.user.userName)

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
		setIsTyping(false)
		roomsSocket?.emit('user-end-write', { chatId: roomId, userName })
		const message = { text, senderId: userId, chatId: roomId }
		setText('')
		roomsSocket?.emit('message', message)
	}

	const [isTyping, setIsTyping] = useState(false)

	const handleChange = () => {
		if (!isTyping) {
			roomsSocket?.emit('user-start-write', { chatId: roomId, userName })
			setIsTyping(true)
		}
		handleTyping()
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleTyping = useCallback(
		debounce(() => {
			setIsTyping(false)
			roomsSocket?.emit('user-end-write', { chatId: roomId, userName })
		}, 1000),
		[],
	)

	return (
		<div className={s.chatBody}>
			<MessagesBlock />
			<div className={s.sendBlockWrapper}>
				<ChatTextInput
					className={s.sendInput}
					value={text}
					onChange={({ target }) => {
						handleChange()
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
				</div>
			</div>
		</div>
	)
}
