import s from './UserName.module.css'

interface Props {
	name: string
	deleted?: boolean
}

export function UserName({ name, deleted }: Props) {
	return (
		<p className={s.userName}>
			{name}
			{deleted && <span className={s.deleted}>(deleted)</span>}
		</p>
	)
}
