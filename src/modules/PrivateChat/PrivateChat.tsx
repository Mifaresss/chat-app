import s from './PrivateChat.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from './components/NotAuthorized/NotAuthorized'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'

export function PrivateChat() {
	const isAutorized = false

	return (
		<div className={s.privateChatPage} style={isAutorized ? { backgroundColor: '#f4f6ff' } : {}}>
			<div className={s.privateChatContainer}>
				<HeroSection infoBlock />
				<NotAuthorized />
				{/* <ChatTextInput /> */}
			</div>
		</div>
	)
}
