import s from './SecondSection.module.css'
import Image from 'next/image'
import { Title } from '@/UI/Title/Title'
import { InfoCard } from '@/components/InfoCard/InfoCard'
import { cardsContent, title } from './data'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import Link from 'next/link'

interface PropsType {}

export function SecondSection({}: PropsType) {

	return (
		<section className={s.section}>
			<Title title={title} className={s.title} justify='center' />
			<div className={s.contentWrapper}>
				{cardsContent.map(({ id, img, subTitle, text }) => (
					<Link className={s.cardLink} href='#' key={id}>
						<InfoCard className={s.card} key={id}>
							<SvgIcon
								src='chat-rooms/second-block/sprite.svg'
								name={img.src}
								width={100}
								height={100}
							/>
							<SubTitle title={subTitle} />
							<p className={s.text}>{text}</p>
						</InfoCard>
					</Link>
				))}
			</div>
		</section>
	)
}
