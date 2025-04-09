'use client';
import { Form, Formik } from 'formik';
import { IoTime } from 'react-icons/io5';
import HeaderTitle from '@/components/HeaderTitle'

export default function RequestTimeOffPage(){
    return(
        <main>
            <HeaderTitle title='Request Time Off' />
            <section className='p-10'>
                <Formik>
                    <Form className='flex flex-col gap-5'>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text flex items-center gap-3'>Time Off Type</span>
                            </div>
                            <select className='select select-bordered'>
                                <option disabled selected>Choose One</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text flex items-center gap-3'>Date</span>
                            </div>
                            <input type='date' className='input input-bordered w-full' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text flex items-center gap-3'>Reason</span>
                            </div>
                            <input type='text' placeholder='Type Your Reason' className='input input-bordered w-full' />
                        </label>
                        <button className='btn bg-blue-600 text-white'>
                            Submit
                        </button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}