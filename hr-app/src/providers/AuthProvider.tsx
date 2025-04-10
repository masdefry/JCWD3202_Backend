'use client';
import instance from '@/utils/axiosInstance';
import { useEffect } from 'react';
import authStore from '@/zustand/store';
import { ReactNode } from 'react';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const token = authStore((state: any) => state.token);
  const setAuth = authStore((state: any) => state.setAuth);

  const handleSessionLogin = async () => {
    try {
      const response = await instance.get('/employee/session-login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuth({_token: response.data.data.token, _email: response.data.data.email, _role: response.data.data.role});  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(token){
      handleSessionLogin();
    }
  }, [token]);

  return <>{children}</>;
}
