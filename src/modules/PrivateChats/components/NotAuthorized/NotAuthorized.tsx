'use client'
import s from './NotAuthorized.module.css'
import { useRef } from 'react'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { Button } from '@/UI/Button/Button'
import Link from 'next/link'
import { LoginPopup } from '@/components/LoginPopup/LoginPopup'
import { PassiveButton } from '@/UI/PassiveButton/PassiveButton'

export function NotAuthorized() {
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<>
			<article className={s.mainContent}>
				<SubTitle title='На жаль, ти ще не авторизований!' align='center' />
				<div className={s.wrapperButtons}>
					<Link href='/'>
						<PassiveButton title='На головну' />
					</Link>
					<Button title='Авторизуватися' onClick={openPopupHandler} />
				</div>
			</article>
			<LoginPopup ref={dialogRef} />
		</>
	)
}
