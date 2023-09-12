import s from './Title.module.css'

interface TitlePropsType {
	title: string
	justify?: 'start' | 'center' | 'end'
	className?: string
}

export function Title({ title, justify, className }: TitlePropsType) {
	const styles = justify ? { display: 'flex', justifyContent: justify } : {}

	return (
		<div style={styles}>
			<h2 className={[s.title, className].join(' ')}>{title}</h2>
		</div>
	)
}
