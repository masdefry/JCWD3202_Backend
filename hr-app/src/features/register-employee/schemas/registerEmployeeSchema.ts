import * as Yup from 'yup';

export const registerEmployeeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required'),
  phone: Yup.string().required('Phone number is required'),
  salary: Yup.number().required('Salary is required'),
  shiftId: Yup.number().required('Shift ID is required'),
  roleId: Yup.number().required('Role ID is required'),
});
