import s from './MainPageModule.module.css'
import { CommunicationInRooms } from './components/CommunicationInRooms/CommunicationInRooms'
import { HeroSection } from './components/HeroSection/HeroSection'
import { HowItWorks } from './components/HowItWorks/HowItWorks'
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy'
import { WhatIsOurChat } from './components/WhatIsOurChat/WhatIsOurChat'

export function MainPageModule() {

	return (
		<div className={s.mainContainer}>
			<HeroSection />
			<WhatIsOurChat />
			<HowItWorks />
			<CommunicationInRooms />
			<PrivacyPolicy />
		</div>
	)
}
