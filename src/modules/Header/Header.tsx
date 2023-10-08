'use client'
import s from './Header.module.css'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import logo from '@images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { BurgerMenuButton } from '@/UI/BurgerButton/BurgerButton'
import { useRef } from 'react'
import { LoginPopup } from '../../components/LoginPopup/LoginPopup'
import { useAppSelector } from '@/hooks/redux'
import { Navigation } from './components/Navigation/Navigation'
import { AutorizedUser } from '@/components/AutorizedUser/AutorizedUser'
import { ThemeSwitcher } from '@/UI/ThemeSwitcher/ThemeSwitcher'

export function Header() {
	const { userName, userMood } = useAppSelector(state => state.user)

	const dialogRef = useRef<HTMLDialogElement | null>(null)
	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<BurgerMenuButton />
				<div className={s.navWrapper}>
					<Link href='/'>
						<Image priority className={s.logo} src={logo} alt='Логотип сайту' />
					</Link>
					<Navigation />
				</div>
				<div className={s.secondBlockWrapper}>
					<SocialMenu className={s.socialBlock} />
					{userName ? (
						<AutorizedUser
							className={s.headerAutorizedUser}
							name={userName}
							emoji={userMood}
						/>
					) : (
						<LoginButton label='Вхід' onClick={openPopupHandler} />
					)}
					<ThemeSwitcher />
				</div>
			</div>
			<LoginPopup ref={dialogRef} />
		</header>
	)
}
