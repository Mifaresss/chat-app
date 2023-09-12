import { Colors } from '@/types/colors'
import s from './SubTitle.module.css'

interface SubTitlePropsType {
	color?: Colors
	align?: 'left' | 'center' | 'right'
	title: string
}

export function SubTitle({ color, align, title }: SubTitlePropsType) {
	const style = { color: `var(${color})`, textAlign: align }

	return (
		<h3 className={s.subTitle} style={style}>
			{title}
		</h3>
	)
}
