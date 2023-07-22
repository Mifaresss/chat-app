'use client'
import { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from '@/UI/NavLink/NavLink'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { LoginButton } from '@/UI/LoginButton/LoginButton'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'

import s from './Navigation.module.css'

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
	console.log(size)

	const pathname = usePathname()
	return (
		<div className={type === 'header' ? s.navHederWrapper : s.navFooterWrapper}>
			<Image className={s.infoBlockImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={55} />
			{size > 840 && navItems.map(link => {
				const isActive = pathname === link.href
				return (
					<NavLink key={link.href} className={isActive ? s.active : s.link} path={link.href}>
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
			{size > 840 && type === 'header' && <SocialMenu/>}
		</div>
	)
}
export default Navigation
