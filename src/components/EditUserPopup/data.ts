import { string, object } from 'yup'

export const authValidationSchema = object({
	userName: string()
		.trim()
		.min(2, "Ім'я повинно мати принаймні 2 символи")
		.max(20, 'Не більше 20 символів')
		.required("Ім'я обов'язкове"),
	userMood: string().required('Обери свій настрій, будь ласка:)'),
}).required()

export const loginPopupUsersMood = ['emoji-1', 'emoji-2', 'emoji-3', 'emoji-4', 'emoji-5']
