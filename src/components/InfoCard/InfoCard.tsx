import { ReactNode } from 'react'
import s from './InfoCard.module.css'

interface InfoCardPropsType {
	bgColor: string
	children: ReactNode
}

export function InfoCard({ bgColor, children }: InfoCardPropsType) {
	const infoCardStyles = {
		backgroundColor: bgColor
	}

	return (
		<article className={s.infoCard} style={infoCardStyles}>
			{children}
		</article>
	)
}
