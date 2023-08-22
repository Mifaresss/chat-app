import { HTMLAttributes } from 'react'
import s from './SubSubTitle.module.css'

interface SubSubTitlePropsType extends HTMLAttributes<HTMLHeadingElement> {
	color?:
	'--alpha-text-c' | '--beta-text-c' | '--gamma-text-c' |
	'--effect-1-c' | '--effect-2-c' | '--effect-3-c' | '--effect-4-c' |
	'--danger-c'
	align?: 'left' | 'center' | 'right'
	label: string
}

export function SubSubTitle({ color, align, label, className, ...props }: SubSubTitlePropsType) {
	const style = { color: `var(${color})`, textAlign: align }

	return (
		<h3 className={[s.subSubTitle, className].join(' ')} style={style} {...props}>
			{label}
		</h3>
	)
}
