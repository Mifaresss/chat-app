'use client'
import s from './NavLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
	path: string
	children: string
	onClick?: () => void
	highlight?: boolean
}

export function NavLink({ path, children, onClick, highlight = false }: NavLinkProps) {
	const currentPath = usePathname()
	const isActive = highlight && currentPath === path

	return (
		<Link href={path} className={[s.navLink, isActive && s.active].join(' ')} onClick={onClick}>
			{children}
		</Link>
	)
}
