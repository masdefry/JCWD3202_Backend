'use client';
import instance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import authStore from '@/zustand/store';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const token = authStore((state: any) => state.token);
  const setAuth = authStore((state: any) => state.setAuth);
  const router = useRouter();
  const pathName = usePathname();
  const [isHandleSessionLoginDone, setIsHandleSessionLoginDone] =
    useState(false);

  const handleSessionLogin = async () => {
    try {
      const response = await instance.get('/employee/session-login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuth({
        _token: response.data.data.token,
        _email: response.data.data.email,
        _role: response.data.data.role,
      });
      setIsHandleSessionLoginDone(true);
    } catch (error) {
      setAuth({
        _token: null,
        _email: null,
        _role: null,
      });
      setIsHandleSessionLoginDone(true);
    }
  };

  /*
    This useEffect executed 2 times, 
    once when the component mounts and once when the token changes.
  */
  useEffect(() => {
    if (token) {
      handleSessionLogin();
    } else {
      setIsHandleSessionLoginDone(true);
    }
  }, [token]);

  useEffect(() => {
    if (isHandleSessionLoginDone) {
      if (token && pathName === '/') return router.push('/dashboard');
      if (!token) {
        if (pathName !== '/' && pathName.split('/')[1] !== 'verification') {
          router.push('/');
        }
      }
    }
  }, [isHandleSessionLoginDone, pathName]);

  return <>{children}</>;
}
