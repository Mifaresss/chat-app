'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Navigation from '@/components/Navigation/Navigation'

import s from './Header.module.css'

// const ws = new WebSocket('https://chat-server-socket-production.up.railway.app/')
// console.log(ws)

export function Header() {
	return (
		<div className={s.main}>
			<Image className={s.infoBlockImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={47} />
			<Navigation type='header'/>
		</div>
	)
}

export default Header

