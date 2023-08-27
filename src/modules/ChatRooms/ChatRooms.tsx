import s from './ChatRooms.module.css'
import { FirstSection } from './components/FirstSection/FirstSection'
import { SecondSection } from './components/SecondSection/SecondSection'

export function ChatRooms() {

	return (
		<div className={s.chatRoomsContainer}>
			<FirstSection />
			<SecondSection />
		</div>
	)
}
