import s from './ChatRooms.module.css'
import { AboutSection } from './components/AboutSection/AboutSection'
import { RoomsListSection } from './components/RoomsListSection/RoomsListSection'

export function ChatRooms() {
	return (
		<div className={s.chatRoomsContainer}>
			<AboutSection />
			<RoomsListSection />
		</div>
	)
}
