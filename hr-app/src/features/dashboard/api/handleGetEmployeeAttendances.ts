import { toast } from 'react-toastify';
import instance from '@/utils/axiosInstance';

export const handleGetEmployeeAttendance = async () => {
  try {
    const response = instance.get('/attendances')
    return response
  } catch (error) {
    toast.error('');
  }
};
