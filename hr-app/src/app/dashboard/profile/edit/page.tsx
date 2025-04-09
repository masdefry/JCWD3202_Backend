'use client';
import {queryGetProfileHook} from '@/features/profile/hooks/queryGetProfileHook'
import FormProfile from '@/features/profile/components/FormProfile'
import { mutateUpdateProfileHook } from './../../../../features/profile/hooks/mutateUpdateProfileHook';

export default function EditProfilePage(){

    const {dataUserProfile} = queryGetProfileHook()
    const {mutateUpdateProfile} = mutateUpdateProfileHook()

    if(!dataUserProfile?.birthDate && !dataUserProfile?.address && !dataUserProfile?.phoneNumber) return(
        <></>
    )

    return(
        <main>
            <FormProfile 
                birthDate={dataUserProfile?.birthDate}
                address={dataUserProfile?.address}
                phoneNumber={dataUserProfile?.phoneNumber}
                isEdit={true}
                mutateUpdateProfile={mutateUpdateProfile}
            />
        </main>
    )
}