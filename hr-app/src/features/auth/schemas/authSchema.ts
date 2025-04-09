import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
    email: Yup.string().email('Email Tidak Valid').required('Email Wajib Diisi'), 
    password: Yup.string().required('Password Wajib Diisi')
})