export interface IDisplayProfileProps{
    birthDate: string, 
    phoneNumber: string, 
    address: string,
    imagesProfile: any[]
}

export interface IFormProfile extends Partial<Pick<IDisplayProfileProps, 'birthDate' | 'phoneNumber' | 'address'>>{
    mutateCreateProfile?: (fd: FormData) => void;
    mutateUpdateProfile?: (fd: FormData) => void;
    isEdit?: boolean
}