import {Formik, Form, Field, ErrorMessage} from 'formik'; 
import { createProfileValidationSchema } from './schemas/createProfileValidationSchema';
import instance from '@/utils/axiosInstance';
import authStore from '@/zustand/store';

export default function FormProfile(){
    const token = authStore((state: any) => state.token)

    const handleCreateProfile = async (formData: FormData) => {
        try {
            console.log(token)
            await instance.post('/employee-profile', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Formik
            initialValues={{
                birthDate: '',
                address: '', 
                file: [] as File[]
            }}
            validationSchema={createProfileValidationSchema}
            onSubmit={(values) => {
                const formData = new FormData()

                formData.append('data', JSON.stringify({birthDate: values.birthDate, address: values.address}))
                values.file.forEach(file => {
                    formData.append('images', file)
                })

                handleCreateProfile(formData)
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