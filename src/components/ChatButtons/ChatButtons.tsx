import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import s from './ChatButtons.module.css'
import { useRef } from 'react'
import { ExitChatPopup } from '../ExitChatPopup/ExitChatPopup'
import { useAppSelector } from '@/hooks/redux'
const baseAppUrl = 'https://our-chat-app-two.vercel.app/'

interface Props {
	chatId?: string
}

export function ChatButtons({ chatId }: Props) {
	const internalChatId = useAppSelector(state => state.privateChat.id)
	console.log({ internalChatId, chatId })

	function handleCopyClick() {
		const textToCopy = baseAppUrl + 'private-chats/' + (chatId ?? internalChatId)
		navigator.clipboard.writeText(textToCopy).then(() => {
			alert('Посилання на чат вже у буфері обміну')
		})
	}

	const dialogRef = useRef<HTMLDialogElement>(null)
	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<div className={s.wrapperButtons}>
			<SvgIcon
				className={[s.button, s.shareButton].join(' ')}
				src='icons/sprite.svg'
				name='share'
				onClick={handleCopyClick}
			/>
			<SvgIcon
				className={[s.button, s.exitButton].join(' ')}
				src='icons/sprite.svg'
				name='exit'
				onClick={openPopupHandler}
			/>
			<ExitChatPopup ref={dialogRef} chatId={chatId ?? internalChatId} />
		</div>
	)
}
