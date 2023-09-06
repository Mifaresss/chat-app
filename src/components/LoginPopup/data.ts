import { string, object } from 'yup'

export const authValidationSchema = object({
	userName: string().min(2, "Ім'я повинно мати принаймні 2 букви").required("Ім'я обов'язкове"),
	userMood: string().required(''),
}).required()

export const loginPopupUsersMood = ['emoji-1', 'emoji-2', 'emoji-3', 'emoji-4', 'emoji-5']
