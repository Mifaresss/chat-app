'use client'
import s from './ChatName.module.css'
import { usePathname } from 'next/navigation'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	chatName: string
	chatId: string
}

export function ChatName({ chatName, chatId, className, ...props }: Props) {
	const pathName = usePathname()
	const isActive = chatId === pathName.substring(pathName.lastIndexOf('/') + 1)

	return (
		<Link
			href={chatId}
			className={[s.wrapper, className, isActive ? s.active : ''].join(' ')}
			{...props}
		>
			<SvgIcon className={s.icon} src='icons/sprite.svg' name={chatId} />
			<p className={s.chatName}>{chatName}</p>
		</Link>
	)
}
