import { Loader } from '@/UI/Loader/Loader'

interface Props {}

export function CreatingPrivateChatLoading({}: Props) {
	return (
		<div
			style={{
				position: 'absolute',
				backdropFilter: 'blur(0.1875rem)',
				backgroundColor: 'rgba(244, 246, 255, 0.2)',
				borderRadius: '1.875rem',
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Loader />
		</div>
	)
}
