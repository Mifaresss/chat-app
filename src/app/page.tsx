import Header from '@/modules/Header/Header'
import { HeroSection } from '@/modules/HeroSection/HeroSection'
import s from './page.module.css'
import { HowItWorks } from '@/modules/HowItWorks/HowItWorks'
import { PrivacyPolicy } from '@/modules/PrivacyPolicy/PrivacyPolicy'

export default function Home() {

	return (
		<main className={s.main}>
			<div className={s.mainContainer}>
				<HeroSection />
				<HowItWorks />
				<PrivacyPolicy />
			</div>
		</main>
	)

}
