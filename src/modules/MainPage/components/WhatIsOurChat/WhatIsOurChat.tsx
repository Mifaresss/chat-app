import s from './WhatIsOurChat.module.css'
import contentImg from '@images/what-is-our-chat/content-img.jpg'
import { Title } from '@/UI/Title/Title'
import Image from 'next/image'
import { InfoList } from '@/components/InfoList/InfoList'
import { Button } from '@/UI/Button/Button'

export function WhatIsOurChat() {

	return (
		<section className={s.whatIsOurChat}>
			<div className={s.contentWrapper}>
				<div className={s.titleWrapper}>
					<Title>Що таке наш чат?</Title>
				</div>
				<div className={s.content}>
					<InfoList listStyleImg='@images/what-is-out-chat/item-icon.svg' />
				</div>
				<Button>Авторизуватися</Button>
			</div>
			<Image src={contentImg} alt='людина, яка дивиться у ноутбук, біля якого стоїть кава' />
		</section>
	)
}
