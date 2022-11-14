import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    fullname: yup
    .string()
    .required(''),
    email: yup.string().email('Невалидный email').required(""),
    password: yup.string()
        .required("")
        .min(8, "Пароль слишком короткий - должно быть не менее 8 символов"),
})
