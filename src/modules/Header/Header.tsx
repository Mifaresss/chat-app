'use client'

import React from 'react'
import Navigation from '@/components/Navigation/Navigation'

import styles from './Header.module.css'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashxa')
console.log(ws)

function Header() {
	return (
		<div className={styles.main}>
			<Navigation />
		</div>
	)
}

export default Header
