import s from './CommunicationInRooms.module.css'
import Image from 'next/image'
import { Title } from '@/UI/Title/Title'
import { InfoList } from '@/components/InfoList/InfoList'
import { communicationSectionData } from './data'

export function CommunicationInRooms() {
	return (
		<section className={s.communicationInRooms}>
			<Image
				className={s.contentImg}
				src={communicationSectionData.contentImg.src}
				alt={communicationSectionData.contentImg.alt}
			/>
			<div className={s.contentWrapper}>
				<div className={s.titleWrapper}>
					<Title title={communicationSectionData.title} />
				</div>
				<div className={s.content}>
					<InfoList
						className={s.infoList}
						imgId='communication-item-icon'
						listItems={communicationSectionData.listItems.data}
					/>
				</div>
			</div>
		</section>
	)
}
