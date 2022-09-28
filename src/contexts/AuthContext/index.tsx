import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User, UserCredential } from "firebase/auth";
import { doc, DocumentData, onSnapshot, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loading } from "../../components/utility";
import { auth, db } from "../../firebase";

interface AuthContextProps {
    user: User | null,
    signInWithGoogle: () => Promise<UserCredential>,
    logOut: () => Promise<void>,
    userData: DocumentData | undefined
}

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);
export const AuthProvider = (props: AuthProviderProps) => {
    const [user, setUser] = useState<null | User>(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [userData, setUserData] = useState<undefined | DocumentData>(undefined);

    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => (
        signInWithPopup(auth, provider)
    )
    const logOut = () => (
        signOut(auth)
    )

    useEffect(() => onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            setDataLoading(true)
            onSnapshot(doc(db, 'users', user.uid), (snapshot) => {
                if (!snapshot.exists()) {
                    setDoc(doc(db, 'users', user.uid), {
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        createdAt: serverTimestamp(),
                    })
                    setDataLoading(false)
                } else {
                    setUserData(snapshot.data())
                    setDataLoading(false)
                }
            })

        }
        else {
            setUser(null)
        }
        // setTimeout(() => setAuthLoading(false), 1000)
        setAuthLoading(false)
    }), [])

    const value = {
        user,
        signInWithGoogle,
        logOut,
        userData,
    }
    return (
        <AuthContext.Provider value={value}>
            {
                !authLoading && !dataLoading ? props.children : <Loading />
            }
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext<AuthContextProps>(AuthContext)
export default useAuth;