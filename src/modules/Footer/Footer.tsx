import Image from 'next/image'
import Navigation from '@/components/Navigation/Navigation'
import { cardsContent, title } from './data'

import s from './Footer.module.css'

export function Footer() {
	return (
		<section className={s.main}>
			<Image className={s.infoBlockImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={55} />
			<Navigation />
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
		</section>
	)
}
