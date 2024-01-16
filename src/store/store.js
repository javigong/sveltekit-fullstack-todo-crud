import { auth } from '$lib/firebase/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { writable } from 'svelte/store'

export const authStore = writable({
  user: {},
  loading: true,
  data: { todos: [] },
})

export const authHandlers = {
  signup: async (/** @type {string} */ email, /** @type {string} */ pass) => {
    await createUserWithEmailAndPassword(auth, email, pass)
  },
  login: async (/** @type {string} */ email, /** @type {string} */ pass) => {
    await signInWithEmailAndPassword(auth, email, pass)
  },
  logout: async () => {
    await signOut(auth)
  },
}
