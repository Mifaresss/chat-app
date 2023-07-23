'use client'
import { useState, useEffect } from 'react'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import Navigation from '@/components/Navigation/Navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'

import s from './Header.module.css'

// const ws = new WebSocket('https://chat-server-socket-production.up.railway.app/')
// console.log(ws)

export function Header() {
	const [size, setSize] = useState(window.innerWidth)

	const updateWindowWidth = () => setSize(window.innerWidth)

	useEffect(()=>{
		window.addEventListener('resize', updateWindowWidth)
		return () => window.removeEventListener('resize', updateWindowWidth)
	})
	return (
		<section className={s.main}>
			<div className={s.firstBloc}>
				<Image className={s.infoBlockImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={55} />
				<Navigation type='header'/>
				{size < 840 && <AiOutlineMenu size={35} color={'white'}/>}

			</div>
			<div className={s.secondBlock}>
				<LoginButton>
				Вхід
				</LoginButton >
				<SocialMenu type='header'/>
			</div>
		</section>
	)
}

export default Header

