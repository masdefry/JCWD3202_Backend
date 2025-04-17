'use client';
import HeaderTitle from '@/components/HeaderTitle';
import FormProfile from '@/features/profile/components/FormProfile';
import instance from '@/utils/axiosInstance';
import authStore from '@/zustand/store';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const setAuth = authStore((state) => state.setAuth);
  const token = authStore((state: any) => state.token);
  const [employeeProfile, setEmployeeProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true)

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
      console.log(response)
      setEmployeeProfile(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    if (token) handleGetEmployeeProfile();
  }, [token]);

  if(loading) return <h1>Loading...</h1>

  return (
    <main>
      <HeaderTitle title='User Account' />
      <section className='mt-5 mb-5'>
        {employeeProfile ? (
          <section className='flex flex-col gap-3'>
            <div className='bg-gray-100 rounded-md p-3 flex items-center justify-between'>
              <div className='bg-gray-300 w-[100px] h-[100px] rounded-full'></div>
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
          </section>
        ) : (
          <FormProfile />
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
