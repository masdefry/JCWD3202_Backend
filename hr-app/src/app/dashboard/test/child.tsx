'use client';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';

export default function ChildComponent(){    
    const { values, setFieldValue } = useFormikContext();
    
    const addAddress = () => {
        const currentAddressLists = [...values.addressLists]

        currentAddressLists.push({
            receiverName: values.receiverName,
            phoneNumber: values.phoneNumber,
        })

        setFieldValue('addressLists', currentAddressLists)
        console.log(values)
    }
    
    return(
        <>
            <label className='form-control w-full'>
                <div className='label'>
                    <span className='label-text-alt'>Receiver Name</span>
                </div>
                <Field name='receiverName' type='text' className='input input-bordered w-full' />
                <ErrorMessage name='receiverName' component={'div'} className='text-red-500 text-sm' />
            </label>
            <label className='form-control w-full'>
                <div className='label'>
                    <span className='label-text-alt'>Phone Number</span>
                </div>
                <Field name='phoneNumber' type='text' className='input input-bordered w-full' />
                <ErrorMessage name='phoneNumber' component={'div'} className='text-red-500 text-sm' />
            </label>
            <button onClick={addAddress} className='btn bg-red-500 text-white w-full'>
                Add Address
            </button>
        </>
    )
}