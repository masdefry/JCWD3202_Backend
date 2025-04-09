import HeaderTitle from '@/components/HeaderTitle'

export default function AttendanceLogPage(){
    return(
        <main>
            <HeaderTitle title='Attendance Log' />
            <section className='p-10'>
                <select className='select select-bordered w-full'>
                    <option disabled selected>Oct 2024</option>
                </select>
                <section className='flex justify-between rounded-md bg-gray-100 p-5 my-5 shadow-md'>
                    <div className='flex flex-col items-center'>
                        <h1>Absent</h1>
                        <h1>0</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1>Late Clock-In</h1>
                        <h1>5</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1>Early Clock-Out</h1>
                        <h1>3</h1>
                    </div>
                </section>
                <section>
                    <div className='flex justify-between border-b-2 py-5 px-10'>
                        <div>
                            <h1 className='font-bold'>24 Oct</h1>
                            <h1>Work Shift</h1>
                        </div>
                        <h1>08:50</h1>
                        <h1>18:01</h1>
                    </div>
                    <div className='flex justify-between border-b-2 py-5 px-10'>
                        <div>
                            <h1 className='font-bold'>24 Oct</h1>
                            <h1>Work Shift</h1>
                        </div>
                        <h1>08:50</h1>
                        <h1>18:01</h1>
                    </div>
                    <div className='flex justify-between border-b-2 py-5 px-10'>
                        <div>
                            <h1 className='font-bold'>24 Oct</h1>
                            <h1>Work Shift</h1>
                        </div>
                        <h1>08:50</h1>
                        <h1>18:01</h1>
                    </div>
                </section>
            </section>
        </main>
    )
}