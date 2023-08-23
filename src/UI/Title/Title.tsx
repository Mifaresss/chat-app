import s from './Title.module.css'

interface TitlePropsType {
	title: string
	align?: 'start' | 'center' | 'end'
}

export function Title({ title, align }: TitlePropsType) {
	const styles = align ? { display: 'flex', justifyContent: align } : {}

	return (
		<div style={styles}>
			<h2 className={s.title}>
				{title}
			</h2>
		</div>
	)
}
