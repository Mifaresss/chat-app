import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { ChatPageTemplate } from '@/components/ChatPageTemplate/ChatPageTemplate'
import { ChatRoom } from '@/modules/ChatRoom/ChatRoom'

interface Props {
	params: {
		id: string
	}
}

export default function Room({ params: { id } }: Props) {
	return <ChatRoom id={id} />
}
