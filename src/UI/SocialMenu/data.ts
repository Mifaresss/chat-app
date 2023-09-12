import facebookIcon from '@images/social/facebook.svg'
import InstagramIcon from '@images/social/Instagram.svg'

interface SocialMediaCard {
	img: {
		src: string
		alt: string
	}
	href: string
}

export const socialMediaCards: SocialMediaCard[] = [
	{
		img: { src: facebookIcon, alt: 'Іконка фейсбука' },
		href: 'https://www.facebook.com',
	},
	{
		img: { src: InstagramIcon, alt: 'Іконка інстаграма' },
		href: 'https://www.instagram.com',
	},
]
