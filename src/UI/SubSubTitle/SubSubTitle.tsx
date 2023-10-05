import { Colors } from '@/types/colors'
import s from './SubSubTItle.module.css'
import { HTMLAttributes } from 'react'

interface SubSubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	color?: Colors
	align?: 'left' | 'center' | 'right'
	label: string
}

export function SubSubTitle({ color, align, label, className, style, ...props }: SubSubTitleProps) {
	const internalStyle = { color: `var(${color})`, textAlign: align }

	return (
		<h3
			className={[s.subSubTitle, className].join(' ')}
			style={{ ...internalStyle, ...style }}
			{...props}
		>
			{label}
		</h3>
	)
}
