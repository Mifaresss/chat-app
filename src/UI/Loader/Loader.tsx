import s from './Loader.module.css'

interface Props {}

export function Loader({}: Props) {
	return (
		<div className={s.ldsRipple}>
			<div></div>
			<div></div>
		</div>
	)
}
