import s from './SvgIcon.module.css'

interface PropsType {
	src: string;
	name: string;
	width?: number;
	height?: number;
	className?: string;
}

export function SvgIcon({ src, name, width, className, height }: PropsType) {

	return (
		<svg
			width={width}
			height={height}
			className={[s.image, className].join(' ')}
		>
			<use xlinkHref={`/images/${src}#${name}`} />
		</svg>
	)
}
