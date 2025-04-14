'use client';
import HeaderTitle from '@/components/HeaderTitle';
import FormProfile from '@/features/profile/components/FormProfile';
import authStore from '@/zustand/store';

export default function ProfilePage() {
  const setAuth = authStore((state) => state.setAuth);

  const handleSignOut = () => {
    setAuth({ _token: null, email: null, role: null})
  }

  return (
    <main>
      <HeaderTitle title='User Account' />
      <section className='mt-5 mb-5'>
        <FormProfile />
        <button onClick={handleSignOut} className='btn bg-gray-300 w-full my-5'>Sign Out</button>
      </section>
    </main>
  );
}
