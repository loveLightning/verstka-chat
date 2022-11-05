import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Невалидный email').required("Это обязательное поле"),
    password: yup.string()
        .required("Это обязательное поле")
        .min(8, "Пароль слишком короткий - должно быть не менее 8 символов"),
})
