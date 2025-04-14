'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import HeaderTitle from '@/components/HeaderTitle';
import { registerEmployeeSchema } from '@/features/register-employee/schemas/registerEmployeeSchema';
import instance from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import authStore from '@/zustand/store';

export default function RegisterEmployee() {
  const token = authStore((state) => state.token);  

  const handleRegisterEmployee = async({
    email, 
    password, 
    name, 
    phone, 
    salary, 
    shiftId, 
    roleId
  }: any) => {
    try {
      await instance.post('/employee/register', {
        email, 
        password, 
        name, 
        phone, 
        salary, 
        shiftId, 
        roleId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      toast.success('Employee created successfully')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main>
      <HeaderTitle title='Register Employee' />
      <section className='p-10'>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            phone: '',
            salary: null,
            shiftId: null,
            roleId: null,
          }}
          validationSchema={registerEmployeeSchema}
          onSubmit={(values) => {
            handleRegisterEmployee({
              email: values.email,
              password: values.password,
              name: values.name,
              phone: values.phone,
              salary: values.salary,
              shiftId: values.shiftId,
              roleId: values.roleId 
            })
          }}
        >
          <Form className='w-full flex flex-col gap-5 overflow-y-auto h-screen'>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Name</span>
              </div>
              <Field
                name='name'
                type='text'
                className='input input-bordered w-full'
                placeholder='Ex. John Doe'
              />
              <ErrorMessage
                name='name'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Phone Number</span>
              </div>
              <Field
                name='phone'
                type='text'
                className='input input-bordered w-full'
                placeholder='Ex. 081234567890'
              />
              <ErrorMessage
                name='phone'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Email</span>
              </div>
              <Field
                name='email'
                type='text'
                className='input input-bordered w-full'
                placeholder='Ex. johondoe@gmail.com'
              />
              <ErrorMessage
                name='email'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Password</span>
              </div>
              <Field
                name='password'
                type='password'
                className='input input-bordered w-full'
                placeholder='Ex. ******'
              />
              <ErrorMessage
                name='password'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Salary</span>
              </div>
              <Field
                name='salary'
                type='number'
                className='input input-bordered w-full'
                placeholder='Ex. 15000000'
              />
              <ErrorMessage
                name='salary'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Role</span>
              </div>
              <Field
                as='Select'
                name='roleId'
                className='select select-bordered w-full'
              >
                <option
                  disabled
                  selected
                >
                  Select Employee Role
                </option>
                <option value={1}>HR</option>
                <option value={2}>MANAGER</option>
                <option value={3}>STAFF</option>
              </Field>
              <ErrorMessage
                name='roleId'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Shift</span>
              </div>
              <Field
                as='Select'
                name='shiftId'
                className='select select-bordered w-full'
              >
                <option
                  disabled
                  selected
                >
                  Select Employee Shift
                </option>
                <option value={1}>09:00 - 18:00</option>
                <option value={2}>13:00 - 22:00</option>
              </Field>
              <ErrorMessage
                name='shiftId'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <button
              type='submit'
              className='btn bg-blue-600 text-white w-full'
            >
              Create Employee
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
