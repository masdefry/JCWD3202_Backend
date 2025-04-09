import { mutateUpdateProfileApi } from '../api/mutateUpdateProfileApi'
import {toast} from 'react-toastify';

export const mutateUpdateProfileHook = () => {
    const {mutateUpdateProfile} = mutateUpdateProfileApi({
        onSuccess: (res) => {
            toast.success('Update Profile Success')
        },
        onError: (err) => {
            toast.error('Failed')
        }
    })

    return{
        mutateUpdateProfile
    }
}