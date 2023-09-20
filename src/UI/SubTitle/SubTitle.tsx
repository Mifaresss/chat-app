import { Colors } from '@/types/colors'
import s from './SubTitle.module.css'
import { HTMLAttributes } from 'react'

interface SubTitlePropsType extends HTMLAttributes<HTMLHeadingElement> {
	color?: Colors
	align?: 'left' | 'center' | 'right'
	title: string
}

export function SubTitle({ color, align, title, className, ...props }: SubTitlePropsType) {
	const style = { color: `var(${color})`, textAlign: align }

	return (
		<h3 className={[s.subTitle, className].join(' ')} style={style} {...props}>
			{title}
		</h3>
	)
}
