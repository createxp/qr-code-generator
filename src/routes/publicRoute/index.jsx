import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts';


export function publicRoute(Component) {
    return function PublicRoute(props) {
        const auth = useAuth()
        const router = useRouter()
        if (auth.user) {
            if (router.pathname === '/auth') {
                router.push('/app')

                return 'Loading...'
            }
            if (router.pathname === '/') {
                router.push('/')
                return 'Loading...'
            }
        }
        return <Component {...props} />
    }
}