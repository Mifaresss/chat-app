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
import { Popup } from '@/UI/Popup/Popup'

export function Header() {
	const { userName, userMood } = useAppSelector(state => state.auth)

	const isOpen = useSelector((state: RootState) => state.toggleNavMenu.isOpen)
	const dispatch = useDispatch()

	const dialogRef = useRef<HTMLDialogElement | null>(null)

	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [isOpen])

	const editUserRef = useRef<HTMLDialogElement | null>(null)
	function editUserHandler() {
		if (editUserRef.current) {
			editUserRef.current.showModal()
		}
	}

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<BurgerMenuButton />
				<div className={s.navWrapper}>
					<Link href='/'>
						<Image className={s.logo} src={logo} alt='Логотип сайту' />
					</Link>
					<nav className={[s.nav, isOpen && s.visible].join(' ')}>
						<NavList
							highlight
							isOpen={isOpen}
							updateOpen={() => {
								dispatch(toggleNavMenu(false))
							}}
						/>
					</nav>
				</div>
				<div className={s.secondBlockWrapper}>
					<SocialMenu className={s.socialBlock} />
					{userName ? (
						<>
							<AutorizedUser name={userName} emoji={userMood} onClick={editUserHandler} />
							<Popup ref={editUserRef}></Popup>
						</>
					) : (
						<LoginButton label='Вхід' onClick={openPopupHandler} />
					)}
				</div>
			</div>
			<LoginPopup ref={dialogRef} />
		</header>
	)
}
