import s from './SocialMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { socialMediaCards } from './data'
import { HTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

interface SocialMenuProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	reverse?: boolean
}

export function SocialMenu({ className, reverse, ...props }: SocialMenuProps) {
	const path = usePathname()
	const isPrivateChats = path.includes('private')

	const newSocialMediaCards = reverse ? [...socialMediaCards].reverse() : socialMediaCards

	return (
		<div
			className={[s.social, isPrivateChats ? s.displayNone : '', className].join(' ')}
			{...props}
		>
			{newSocialMediaCards.map(({ img, href }, i) => (
				<Link target='_blank' key={i} className={s.socialLink} href={href}>
					<Image src={img.src} alt={img.alt} />
				</Link>
			))}
		</div>
	)
}
