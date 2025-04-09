'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function RegisterEmployee() {
  return (
    <main>
      <section className='p-10'>
        <Formik initialValues={{}}>
          <Form className='w-full flex flex-col gap-5 overflow-y-auto h-screen'>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Firstname</span>
              </div>
              <Field
                name='firstName'
                type='text'
                className='input input-bordered w-full'
                placeholder='Ex. John'
              />
              <ErrorMessage
                name='firstName'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Lastname</span>
              </div>
              <Field
                name='lastName'
                type='text'
                className='input input-bordered w-full'
                placeholder='Ex. Doe'
              />
              <ErrorMessage
                name='lastName'
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
                <span className='label-text-alt'>Salary</span>
              </div>
              <Field
                name='salary'
                type='text'
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
                name='role'
                className='select select-bordered w-full'
              >
                <option
                  disabled
                  selected
                >
                  Select Employee Role
                </option>
                <option value='HR'>HR</option>
                <option value='MANAGER'>MANAGER</option>
                <option value='STAFF'>STAFF</option>
              </Field>
              <ErrorMessage
                name='role'
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
                name='shiftsId'
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
                name='shiftsId'
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
