'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authValidationSchema } from '@/features/auth/schemas/authValidationSchema';
import instance from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import authStore from '@/zustand/store';

interface IHandleAuthLoginProps {
  email: string;
  password: string;
}

export default function HomePage() {
  const router = useRouter();
  const setAuth = authStore((state: any) => state.setAuth);

  const handleAuthLogin = async ({
    email,
    password,
  }: IHandleAuthLoginProps) => {
    try {
      const response: AxiosResponse<any, any> = await instance.post(
        '/employee/login',
        {
          email,
          password,
        }
      );

      toast.success(response.data.message);
      setAuth({
        _token: response.data.data.token,
        _email: response.data.data.email,
        _role: response.data.data.role,
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <main>
      <section className='p-10'>
        <h1 className='text-4xl font-bold'>Selamat Datang</h1>
        <h1 className='text-md font-light'>
          Masukan email dan password untuk masuk
        </h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={authValidationSchema}
          onSubmit={(values) => {
            handleAuthLogin({
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form className='w-full py-10 flex flex-col gap-5'>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Email</span>
              </div>
              <Field
                name='email'
                type='text'
                className='input input-bordered w-full'
              />
              <ErrorMessage
                name='email'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Password</span>
              </div>
              <Field
                name='password'
                type='password'
                className='input input-bordered w-full'
              />
              <ErrorMessage
                name='password'
                component={'div'}
                className='text-red-500 text-sm'
              />
            </label>
            <button className='btn bg-red-500 text-white w-full'>
              Sign In
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
