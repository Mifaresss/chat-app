import s from './SocialMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { socialMediaCards } from './data'
import { HTMLAttributes } from 'react'

interface SocialMenuProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	reverse?: boolean
}

export function SocialMenu({ className, reverse, ...props }: SocialMenuProps) {
	const newSocialMediaCards = reverse ? [...socialMediaCards].reverse() : socialMediaCards

	return (
		<div className={[s.social, className].join(' ')} {...props}>
			{newSocialMediaCards.map(({ img, href }, i) => (
				<Link target='_blank' key={i} className={s.socialLink} href={href}>
					<Image src={img.src} alt={img.alt} />
				</Link>
			))}
		</div>
	)
}
