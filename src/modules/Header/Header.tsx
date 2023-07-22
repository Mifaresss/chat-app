import Navigation from '@/components/Navigation/Navigation'

import s from './Header.module.css'

// const ws = new WebSocket('https://chat-server-socket-production.up.railway.app/')
// console.log(ws)

export function Header() {
	return (
		<section className={s.main}>
			<Navigation type='header'/>
		</section>
	)
}

export default Header

