import {useMutation} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import { AxiosResponse } from 'axios'

interface IMutateCreateProfileApi{
    onSuccess: (res: AxiosResponse) => void, 
    onError: (err: any) => void
}

export const mutateCreateProfileApi = ({onSuccess, onError}: IMutateCreateProfileApi) => {
    const {mutate: mutateCreateProfile} = useMutation({
        mutationFn: async(fd: FormData) => {
            return await instance.post('/users', fd)
        },
        onSuccess, 
        onError 
    })

    return{
        mutateCreateProfile
    }
}