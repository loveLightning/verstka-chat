import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    fullname: yup
    .string()
    .trim()
    .required('')
    .matches(
      /^\s*[\S]+(\s[\S]+)+\s*$/gms,
      'Введите имя и фамилию',
    ),
    email: yup.string().email('Невалидный email').required(""),
    password: yup.string()
        .required("")
        .min(8, "Пароль слишком короткий - должно быть не менее 8 символов"),
})
