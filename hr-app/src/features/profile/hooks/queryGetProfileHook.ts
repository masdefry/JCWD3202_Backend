import { queryGetProfileApi } from '../api/queryGetProfileApi'

export const queryGetProfileHook = () => {
    const {dataUserProfile} = queryGetProfileApi()

    return{
        dataUserProfile
    }
}