import { MessageText } from '@/UI/MessageText/MessageText'
import s from './MessageList.module.css'
import { UserEmoji } from '@/UI/UserEmoji/UserEmoji'
import { UserName } from '@/UI/UserName/UserName'
import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'
import { Message } from '@/redux/slices/messagesSlice'

interface Props {
	message: Message
}

export function MessageList({ message }: Props) {
	return (
		<div className={s.message}>
			<div className={s.firstLine}>
				<UserEmoji emoji={getEmojiFromResponse(message.userMood)} />
				<UserName name={message.userName} />
			</div>
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
