import s from './SubTitle.module.css'

interface SubTitlePropsType {
	color?:
	'--alpha-text-c' | '--beta-text-c' | '--gamma-text-c' |
	'--effect-1-c' | '--effect-2-c' | '--effect-3-c' | '--effect-4-c' |
	'--danger-c'
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
