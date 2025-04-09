'use client';
import HeaderTitle from '@/components/HeaderTitle'
import DisplayProfile from '@/features/profile/components/DisplayProfile';
import FormProfile from '@/features/profile/components/FormProfile';

import {queryGetProfileHook} from '@/features/profile/hooks/queryGetProfileHook';
import { mutateCreateProfileHook } from '@/features/profile/hooks/mutateCreateProfileHook';

export default function ProfilePage(){

    const {dataUserProfile} = queryGetProfileHook()
    const {mutateCreateProfile} = mutateCreateProfileHook()

    return(
        <main>
            <HeaderTitle title='Account Profile' />
            {
                dataUserProfile?.birthDate && dataUserProfile?.phoneNumber && dataUserProfile?.address?
                    <DisplayProfile
                        birthDate={dataUserProfile?.birthDate}
                        phoneNumber={dataUserProfile?.phoneNumber}
                        address={dataUserProfile?.address}
                        imagesProfile={dataUserProfile?.userProfileImage}
                    />
                :
                    <FormProfile
                        mutateCreateProfile={mutateCreateProfile}
                    />
            }
        </main>
    )
}