<script lang="ts">
  import { auth, db } from '$lib/firebase/firebase'
  import { doc, getDoc, setDoc } from 'firebase/firestore'
  import { onMount } from 'svelte'
  import { authStore } from '../store/store'
    import type { DocumentData } from 'firebase/firestore'

  const nonAuthRoutes = ['/', 'aboutus']
  
  onMount(() => {
    console.log('Mounting')
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const currentPath = window.location.pathname

      if (!user && !nonAuthRoutes.includes(currentPath)) {
        window.location.href = '/'
        return
      }

      if (user && currentPath === '/') {
        window.location.href = '/dashboard'
        return
      }

      if (!user) {
        return
      }

      let dataToSetToStore: DocumentData
      const docRef = user ? doc(db, 'users', user.uid) : null
      const docSnap = docRef ? await getDoc(docRef) : null

      if (user && !docSnap?.exists()) {
        const userRef = doc(db, 'users', user.uid)
        dataToSetToStore = {
          email: user.email,
          todos: [],
        }
        await setDoc(userRef, dataToSetToStore, { merge: true })
      }

      if (user && docSnap?.exists()) {
        const userData = docSnap.data()
        dataToSetToStore = userData
      }

      if (user) {
        authStore.update((curr) => ({
          ...curr,
          user,
          data: dataToSetToStore as any,
          loading: false,
        }))
      }
    })
  })
</script>

<div class="mainContainer">
  <slot />
</div>

<style>
  .mainContainer {
    min-height: 100vh;
    background: linear-gradient(to right, #062543, #010126);
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>
