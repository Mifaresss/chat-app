import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import s from './BeforeChatBody.module.css'
import { ChatButtons } from '@/components/ChatButtons/ChatButtons'
import { useAppSelector } from '@/hooks/redux'
import Link from 'next/link'

interface Props {}

export function BeforeChatBody({}: Props) {
	const chatName = useAppSelector(state => state.privateChat.title)

	return (
		<div className={s.beforeChatBody}>
			<div className={s.firstBlock}>
				<Link href='/private-chats' className={s.link}>
					<SvgIcon className={s.arrowLeft} src='icons/sprite.svg' name='arrow-right' />
				</Link>
				<p className={s.chatName}>{chatName}</p>
			</div>
			<ChatButtons className={s.chatButtons} />
		</div>
	)
}
