import Header from '@/modules/Header/Header'
import { HeroSection } from '@/modules/HeroSection/HeroSection'
import s from './page.module.css'
import { HowItWorks } from '@/modules/HowItWorks/HowItWorks'

export default function Home() {

	return (
		<main className={s.main}>
			<div className={s.mainContainer}>
				<HeroSection />
				<HowItWorks />
			</div>
		</main>
	)

}
