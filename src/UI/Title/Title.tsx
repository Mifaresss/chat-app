import s from './Title.module.css'

interface TitlePropsType {
	children: string
}

export function Title({ children }: TitlePropsType) {

	return (
		<h2 className={s.title}>
			{children}
		</h2>
	)
}
