'use client'
import { RootState } from '@/redux/store'
import s from './BurgerButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNavMenu } from '@/redux/toggleNavMenuSlice'

interface BurgerButtonPropsType {}

export function BurgerMenuButton({}: BurgerButtonPropsType) {
	const dispatch = useDispatch()
	const isOpen = useSelector((state: RootState) => state.toggleNavMenu.isOpen)

	return (
		<button
			className={[s.burgerButton, isOpen && s.open].join(' ')}
			onClick={() => {
				dispatch(toggleNavMenu(!isOpen))
			}}
		>
			<span></span>
		</button>
	)
}
