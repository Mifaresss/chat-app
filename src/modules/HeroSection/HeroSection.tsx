import s from './HeroSection.module.css'
import { InfoBlock } from './components/InfoBlock/InfoBlock'

export function HeroSection() {

	return (
		<section className={s.heroSection}>
			<InfoBlock />
		</section>
	)
}
