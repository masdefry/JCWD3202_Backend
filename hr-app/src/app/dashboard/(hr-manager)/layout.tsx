'use client';
import authStore from '@/zustand/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const role = authStore((state) => state.role);

  useEffect(() => {
    if (role) {
      if (role !== 'HR' || role !== 'MANAGER') {
        router.push('/dashboard');
      }
    }
  }, [role]);

  return <>{children}</>;
}
