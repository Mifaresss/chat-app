import s from './HeroSection.module.css'
import { InfoBlock } from './components/InfoBlock/InfoBlock'

interface Props {
	className?: string
	infoBlock?: boolean
}

export function HeroSection({ className, infoBlock }: Props) {
	return (
		<section className={[s.heroSection, className].join(' ')}>
			{infoBlock && <InfoBlock />}
		</section>
	)
}
