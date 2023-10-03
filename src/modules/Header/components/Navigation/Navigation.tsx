import { AutorizedUser } from '@/UI/AutorizedUser/AutorizedUser'
import s from './Navigation.module.css'
import { NavList } from '@/components/NavList/NavList'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { toggleNavMenu } from '@/redux/slices/toggleNavMenuSlice'
import { RootState } from '@/redux/store'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { LoginButton } from '@/UI/LoginButton/LoginButton'

interface PropsType {}

export function Navigation() {
	const isOpen = useSelector((state: RootState) => state.toggleNavMenu.isOpen)
	const { userName, userMood } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [isOpen])

	const dialogRef = useRef<HTMLDialogElement | null>(null)
	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	return (
		<nav className={[s.nav, isOpen && s.visible].join(' ')}>
			{userName ? (
				<AutorizedUser
					ellipsis={false}
					className={s.navAutorizedUser}
					name={userName}
					emoji={userMood}
				/>
			) : (
				<LoginButton label='Вхід' onClick={openPopupHandler} />
			)}
			<NavList
				highlight
				isOpen={isOpen}
				updateOpen={() => {
					dispatch(toggleNavMenu(false))
				}}
			/>
		</nav>
	)
}
