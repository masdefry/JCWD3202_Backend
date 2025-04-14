import authStore from '@/zustand/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function authGuard(WrappedComponent, allowedRoles) {
  return function WithAuthGuardComponent(props) {
    const role = authStore((state) => state.role);  
    const router = useRouter()

    useEffect(() => {
        if(role){
          if(!allowedRoles.includes(role)){
              router.push('/dashboard')
          }
        }
    }, [role])

    return <WrappedComponent {...props} />;
  };
}

export default authGuard;
