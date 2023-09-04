import s from './PrivateChat.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { NotAuthorized } from './components/NotAuthorized/NotAuthorized'
import { ChatTextInput } from '@/UI/ChatTextInput/ChatTextInput'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { MessagesBlock } from '@/UI/MessagesBlock/MessagesBlock'

export function PrivateChat() {
	const isAutorized = true

	return (
		<div className={s.privateChatPage} style={isAutorized ? { backgroundColor: '#f4f6ff' } : {}}>
			<div className={s.privateChatContainer}>
				<div style={{ width: '100%', height: '167px' }}></div>
				{isAutorized ? (
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
