import {useMutation} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import { AxiosResponse } from 'axios'

interface IMutateUpdateProfileApi{
    onSuccess: (res: AxiosResponse) => void, 
    onError: (err: any) => void
}

export const mutateUpdateProfileApi = ({onSuccess, onError}: IMutateUpdateProfileApi) => {
    const {mutate: mutateUpdateProfile} = useMutation({
        mutationFn: async(fd) => {
            return await instance.put('/users', fd)
        }, 

        onSuccess, 
        onError
    })

    return {
        mutateUpdateProfile
    }
}