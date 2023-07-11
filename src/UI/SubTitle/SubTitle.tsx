import s from './SubTitle.module.css'

interface SubTitlePropsType {
	children: string
}

export function SubTitle({ children }: SubTitlePropsType) {

	return (
		<h3 className={s.subTitle}>
			{children}
		</h3>
	)
}
