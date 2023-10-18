import { ChatRoom } from '@/modules/ChatRoom/ChatRoom'

interface Props {
	params: {
		roomId: string
	}
}

export default function Room({ params: { roomId } }: Props) {
	return <ChatRoom roomId={roomId} />
}
