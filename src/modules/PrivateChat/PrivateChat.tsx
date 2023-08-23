import { HeroSection } from '../HeroSection/HeroSection'
import s from './PrivateChat.module.css'
import { MainContent } from './components/MainContent/MainContent'

export function PrivateChat() {

	return (
		<div className={s.privateChatContainer}>
			<HeroSection infoBlock />
			<MainContent />
		</div>
	)
}
