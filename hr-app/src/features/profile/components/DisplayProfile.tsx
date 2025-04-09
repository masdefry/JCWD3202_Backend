import {IDisplayProfileProps} from './types'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DisplayProfile({
    birthDate,
    phoneNumber, 
    address,
    imagesProfile
}: IDisplayProfileProps){
    const router = useRouter()

    return(
        <section className='p-10'>
            <section className='flex flex-col gap-3'>
                <div className='bg-gray-100 rounded-md p-3 flex items-center justify-between'>
                    <div className='bg-gray-300 w-[100px] h-[100px] rounded-full'>
                        <Image 
                            src={`http://localhost:5000/api/${imagesProfile[0]?.directory}/${imagesProfile[0]?.imageUrl}`}
                            width={100}
                            height={100}
                            alt='Image Profile'
                        />
                    </div>
                    <h1 className='text-xl font-bold'>
                        Muhammad Defryan
                    </h1>
                </div>
                <label className='form-control w-full'>
                    <div className='label'>
                        <span className='label-text-alt text-md'>Birthdate</span>
                    </div>
                    <h1 className='text-xl font-bold'>
                        {birthDate?.split('T')[0]}
                    </h1>
                </label>
                <label className='form-control w-full'>
                    <div className='label'>
                        <span className='label-text-alt text-md'>Phone Number</span>
                    </div>
                    <h1 className='text-xl font-bold'>
                        {phoneNumber}
                    </h1>
                </label>
                <label className='form-control w-full'>
                    <div className='label'>
                        <span className='label-text-alt text-md'>Address</span>
                    </div>
                    <h1 className='text-xl font-bold'>
                        {address}
                    </h1>
                </label>
                <button onClick={() => router.push('/dashboard/profile/edit')} className='btn bg-red-500 text-white w-full'>
                    Edit Profile
                </button>
            </section>
        </section>
    )
}