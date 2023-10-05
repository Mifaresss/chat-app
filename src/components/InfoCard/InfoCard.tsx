import { ReactNode } from 'react'
import s from './InfoCard.module.css'

interface InfoCardProps {
	bgColor?: string
	children: ReactNode
	className?: string
}

export function InfoCard({ bgColor, children, className }: InfoCardProps) {
	const infoCardStyles = { backgroundColor: bgColor }

	return (
		<article className={[s.infoCard, className].join(' ')} style={infoCardStyles}>
			{children}
		</article>
	)
}
