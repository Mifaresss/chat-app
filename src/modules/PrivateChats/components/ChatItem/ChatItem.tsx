import { ChatButtons } from '@/components/ChatButtons/ChatButtons'
import s from './ChatItem.module.css'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import Link from 'next/link'

interface Props {
	id: string
	title: string
}

export function ChatItem({ id, title }: Props) {
	return (
		<li className={s.chatItem}>
			<Link className={s.chatLink} href={'/private-chats/' + id}>
				<SvgIcon className={s.chatIcon} src='icons/sprite.svg' name='mail' />
				<p className={s.chatName}>{title}</p>
			</Link>
			<ChatButtons className={s.chatButtons} chatId={id} />
		</li>
	)
}
