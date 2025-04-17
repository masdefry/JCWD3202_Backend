'use client';
import HeaderTitle from '@/components/HeaderTitle';
import FormProfile from '@/features/profile/components/FormProfile';
import instance from '@/utils/axiosInstance';
import authStore from '@/zustand/store';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const setAuth = authStore((state) => state.setAuth);
  const token = authStore((state: any) => state.token);
  const [employeeProfile, setEmployeeProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSignOut = () => {
    setAuth({ _token: null, email: null, role: null });
  };

  const handleGetEmployeeProfile = async () => {
    try {
      const response = await instance.get('/employee-profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setEmployeeProfile(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) handleGetEmployeeProfile();
  }, [token]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <main>
      <HeaderTitle title='User Account' />
      <section className='mt-5 mb-5'>
        {employeeProfile ? (
          <section className='flex flex-col gap-3'>
            <div className='bg-gray-100 rounded-md p-3 flex items-center justify-between'>
              <div className='bg-gray-300 w-[100px] h-[100px] rounded-full overflow-hidden'>
                <Image
                  src={`http://localhost:5001${employeeProfile?.imageProfile}`}
                  width={100}
                  height={100}
                  alt='Image Profile'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <label>
              <p>Birthdate</p>
              <h1 className='text-xl font-bold'>
                {employeeProfile?.birthDate}
              </h1>
            </label>
            <label>
              <p>Address</p>
              <h1 className='text-xl font-bold'>{employeeProfile?.address}</h1>
            </label>
            <button className='btn bg-red-500 text-white'> 
              Edit Profile
            </button>
          </section>
        ) : (
          <FormProfile token={token} />
        )}
        <button
          onClick={handleSignOut}
          className='btn bg-gray-300 w-full my-5'
        >
          Sign Out
        </button>
      </section>
    </main>
  );
}
