'use client'
import s from './ChatPageTemplate.module.css'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { Message } from '@/modules/ChatRoom/ChatRoom'
import { Dispatch, useState } from 'react'

interface Props {
	text: string
	setText: Dispatch<string>
	messages: Message[]
	sendMessage: () => void
}

export function ChatPageTemplate({ text, setText, messages, sendMessage }: Props) {
	return (
		<div className={s.contentWrapper}>
			<div className={s.chatBody}>
				<MessagesBlock messages={messages} />
				<div className={s.sendBlockWrapper}>
					<ChatTextInput
						className={s.sendInput}
						value={text}
						onChange={({ target }) => {
							setText((target as HTMLTextAreaElement).value)
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
	)
}
