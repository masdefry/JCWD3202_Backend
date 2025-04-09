'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ResetPasswordPage({ params }: any) {
  return (
    <main>
      <Formik>
        <Form className='w-full py-10 flex flex-col gap-5'>
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text-alt'>Password</span>
            </div>
            <Field
              name='password'
              type='password'
              className='input input-bordered w-full'
            />
            <ErrorMessage
              name='password'
              component={'div'}
              className='text-red-500 text-sm'
            />
          </label>
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text-alt'>Confirm Password</span>
            </div>
            <Field
              name='confirmPassword'
              type='password'
              className='input input-bordered w-full'
            />
            <ErrorMessage
              name='confirmPassword'
              component={'div'}
              className='text-red-500 text-sm'
            />
          </label>
          <button className='btn bg-red-500 text-white w-full'>Submit</button>
        </Form>
      </Formik>
    </main>
  );
}
