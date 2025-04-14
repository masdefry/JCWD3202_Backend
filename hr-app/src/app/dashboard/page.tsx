'use client';
import { IoReceipt } from 'react-icons/io5';
import { HiClipboardList } from 'react-icons/hi';
import { IoIosTime } from 'react-icons/io';
import Link from 'next/link';
import authStore from '@/zustand/store';

export default function DashboardPage() {
  const email = authStore((state: any) => state.email);
  const role = authStore((state: any) => state.role);

  return (
    <main>
      <section className='py-5'>
        <h1 className='text-4xl font-bold'>Selamat Pagi</h1>
        <h1 className='text-4xl'>{email}</h1>
        <p className='bg-red-500 text-white p-2 rounded-md w-fit'>{role}</p>
        <h1 className='text-md font-thin py-5'>
          Jangan lupa presensi hari ini.
        </h1>
      </section>
      <section className='bg-red-500 text-white rounded-md p-5'>
        <h1 className='text-md font-thin'>Shift-01</h1>
        <h1 className='text-xl font-bold'>09:00 - 18:00</h1>
        <div className='flex gap-5'>
          <button className='btn bg-white flex-1'>Clock-In</button>
          <button className='btn bg-white flex-1'>Clock-Out</button>
        </div>
      </section>
      <section className='grid grid-cols-3 rounded-md bg-gray-100 p-5 my-5'>
        <Link href='/dashboard/hr/time-off/approval'>
          <div className='col-1 flex flex-col items-center'>
            <IoReceipt className='text-green-600 text-4xl' />
            <h1>Approval</h1>
          </div>
        </Link>
        <Link href='/dashboard/attendance-log'>
          <div className='col-1 flex flex-col items-center'>
            <HiClipboardList className='text-orange-600 text-4xl' />
            <h1>Attendance Log</h1>
          </div>
        </Link>
        <Link href='/dashboard/time-off'>
          <div className='col-1 flex flex-col items-center'>
            <IoIosTime className='text-blue-600 text-4xl' />
            <h1>Time Off</h1>
          </div>
        </Link>
      </section>
    </main>
  );
}
