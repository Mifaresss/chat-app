import { MessageText } from '@/UI/MessageText/MessageText'
import s from './Message.module.css'
import { UserEmoji } from '@/UI/UserEmoji/UserEmoji'
import { UserName } from '@/UI/UserName/UserName'
import { Message } from '@/modules/ChatRoom/ChatRoom'
import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'

interface Props {
	message: Message
	sameAuthor: boolean
	index: number
}

export function Message({ message, sameAuthor, index }: Props) {
	const marginTop = sameAuthor ? { marginTop: '0.25rem' } : { marginTop: '1rem' }

	if (index === 0) {
		marginTop.marginTop = '0rem'
	}

	return (
		<div className={s.message} style={marginTop}>
			{!sameAuthor && (
				<div className={s.firstLine}>
					<UserEmoji emoji={getEmojiFromResponse(message.userMood)} />
					<UserName name={message.userName} />
				</div>
			)}
			<div className={s.secondLine}>
				<MessageText
					text={message.text}
					date={new Date().toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
					})}
					isAuthor={false}
				/>
			</div>
		</div>
	)
}
