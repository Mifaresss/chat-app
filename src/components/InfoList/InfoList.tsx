import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import s from './InfoList.module.css'
import Image from 'next/image'
interface InfoListProps {
	imgId: string
	listItems: string[]
	className?: string
}

export function InfoList({ imgId, listItems, className }: InfoListProps) {
	return (
		<ul className={[s.infoList, className].join(' ')}>
			{listItems.map((item, i) => (
				<li key={i} className={s.infoListItem}>
					<SvgIcon className={s.itemImg} src='icons/sprite.svg' name={imgId} />
					{item}
				</li>
			))}
		</ul>
	)
}
