import s from './page.module.css'
import { MainPageModule } from '@/modules/MainPage/MainPageModule'

export default function Home() {

	return (
		<div className={s.main}>
			<MainPageModule />
		</div>
	)

}
