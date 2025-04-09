import * as Yup from 'yup';

export const registerEmployeeSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name Wajib Diisi'), 
    lastName: Yup.string().required('Last Name Wajib Diisi'),
    email: Yup.string().email('Format Email Tidak Sesuai').required('Email Wajib Diisi'),  
    role: Yup.string().required('Role Wajib Diisi'), 
    salary: Yup.number().required('Salary Wajib Diisi'),
    shiftsId: Yup.number().required('Shift Wajib Diisi').min(1).max(2)
})