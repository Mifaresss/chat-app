import s from './AboutSection.module.css'
import Image from 'next/image'
import contentImg from '@images/chat-rooms/first-block/content.jpg'
import { Title } from '@/UI/Title/Title'
import { Text } from '@/UI/Text/Text'

interface Props {}

export function AboutSection({}: Props) {
	return (
		<section className={s.section}>
			<Image
				className={s.contentImg}
				src={contentImg}
				placeholder='blur'
				alt='Люди спілкуються і сидять за ноутбуками'
			/>
			<div className={s.contentWrapper}>
				<Title className={s.title} title='Спілкуйся в чат-кімнатах' />
				<Text>
					Чат-кімнати є повністю анонімними та не збирають ваших персональних даних.
					Спілкуйтеся на різні хвилюючі теми та генеруйте нові ідеї!
				</Text>
			</div>
		</section>
	)
}
