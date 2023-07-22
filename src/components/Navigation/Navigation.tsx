'use client'
import { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from '@/UI/NavLink/NavLink'
import { usePathname } from 'next/navigation'

import { LoginButton } from '@/UI/LoginButton/LoginButton'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'

import styles from './Navigation.module.css'

const navItems = [

	{ label: 'Новий чат', href: '/' },
	{ label: 'Чат кімнати', href: '/blog' },
	{ label: 'Підтримка', href: '/support' },

]

function Navigation({ type }:{type: string}) {
	const [isAuthPopUp, setIsAuthPopUp] = useState(false)
	const [size, setSize] = useState(window.innerWidth)

	const updateWindowWidth = () => setSize(window.innerWidth)

	useEffect(()=>{
		window.addEventListener('resize', updateWindowWidth)
		return () => window.removeEventListener('resize', updateWindowWidth)
	})

	const setIsPopUpOpen = () => {
		alert('Відкрити попап')
		setIsAuthPopUp(!isAuthPopUp)
	}

	const pathname = usePathname()
	return (
		<div className={styles.navWrapper}>
			{size > 840 && navItems.map(link => {
				const isActive = pathname === link.href
				return (
					<NavLink key={link.href} className={isActive ? styles.active : styles.link} path={link.href}>
						{link.label}
					</NavLink>
				)
			})}
			{size < 840 && <AiOutlineMenu size={35} color={'white'}/>}
			{size > 840 && type === 'header' && <LoginButton
			  setIsPopUpFalse={setIsPopUpOpen}
			>
				Вхід
			</LoginButton > }
			{size > 840 && type !== 'header' && <SocialMenu/>}
		</div>
	)
}
export default Navigation
