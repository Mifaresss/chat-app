import s from './page.module.css'
import { MainPageModule } from '@/modules/MainPage/MainPageModule'

export default function Home() {

	return (
		<main className={s.main}>
			<MainPageModule />
		</main>
	)

}
