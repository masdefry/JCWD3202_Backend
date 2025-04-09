'use client';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import {authSchema} from '@/features/auth/schemas/authSchema'
import ChildComponent from './child';

export default function TestPage(){
    return(
        <>
            <Formik
                initialValues={{
                    email: '', 
                    password: '',
                    receiverName: '',
                    phoneNumber: '',
                    addressLists: []
                }}
                validationSchema={authSchema}
                onSubmit={(values) => {
                    
                }}
            >
                <Form className='w-full py-10 flex flex-col gap-5'>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text-alt'>Email</span>
                        </div>
                        <Field name='email' type='text' className='input input-bordered w-full' />
                        <ErrorMessage name='email' component={'div'} className='text-red-500 text-sm' />
                    </label>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text-alt'>Password</span>
                        </div>
                        <Field name='password' type='password' className='input input-bordered w-full' />
                        <ErrorMessage name='password' component={'div'} className='text-red-500 text-sm' />
                    </label>
                    <ChildComponent />
                    <button className='btn bg-red-500 text-white w-full'>
                        Submit
                    </button>
                </Form>
                </Formik>
        </>
    )
}