
import Navigation from '@/components/Navigation/Navigation'

import s from './Footer.module.css'

export function Footer() {

	return (
		<section className='container'>
			<div className={s.main}>
				<Navigation type='footer'/>
			</div>
		</section>
	)
}
