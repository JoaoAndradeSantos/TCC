import { app, translateError } from '../services/firebase'
import { createContext, useState } from 'react'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

import type { ReactNode } from 'react'
import type { User } from 'firebase/auth'

type AuthContextValue = {
  signed: boolean
  signInGoogle: () => Promise<boolean>
  signInEmail: (email: string, password: string) => Promise<boolean>
  signUpEmail: (email: string, password: string, passwordConfirmation: string) => Promise<boolean>
}

const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const auth = getAuth(app)
  const [user, setUser] = useState<User>()

  async function signInGoogle() {
    try {
      const { user } = await signInWithPopup(auth, googleProvider)
      setUser(user)
      localStorage.setItem('uid', user.uid)

      return true
    } catch (error) {
      return false
    }
  }

  async function signInEmail(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      localStorage.setItem('uid', user.uid)

      return true
    } catch (error) {
      if (error instanceof FirebaseError) throw new Error(translateError(error))
    }

    return false
  }

  async function signUpEmail(email: string, password: string, passwordConfirmation: string) {
    if (password !== passwordConfirmation) throw new Error('As senhas não coincidem')

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      setUser(user)
      localStorage.setItem('uid', user.uid)

      return true
    } catch (error) {
      if (error instanceof FirebaseError) throw new Error(translateError(error))
    }

    return false
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, signInEmail, signInGoogle, signUpEmail }}>
      {children}
    </AuthContext.Provider>
  )
}
