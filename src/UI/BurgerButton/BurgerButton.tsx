'use client'
import { RootState } from '@/redux/store'
import s from './BurgerButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNavMenu } from '@/redux/slices/toggleNavMenuSlice'

interface BurgerButtonProps {}

export function BurgerMenuButton({}: BurgerButtonProps) {
	const dispatch = useDispatch()
	const isOpen = useSelector((state: RootState) => state.toggleNavMenu.isOpen)

	return (
		<div
			className={[s.wrapperButton, isOpen && s.open].join(' ')}
			onClick={() => {
				dispatch(toggleNavMenu(!isOpen))
			}}
		>
			<button className={s.burgerButton}>
				<span></span>
			</button>
		</div>
	)
}
