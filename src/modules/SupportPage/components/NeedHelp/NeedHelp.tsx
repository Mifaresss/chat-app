import s from './NeedHelp.module.css'
import Image from 'next/image'
import { Title } from '@/UI/Title/Title'
import { InfoList } from '@/components/InfoList/InfoList'
import { needHelpData } from './data'
import { Text } from '@/UI/Text/Text'

export function NeedHelp() {
	return (
		<section className={s.needHelp}>
			<div className={s.contentWrapper}>
				<div className={s.titleWrapper}>
					<Title title={needHelpData.title} />
				</div>
				<div className={s.content}>
					<Text>{needHelpData.textContent}</Text>
				</div>
			</div>
			<Image
				className={s.contentImg}
				src={needHelpData.contentImg.src}
				alt={needHelpData.contentImg.alt}
			/>
		</section>
	)
}
