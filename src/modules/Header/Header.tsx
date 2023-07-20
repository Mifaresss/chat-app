'use client'
import Image from 'next/image'

import { useState } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import Logo from '@/UI/Logo/Logo'
import { LoginButton } from '@/UI/LoginButton/LoginButton'

import s from './Header.module.css'

// const ws = new WebSocket('https://chat-server-socket-production.up.railway.app/')
// console.log(ws)

export function Header() {
	const [isAuthPopUp, setIsAuthPopUp] = useState(false)

	function setIsPopUpOpen() {
		setIsAuthPopUp(true)
		alert('Тут колись буде відкриття модального вікна')
	}
	return (
		<div className={s.main}>
			<Image className={s.infoBlockImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={47} />
			<Navigation />
			<LoginButton
			  setIsPopUpFalse={setIsPopUpOpen}
			>
				Вхід
			</LoginButton>

		</div>
	)
}

export default Header

