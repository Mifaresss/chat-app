import s from './WhatIsOurChat.module.css'
import contentImg from '@images/what-is-our-chat/content-img.jpg'
import { Title } from '@/UI/Title/Title'
import Image from 'next/image'
import { InfoList } from '@/components/InfoList/InfoList'
import { Button } from '@/UI/Button/Button'
import listStyleImg from '@images/what-is-our-chat/item-icon.svg'
import { altForContentImg, buttonContent, listItems, title } from './data'

export function WhatIsOurChat() {

	return (
		<section className={s.whatIsOurChat}>
			<div className={s.contentWrapper}>
				<div className={s.titleWrapper}>
					<Title>{title}</Title>
				</div>
				<div className={s.content}>
					<InfoList listStyleImg={listStyleImg.src} listItems={listItems} />
				</div>
				<Button>{buttonContent}</Button>
			</div>
			<Image className={s.contentImg} src={contentImg} alt={altForContentImg} />
		</section>
	)
}
