import { app, translateError, setDocumentWithId, getDocument } from '../services/firebase'
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

import type { User } from '../services/firebase.d'
import type { ReactNode } from 'react'

type AuthContextValue = {
  signed: boolean
  user: User | null
  signInGoogle: () => Promise<User | null>
  signInEmail: (email: string, password: string) => Promise<User | null>
  signUpEmail: (name: string, email: string, password: string) => Promise<User | null>
}

const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const auth = getAuth(app)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storageUid = localStorage.getItem('uid')

    async function fetchUser() {
      if (!storageUid) return
      const userResponse = await getDocument<User>('user', storageUid)
      setUser(userResponse)
    }

    fetchUser()
  }, [localStorage])

  // TODO: Refactor this stuff to make it fit the new User schema

  async function createUserDocument(uid: string, name: string) {
    return await setDocumentWithId<User>('user', uid, {
      name,
      albums: [],
      profilePhotoUrl: '',
      bannerPhotoUrl: '',
    })
  }

  async function signInGoogle() {
    try {
      const { user: authUser } = await signInWithPopup(auth, googleProvider)
      const userDocument = await createUserDocument(authUser.uid, authUser.displayName!)
      setUser(userDocument)

      localStorage.setItem('uid', authUser.uid)

      return userDocument
    } catch (error) {
      return null
    }
  }

  async function signInEmail(email: string, password: string) {
    try {
      const { user: authUser } = await signInWithEmailAndPassword(auth, email, password)
      const userDocument = await getDocument<User>('user', authUser.uid)
      setUser(userDocument)

      localStorage.setItem('uid', authUser.uid)

      return userDocument
    } catch (error) {
      if (error instanceof FirebaseError) throw new Error(translateError(error))
    }

    return null
  }

  async function signUpEmail(name: string, email: string, password: string) {
    try {
      const { user: authUser } = await createUserWithEmailAndPassword(auth, email, password)
      const userDocument = await createUserDocument(authUser.uid, name)
      setUser(userDocument)
      localStorage.setItem('uid', authUser.uid)

      return userDocument
    } catch (error) {
      if (error instanceof FirebaseError) throw new Error(translateError(error))
    }

    return null
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signInEmail, signInGoogle, signUpEmail }}>
      {children}
    </AuthContext.Provider>
  )
}
