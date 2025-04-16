'use client';
import instance from '@/utils/axiosInstance';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function VerificationPage({
  params,
}: {
  params: { token: string };
}) {
  const { token } = params;

  const handleVerification = async () => {
    try {
      const response = await instance.post('/employee/verify-email', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      toast.success(response?.data?.message)
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
  };

  useEffect(() => {
    handleVerification();
  }, [])

  return <></>;
}
