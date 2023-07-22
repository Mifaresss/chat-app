
import Image from 'next/image'
import Navigation from '@/components/Navigation/Navigation'

import s from './Footer.module.css'

export function Footer() {

	return (
		<section className={s.main}>
			<Image className={s.infoBlockImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={55} />
			<Navigation type='footer'/>
		</section>
	)
}
