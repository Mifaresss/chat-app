'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import Logo from '@/UI/Logo/Logo'
import { LoginButton } from '@/UI/LoginButton/LoginButton'

import styles from './Header.module.css'

// const ws = new WebSocket('https://chat-server-socket-production.up.railway.app/')
// console.log(ws)

export function Header() {
	const [isAuthPopUp, setIsAuthPopUp] = useState(false)

	function setIsPopUpOpen() {
		setIsAuthPopUp(true)
		alert('Тут колись буде відкриття модального вікна')
	}
	return (
		<div className={styles.main}>
			<Logo />
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

