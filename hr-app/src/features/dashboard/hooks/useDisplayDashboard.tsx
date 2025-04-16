import authStore from '@/zustand/store';
import { handlePostClockInAttendance } from '../api/handlePostClockInAttendance';
import { handleGetEmployeeAttendance } from '../api/handleGetEmployeeAttendances';
import { useEffect, useState } from 'react';

export default function useDisplayDashboard(){
    const email = authStore((state: any) => state.email);
    const role = authStore((state: any) => state.role);
    const token = authStore((state: any) => state.token);
    // const [data, setData] = useState([])

    // const handleEmployeeAttendances = () => {
    //     const response: any = handleGetEmployeeAttendance()
    //     setData(response)
    // }

    // useEffect(() => {
    //     handleEmployeeAttendances()
    // }, [])

    return {
        email, 
        role,
        token, 
        handlePostClockInAttendance, 
        // data
    }
}