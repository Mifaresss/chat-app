import { HTMLAttributes } from 'react'
import s from './Title.module.css'

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	justify?: 'start' | 'center' | 'end'
	className?: string
	error?: boolean
}

export function Title({ title, justify, className, error, style, ...props }: TitleProps) {
	const styles = justify ? { display: 'flex', justifyContent: justify } : {}
	const errorStyle = error ? { color: 'red' } : {}

	return (
		<div style={{ ...styles, ...errorStyle, ...style }} {...props}>
			<h2 className={[s.title, className].join(' ')}>{title}</h2>
		</div>
	)
}
