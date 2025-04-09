'use client';
import HeaderTitle from '@/components/HeaderTitle'
import TimeOffDetailModal from '@/features/hr/time-off/components/TimeOffDetailModal';

export default function TimeOffApprovalPage(){
    return(
        <main>
            <HeaderTitle title='Time Off Approval' />
            <section>
                <div className='flex flex-col md:flex md:flex-row justify-between items-center border-b-2 py-5 px-10'>
                    <div className='w-full flex justify-between items-center md:flex md:flex-col md:items-start'>
                        <div>
                            <h1 className='text-sm md:text-lg md:font-bold'>Sangalabror Pujianto</h1>
                            <h1 className='text-xs'>Staff</h1>
                        </div>
                        <h1 className='mt-3 text-sm md:text-lg'>08 Oct 2024</h1>
                    </div>
                    <div className='w-full md:w-fit'>
                        <TimeOffDetailModal />
                    </div>
                </div>
            </section>
        </main>
    )
}