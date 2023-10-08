import { ChatRoom } from '@/modules/ChatRoom/ChatRoom'

interface Props {
	params: {
		id: string
	}
}

export default function Room({ params: { id } }: Props) {
	return <ChatRoom id={id} />
}
