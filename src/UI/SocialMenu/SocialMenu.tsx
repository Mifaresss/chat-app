import Image from 'next/image'

import { cardsContent, title } from './data'

import s from './SocialMenu.module.css'

export function SocialMenu({ type }: {type: string}) {
	return (

		<div className={s.social}>
			{type === 'footer' && <h3 className={s.socialTitle}>{title}</h3>}
			<div className={type === 'footer' ? s.socialListfooter: s.socialListheader}>
				{cardsContent.map(({ id, img, href }) => (
					<div key={id}>
						<a className={type === 'footer' ? s.socialLinkfooter: s.socialLinkheader} href={href}>
							<Image src={img.src} alt={img.alt}/>
						</a>
					</div>
				))}
			</div>
		</div>
	)
}
