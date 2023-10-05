import s from './Text.module.css'

interface Props {
	children: string
	className?: string
}

export function Text({ children, className }: Props) {
	return <p className={[s.text, className].join(' ')}>{children}</p>
}
