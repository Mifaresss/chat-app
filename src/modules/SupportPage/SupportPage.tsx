import s from './SupportPage.module.css'
import { HeroSection } from '../HeroSection/HeroSection'
import { NeedHelp } from './components/NeedHelp/NeedHelp'
import { Accordion } from '@/UI/Accordion/Accordion'
import { questions } from './data'

export function Support() {
	return (
		<div className={s.mainContainer}>
			<HeroSection className={s.supportHeroSection} />
			<div className={s.faq}>
				{questions.map(({ id, question, answer }) => (
					<Accordion key={id} question={question} answer={answer} />
				))}
			</div>
			<NeedHelp />
		</div>
	)
}
