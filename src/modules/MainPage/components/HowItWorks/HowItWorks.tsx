import s from './HowItWorks.module.css'
import Image from 'next/image'
import { cardsContent, title } from './data'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { Title } from '@/UI/Title/Title'
import { InfoCard } from '@/components/InfoCard/InfoCard'

export function HowItWorks() {

	return (
		<section className={s.howItWorks}>
			<div className={s.titleWrapper}>
				<Title>{title}</Title>
			</div>
			<div className={s.contentWrapper}>
				{cardsContent.map(({ id, img, subTitle, text }) => {
					console.log(img)
					return (
						<InfoCard key={id} bgColor='var(--effect-2-c)'>
							<Image src={img.src} alt={img.alt} />
							<SubTitle>{subTitle}</SubTitle>
							<p>{text}</p>
						</InfoCard>
					)
				})}
			</div>
		</section>
	)
}
