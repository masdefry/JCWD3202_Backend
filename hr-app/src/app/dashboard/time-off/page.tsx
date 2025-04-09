'use client';
import Link from 'next/link';
import HeaderTitle from '@/components/HeaderTitle'

export default function TimeOffPage(){
    return(
        <main>
            <HeaderTitle title='Time Off' />
            <section className='p-10'>
                <section className='py-5 bg-gray-100 rounded-md flex flex-col items-center'>
                    <h1 className='text-sm font-light text-gray-500'>Saldo Cuti Tahunan</h1>
                    <h1 className='text-2xl font-bold'>12 Hari</h1>
                </section>
                <section className='py-5'>
                    <select className='select select-bordered w-full'>
                        <option disabled selected>Oct 2024</option>
                    </select>
                </section>
                <section>
                    <div className='flex justify-between border-b-2 py-5 px-10'>
                        <div>
                            <h1 className='font-bold'>Sakit</h1>
                            <h1>08 Oct 2024</h1>
                        </div>
                        <h1 className='text-green-600'>Approved</h1>
                    </div>
                    <div className='flex justify-between border-b-2 py-5 px-10'>
                        <div>
                            <h1 className='font-bold'>Sakit</h1>
                            <h1>08 Oct 2024</h1>
                        </div>
                        <h1 className='text-green-600'>Approved</h1>
                    </div>
                    <div className='flex justify-between border-b-2 py-5 px-10'>
                        <div>
                            <h1 className='font-bold'>Sakit</h1>
                            <h1>08 Oct 2024</h1>
                        </div>
                        <h1 className='text-green-600'>Approved</h1>
                    </div>
                </section>
                <section className='py-10'>
                    <Link href='/dashboard/time-off/request'>
                        <button className='btn bg-blue-600 text-white w-full'>
                            Request Time Off
                        </button>
                    </Link>
                </section>
            </section>
        </main>
    )
}