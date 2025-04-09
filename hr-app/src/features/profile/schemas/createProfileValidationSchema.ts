import * as Yup from 'yup';

export const createProfileValiditionSchema = Yup.object().shape({
    birthDate: Yup.string().required('Birthdate Wajib Diisi'),
    phoneNumber: Yup.string().required('Phone Number Wajib Diisi'),
    address: Yup.string().required('Address Wajib Diisi'),
    file: Yup.array().of(
        Yup.mixed<File>()
        .test('fileSize', 'Maksimum File Size 2Mb', file => {
            const limitFileSize = 2000000
            return file && file.size <= limitFileSize
        })
        .test('fileFormat', 'Format Tidak Diizinkan', file => {
            const fileFormatAccepted = ['jpg', 'jpeg', 'png', 'webp', 'svg']
            return file && fileFormatAccepted.includes(file.type.split('/')[1])
        })
    ).min(1, 'File Wajib Dipilih')
})