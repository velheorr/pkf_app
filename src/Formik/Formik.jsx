import * as Yup from "yup";


export const validationLogin = Yup.object({
    login: Yup.string().max(20, 'Длинна логина не более 20 символов*').required('Необходимо ввести логин*'),
    password: Yup.string().min(4, 'Длинна пароля не менее 4х символов*').required('Необходимо ввести пароль*'),
})

export const validationPBUser = Yup.object({
    department: Yup.string().required('Поле не может быть пустым*'),
    position: Yup.string().required('Поле не может быть пустым'),
    name: Yup.string().required('Поле не может быть пустым'),
    number_ext: Yup.string().required('Поле не может быть пустым'),
    number_in: Yup.string().required('Поле не может быть пустым'),
})


