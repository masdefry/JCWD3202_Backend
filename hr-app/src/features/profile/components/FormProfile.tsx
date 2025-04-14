import {Formik, Form, Field, ErrorMessage} from 'formik'; 

export default function FormProfile(){
    return(
        <Formik
            onSubmit={(values) => {
            }}
        >
            {
                ({setFieldValue}) => (
                    <Form className='flex flex-col gap-3'>
                        <div className='bg-gray-100 rounded-md p-3 flex items-center justify-between'>
                            <div className='bg-gray-300 w-[100px] h-[100px] rounded-full'>

                            </div>
                            <input
                                id='file'
                                name='file'
                                type='file'
                                className='w-1/2'
                                multiple
                                onChange={(e) => 
                                    setFieldValue('file', Array.from(e?.currentTarget?.files || []))
                                }
                            />
                        </div>
                        <ErrorMessage name='file' component={'div'} className='text-red-500 text-sm' />
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Birthdate</span>
                            </div>
                            <Field name='birthDate' type='date' className='input input-bordered w-full' />
                            <ErrorMessage name='birthDate' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Phone Number</span>
                            </div>
                            <Field name='phoneNumber' type='string' className='input input-bordered w-full' />
                            <ErrorMessage name='phoneNumber' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Address</span>
                            </div>
                            <Field name='address' type='string' className='input input-bordered w-full' />
                            <ErrorMessage name='address' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <button className='btn bg-red-500 text-white'>
                            Submit Profile
                        </button>
                    </Form>
                )
            }
        </Formik>
    )
}