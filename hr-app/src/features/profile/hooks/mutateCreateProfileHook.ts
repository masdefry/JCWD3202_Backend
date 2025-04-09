import { mutateCreateProfileApi } from '../api/mutateCreateProfileApi'
import {toast} from 'react-toastify';

export const mutateCreateProfileHook = () => {
    const {mutateCreateProfile} = mutateCreateProfileApi({
        onSuccess: (res) => {
            toast.success('Create Profile Success')
        }, 

        onError: (err) => {
            toast.error('Failed')
        }
    })

    return{
        mutateCreateProfile
    }
}