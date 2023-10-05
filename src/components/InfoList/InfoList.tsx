import s from './InfoList.module.css'
interface InfoListProps {
	listStyleImg: string
	listItems: string[]
	className?: string
}

export function InfoList({ listStyleImg, listItems, className }: InfoListProps) {
	const itemStyle = {
		background: `url(${listStyleImg}) no-repeat top left`,
	}

	return (
		<ul className={[s.infoList, className].join(' ')}>
			{listItems.map((item, i) => (
				<li key={i} style={itemStyle} className={s.infoListItem}>
					{item}
				</li>
			))}
		</ul>
	)
}
