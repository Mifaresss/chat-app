import HeroImg from '@images/hero-section/hero-img.png'
import Image from 'next/image'
import s from './HeroSection.module.css'
import { InfoBlock } from './components/InfoBlock/InfoBlock'

interface Props {
	className?: string
	infoBlock?: boolean
}

export function HeroSection({ className, infoBlock }: Props) {
	return (
		<section className={[s.heroSection, className].join(' ')}>
			<div className={s.heroImgWrapper}>
				<Image priority fill src={HeroImg} alt='girl with phone' className={s.img} />
			</div>
			{infoBlock && <InfoBlock />}
		</section>
	)
}
