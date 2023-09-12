import s from './MainPage.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { CommunicationInRooms } from './components/CommunicationInRooms/CommunicationInRooms'
import { HowItWorks } from './components/HowItWorks/HowItWorks'
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy'
import { WhatIsOurChat } from './components/WhatIsOurChat/WhatIsOurChat'

export function MainPage() {
	return (
		<div className={s.mainContainer}>
			<HeroSection infoBlock />
			<WhatIsOurChat />
			<HowItWorks />
			<CommunicationInRooms />
			<PrivacyPolicy />
		</div>
	)
}
