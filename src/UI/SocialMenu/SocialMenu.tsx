import s from './SocialMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { socialMediaCards } from './data'

interface SocialMenuPropsType {}

export function SocialMenu() {

	return (
		<div className={s.social}>
			{socialMediaCards.map(({ img, href }, i) => (
				<Link key={i} className={s.socialLink} href={href}>
					<Image src={img.src} alt={img.alt}/>
				</Link>
			))}
		</div>
	)
}
