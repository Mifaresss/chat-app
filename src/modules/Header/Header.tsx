'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import Logo from '@/UI/Logo/Logo'
import Button from '@/UI/Button/Button'
import { LoginButton } from '@/UI/LoginButton/LoginButton'

import styles from './Header.module.css'

// const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashxa')
// console.log(ws)

function Header() {
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
