import s from './Text.module.css'

interface PropsType {
	children: string
	className?: string
}

export function Text({ children, className }: PropsType) {

	return (
		<p className={[s.text, className].join(' ')}>{children}</p>
	)
}
