import s from './Title.module.css'

interface TitlePropsType {
	children: string
	align?: 'start' | 'center' | 'end'
}

export function Title({ children, align }: TitlePropsType) {
	const styles = align ? { display: 'flex', justifyContent: align } : {}

	return (
		<div style={styles}>
			<h2 className={s.title}>
				{children}
			</h2>
		</div>
	)
}
