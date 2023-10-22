import s from './HowItWorks.module.css'
import Image from 'next/image'
import { cardsContent, title } from './data'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { Title } from '@/UI/Title/Title'
import { InfoCard } from '@/components/InfoCard/InfoCard'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'

export function HowItWorks() {
	return (
		<section className={s.howItWorks}>
			<div className={s.titleWrapper}>
				<Title title={title} />
			</div>
			<div className={s.contentWrapper}>
				{cardsContent.map(({ id, img, subTitle, text }) => {
					console.log({ id, img })
					return (
						<InfoCard key={id} bgColor='var(--info-card-background-c)'>
							{/* <Image src={img.src} alt={img.alt} /> */}
							<SvgIcon className={s.cardIcon} src='icons/sprite.svg' name={img.src} />
							<SubTitle title={subTitle} />
							<p>{text}</p>
						</InfoCard>
					)
				})}
			</div>
		</section>
	)
}
