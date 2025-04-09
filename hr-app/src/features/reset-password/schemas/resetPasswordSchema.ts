import * as Yup from 'yup';

export const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password harus memiliki minimal 8 karakter').required('Password Wajib Diisi'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Confirm password harus sama dengan password').required('Confirm password Wajib Diisi')
})