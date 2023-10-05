'use client'
import s from './Accordion.module.css'
import { useState } from 'react'
import { SubTitle } from '../SubTitle/SubTitle'
import { SvgIcon } from '../SvgIcon/SvgIcon'

interface Props {
	question: string
	answer: string
}

export function Accordion({ question, answer }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	function toggleOpen() {
		setIsOpen(!isOpen)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.questionWrapper} onClick={toggleOpen}>
				<SubTitle title={question} className={s.question} />
				<SvgIcon
					className={[s.toggleButton, isOpen ? s.isOpen : ''].join(' ')}
					src='icons/sprite.svg'
					name='tick'
					width={40}
					height={40}
				/>
			</div>
			<div className={[s.answerWrapper, isOpen ? s.isOpen : ''].join(' ')}>
				<div className={s.answer}>{answer}</div>
			</div>
		</div>
	)
}
