'use client'
import s from './Header.module.css'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import logo from '@images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { NavList } from '@/components/NavList/NavList'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { BurgerMenuButton } from '@/UI/BurgerButton/BurgerButton'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useEffect } from 'react'
import { RootState } from '@/redux/store'
import { toggleNavMenu } from '@/redux/slices/toggleNavMenuSlice'
import { LoginPopup } from '../../components/LoginPopup/LoginPopup'
import { useAppSelector } from '@/hooks/redux'
import { AutorizedUser } from '@/UI/AutorizedUser/AutorizedUser'
import { EditUserPopup } from '@/components/EditUserPopup/EditUserPopup'
import { Navigation } from './components/Navigation/Navigation'

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
				</div>
			</div>
			<LoginPopup ref={dialogRef} />
		</header>
	)
}
