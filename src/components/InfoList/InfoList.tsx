import s from './InfoList.module.css'
interface InfoListPropsType {
	listStyleImg: string
	listItems: string[]
	gap?: string
}

export function InfoList({ listStyleImg, listItems, gap }: InfoListPropsType) {
	const listStyle = { gap }
	const itemStyle = {
		background: `url(${listStyleImg}) no-repeat left`,
	}

	return (
		<ul className={s.infoList} style={listStyle}>
			{listItems.map((item, i) =>
				<li key={i} style={itemStyle} className={s.infoListItem}>{item}</li>
			)}
		</ul>
	)
}
