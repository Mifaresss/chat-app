import s from './CommunicationInRooms.module.css'
import contentImg from '@images/communication-in-the-rooms/content-img.jpg'
import { Title } from '@/UI/Title/Title'
import Image from 'next/image'
import { InfoList } from '@/components/InfoList/InfoList'
import { Button } from '@/UI/Button/Button'

export function CommunicationInRooms() {

	return (
		<section className={s.communicationInRooms}>
			<Image src={contentImg} alt='людина, яка дивиться у ноутбук, біля якого стоїть кава' />
			<div className={s.contentWrapper}>
				<div className={s.titleWrapper}>
					<Title>Спілкування в чат кімнатах</Title>
				</div>
				<div className={s.content}>
					<ul className={s.infoList}>
						<li>Анонімне спілкування за спільними інтересами</li>
						<li>Тематика кімнат написана в описі чат кімнати</li>
						<li>Взаємна повага до користувачів</li>
						<li>Максимальна кількість повідомлень - 500 шт. Після цього твої повідомлення видаляються до кількості 250 шт</li>
						<li>Якщо у тебе є пропозиції щодо створення нових чат кімнат - напиши нам у Підтримку</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
