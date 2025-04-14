'use client';
import instance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import authStore from '@/zustand/store';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const token = authStore((state: any) => state.token);
  const setAuth = authStore((state: any) => state.setAuth);
  const router = useRouter()
  const pathName = usePathname()
  const [isAuthValid, setIsAuthValid] = useState(false);

  const handleSessionLogin = async () => {
    try {
      const response = await instance.get('/employee/session-login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuth({_token: response.data.data.token, _email: response.data.data.email, _role: response.data.data.role});  
      setIsAuthValid(true);
    } catch (error) {
      setIsAuthValid
      console.log(error);
    }
  };

  // Dijalankan Pertama Kali
  useEffect(() => {
    if(token){
      handleSessionLogin();
    }
  }, [token]);

  useEffect(() => {
    if(!isAuthValid && pathName !== '/') return router.push('/')
    if(isAuthValid && pathName === '/') return router.push('/dashboard')
  }, [isAuthValid, pathName])

  return <>{children}</>;
}
