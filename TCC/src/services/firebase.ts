import { FirebaseError, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB2pSkbCAtTz7Ftydxpi-OjK6FvFfIizEM',
  authDomain: 'moodie-b817f.firebaseapp.com',
  projectId: 'moodie-b817f',
  storageBucket: 'moodie-b817f.appspot.com',
  messagingSenderId: '1070091312549',
  appId: '1:1070091312549:web:25fcf1c592aedb3fe99c4c',
  measurementId: 'G-F3575JL6YM',
}

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)

export function translateError(firebaseError: FirebaseError) {
  switch (firebaseError.code) {
    case 'auth/email-already-in-use':
      return 'E-mail já está em uso'
    case 'auth/invalid-email':
      return 'E-mail inserido é inválido'
    case 'auth/invalid-password':
      return 'Senha inserida precisa ser mais forte'
    case 'auth/user-not-found':
      return 'E-mail não cadastrado'
    case 'auth/wrong-password':
      return 'E-mail ou senha inválidos'

    default:
      return firebaseError.code
  }
}
