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

	const style = { backgroundColor: isActive ? 'var(--color-6)' : 'var(--color-5)' }

	return (
		<Link href={chatId} className={[s.wrapper, className].join(' ')} style={style} {...props}>
			<SvgIcon className={s.icon} width={40} height={40} src='icons/sprite.svg' name={chatId} />
			<p className={s.chatName}>{chatName}</p>
		</Link>
	)
}
