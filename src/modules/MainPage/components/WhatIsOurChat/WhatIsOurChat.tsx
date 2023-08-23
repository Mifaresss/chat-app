'use client'
import s from './WhatIsOurChat.module.css'
import contentImg from '@images/what-is-our-chat/content-img.jpg'
import { Title } from '@/UI/Title/Title'
import Image from 'next/image'
import { InfoList } from '@/components/InfoList/InfoList'
import { Button } from '@/UI/Button/Button'
import listStyleImg from '@images/what-is-our-chat/item-icon.svg'
import { altForContentImg, buttonContent, listItems, title } from './data'
import { LoginPopup } from '@/UI/LoginPopup/LoginPopup'
import { useRef } from 'react'

export function WhatIsOurChat() {
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<section className={s.whatIsOurChat}>
			<div className={s.contentWrapper}>
				<div className={s.titleWrapper}>
					<Title title={title} />
				</div>
				<div className={s.content}>
					<InfoList listStyleImg={listStyleImg.src} listItems={listItems} />
				</div>
				<Button title={buttonContent} onClick={openPopupHandler} />
			</div>
			<Image className={s.contentImg} src={contentImg} alt={altForContentImg} />
			<LoginPopup ref={dialogRef} />
		</section>
	)
}
