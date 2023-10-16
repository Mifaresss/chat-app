import { ChatRoom } from '@/modules/ChatRoom/ChatRoom'
import { PrivateChatRoom } from '@/modules/PrivateChatRoom/PrivateChatRoom'

interface Props {
	params: {
		chatId: string
	}
}

export default function Room({ params: { chatId } }: Props) {
	return <PrivateChatRoom chatId={chatId} />
}
