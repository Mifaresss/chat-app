'use client'
import s from './WhatIsOurChat.module.css'
import Image from 'next/image'
import contentImg from '@images/what-is-our-chat/content-img.jpg'
import { Title } from '@/UI/Title/Title'
import { InfoList } from '@/components/InfoList/InfoList'
import { Button } from '@/UI/Button/Button'
import { altForContentImg, buttonContent, listItems, title } from './data'
import { useRef } from 'react'
import { LoginPopup } from '@/components/LoginPopup/LoginPopup'
import { useAppSelector } from '@/hooks/redux'

export function WhatIsOurChat() {
	const dialogRef = useRef<HTMLDialogElement | null>(null)
	const userId = useAppSelector(state => state.user.userId)

	function openPopupHandler() {
		if (userId) return

		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<section className={s.whatIsOurChat}>
			<div className={s.contentWrapper} style={userId ? { justifyContent: 'space-evenly' } : {}}>
				<div className={s.titleWrapper}>
					<Title title={title} />
				</div>
				<div className={s.content}>
					<InfoList imgId='what-is-item-icon' listItems={listItems} />
				</div>
				<Button
					style={userId ? { display: 'none' } : {}}
					title={buttonContent}
					onClick={openPopupHandler}
				/>
			</div>
			<Image className={s.contentImg} src={contentImg} alt={altForContentImg} />
			<LoginPopup ref={dialogRef} />
		</section>
	)
}
