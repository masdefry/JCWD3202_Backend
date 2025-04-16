import instance from '@/utils/axiosInstance';
import { toast } from 'react-toastify';

export const handlePostClockInAttendance = async(token: string) => {
  try {
    const response = await instance.post(
      '/attendances/clock-in',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success(response.data.message);
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
