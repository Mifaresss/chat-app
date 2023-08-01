import s from './InfoList.module.css'
interface InfoListPropsType {
	listStyleImg: string
	listItems: string[]
}

export function InfoList({ listStyleImg, listItems }: InfoListPropsType) {
	const itemStyle = {
		background: `url(${listStyleImg}) no-repeat left`,
	}

	return (
		<ul className={s.infoList}>
			{listItems.map((item, i) =>
				<li key={i} style={itemStyle} className={s.infoListItem}>{item}</li>
			)}
		</ul>
	)
}
