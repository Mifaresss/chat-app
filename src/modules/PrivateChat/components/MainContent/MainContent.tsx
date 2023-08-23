'use client'
import s from './MainContent.module.css'
import { useRef } from 'react'
import { LoginPopup } from '@/UI/LoginPopup/LoginPopup'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { Button } from '@/UI/Button/Button'
import Link from 'next/link'

export function MainContent() {
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<>
			<article className={s.mainContent}>
				<SubTitle title='На жаль, ти ще не авторизований!' />
				<div className={s.wrapperButtons}>
					<Link href='/'>
						<Button title='На головну' />
					</Link>
					<Button title='Авторизуватись' onClick={openPopupHandler} />
				</div>
			</article>
			<LoginPopup ref={dialogRef} />
		</>
	)
}
