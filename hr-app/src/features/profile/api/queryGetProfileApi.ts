import {useQuery} from '@tanstack/react-query';
import instance from '@/utils/axiosInstance';

export const queryGetProfileApi = () => {
    const {data: dataUserProfile} = useQuery({
        queryKey: ['getProfile'],
        queryFn: async() => {
            const res = await instance.get('/users')
            return res.data.data
        }
    })

    return{
        dataUserProfile
    }
}