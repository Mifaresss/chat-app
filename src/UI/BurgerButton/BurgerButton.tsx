'use client'
import { HTMLAttributes } from 'react'
import s from './BurgerButton.module.css'

interface BurgerButtonProps extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	wrapperClassName?: string
}

export function BurgerButton({ isOpen, wrapperClassName, className, ...props }: BurgerButtonProps) {
	return (
		<div className={[s.wrapperButton, isOpen && s.open, wrapperClassName].join(' ')} {...props}>
			<button className={[s.burgerButton, className].join(' ')}>
				<span></span>
			</button>
		</div>
	)
}
