import s from './HeroSection.module.css'
import { InfoBlock } from './components/InfoBlock/InfoBlock'

interface PropsType {
	className?: string
	infoBlock?: boolean
}

export function HeroSection({ className, infoBlock }: PropsType) {

	return (
		<section className={[s.heroSection, className].join(' ')}>
			{infoBlock && <InfoBlock />}
		</section>
	)
}
