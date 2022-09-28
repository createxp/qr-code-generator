import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts';
import { Loading } from '../../components/utility';

export function privateRoute(Component) {
    return function PrivateRoute(props) {
        const auth = useAuth()
        const router = useRouter()
        if (!auth.user) {
            router.push('/auth')
            return <Loading />
        }
        return <Component {...props} />
    }
}