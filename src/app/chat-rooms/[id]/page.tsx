import { Title } from '@/UI/Title/Title'

interface Props {
	params: {
		id: string
	}
}

export default function Room({ params: { id } }: Props) {
	return <Title style={{ margin: 'auto' }} title={id} />
}
