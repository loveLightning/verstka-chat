import * as yup from 'yup';

export const profileSchema = yup.object().shape({
    fullname: yup
    .string()
    .trim()
    .required('Это обязательное поле')
    .matches(
      /^\s*[\S]+(\s[\S]+)+\s*$/gms,
      'Введите имя и фамилию',
    ),
    email: yup.string().email('Невалидный email').required("Это обязательное поле"),
    linkWebsite: yup.string(),
})
