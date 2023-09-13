import s from './PrivateChat.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from './components/NotAuthorized/NotAuthorized'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'
import { BeforeChatBody } from './components/BeforeChatBody/BeforeChatBody'

export function PrivateChat() {
	const isAutorized = true

	return (
		<div className={s.privateChatPage} style={isAutorized ? { backgroundColor: '#f4f6ff' } : {}}>
			<div className={s.privateChatContainer}>
				{isAutorized ? (
					<div className={s.contentWrapper}>
						<BeforeChatBody />
						<div className={s.chatBody}>
							<MessagesBlock />
							<div className={s.sendBlockWrapper}>
								<ChatTextInput className={s.sendInput} />
								<div className={s.sendButtonsWrapper}>
									<SvgIcon className={s.button} src='icons/sprite.svg' name='send' />
									<SvgIcon className={s.button} src='icons/sprite.svg' name='smile' />
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<HeroSection infoBlock />
						<NotAuthorized />
					</>
				)}
			</div>
		</div>
	)
}
