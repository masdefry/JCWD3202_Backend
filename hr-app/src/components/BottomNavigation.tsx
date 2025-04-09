import { HiOutlineHome } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from 'next/link';

export default function BottomNavigation() {
    return (
        <main className='p-3 grid grid-cols-5 fixed bottom-0 w-[500px] bg-gray-100 shadow-lg rounded-md'>
            <Link href='/dashboard'>
                <div className='flex flex-col items-center'>
                    <HiOutlineHome className='text-xl' />
                    Home
                </div>
            </Link>
            <Link href='/dashboard/hr/register-employee'>
                <div className='flex flex-col items-center'>
                    <BsPeople className='text-xl' />
                    Employee
                </div>
            </Link>
            <div className='flex flex-col items-center'>
                <LuClipboardList className='text-xl' />
                Request
            </div>
            <div className='flex flex-col items-center'>
                <HiOutlineInboxArrowDown className='text-xl' />
                Inbox
            </div>
            <Link href='/dashboard/profile'>
                <div className='flex flex-col items-center'>
                    <MdOutlineAccountCircle className='text-xl' />
                    Account
                </div>
            </Link>
        </main>
    );
}
