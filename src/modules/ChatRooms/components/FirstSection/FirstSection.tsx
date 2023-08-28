import s from './FirstSection.module.css'
import Image from 'next/image'
import contentImg from '@images/chat-rooms/first-block/content.jpg'
import { Title } from '@/UI/Title/Title'

interface PropsType {}

export function FirstSection({}: PropsType) {

	return (
		<section className={s.section}>
			<Image
				className={s.contentImg}
				src={contentImg}
				placeholder='blur'
				alt='Люди спілкуються і сидять за ноутбуками'
				sizes='100vw'
			/>
			<div className={s.contentWrapper}>
				<Title className={s.title} title='Спілкуйся в чат-кімнатах' />
				<p className={s.text}>
					Чат-кімнати є повністью анонімними та не збирають ваших персональних даних. Спілкуйтеся на різні хвилюючі теми та генеруйте нові ідеї!
				</p>
			</div>
		</section>
	)
}
