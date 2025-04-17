import * as Yup from 'yup';

export const createProfileValidationSchema = Yup.object().shape({
    birthDate: Yup.string().required('Birthdate is required'),
    address: Yup.string().required('Address is required'),
    file: Yup.array().of(
        Yup.mixed<File>().test('fileSize', 'Maximum file size is 2mb', file => {
            console.log(file)
            const limitFileSize = 1024 * 1024 * 2
            return file && file.size <= limitFileSize
        }).test('fileFormat', 'Format file not acceptable', file => {
            const formatFileAccepted = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

            return file && formatFileAccepted.includes(file?.type)
        })
    ).min(1, 'File must be selected')
})