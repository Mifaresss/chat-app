import Image from 'next/image'

import { cardsContent, title } from './data'

import s from './SocialMenu.module.css'

export function SocialMenu() {
	return (

		<div className={s.social}>
			<h3 className={s.socialTitle}>{title}</h3>
			<div className={s.socialList}>
				{cardsContent.map(({ id, img, href }) => (
					<div key={id}>
						<a className={s.socialLinkInstagram} href={href}>
							<Image src={img.src} alt={img.alt}/>
						</a>
					</div>
				))}
			</div>
		</div>
	)
}
