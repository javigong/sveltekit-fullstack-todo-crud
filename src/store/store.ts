import { auth } from '$lib/firebase/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { writable, type Writable } from 'svelte/store'

type AuthStore = Writable<{
  user: User | null;
  loading: boolean;
  data: {
      todos: string[];
  };
}>

export const authStore: AuthStore= writable({
  user: null,
  loading: true,
  data: { todos: [''] },
})

export const authHandlers = {
  signup: async (email: string, pass: string) => {
    await createUserWithEmailAndPassword(auth, email, pass)
  },
  login: async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass)
  },
  logout: async () => {
    await signOut(auth)
  },
}
