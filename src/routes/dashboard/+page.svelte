<script lang='ts'>
  import { db } from '$lib/firebase/firebase'
  import { doc, setDoc } from 'firebase/firestore'
  import { authHandlers, authStore } from '../../store/store'
  import TodoItem from '$lib/TodoItem.svelte'

  let todoList= ['']
  let currTodo = ''
  let error = false

  authStore.subscribe((curr) => {
    todoList = curr.data.todos
  })

  function addTodo() {
    if (!currTodo) {
      error = true
    } else {
      todoList = [...todoList, currTodo]
      currTodo = ''
    }
  }

  function editTodo(index: number) {
    let newTodoList = todoList.filter((val, i) => i !== index)
    currTodo = todoList[index]
    todoList = newTodoList
  }

  function removeTodo(index: number) {
    let newTodoList = todoList.filter((val, i) => i !== index)
    todoList = newTodoList
  }

  async function saveTodos() {
    try {
      // @ts-ignore
      const userRef = doc(db, 'users', $authStore.user.uid)
      await setDoc(
        userRef,
        {
          todos: todoList,
        },
        { merge: true }
      )
    } catch (error) {
      console.log('There was an error saving your information')
    }
  }
</script>

<div class="mainContainer">
  <div class="headerContainer">
    <h1>Todo List</h1>
    <div class="headerBtns">
      <button on:click={saveTodos}>
        <i class="fa-regular fa-floppy-disk"></i>
        <p>Save</p>
      </button>
      <button>
        <i class="fa-solid fa-right-from-bracket"></i>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p on:click={authHandlers.logout} on:keydown={() => {}}>Logout</p>
      </button>
    </div>
  </div>
  {#if !$authStore.loading}
  
  <main>
    {#if todoList.length === 0}
      <p>Well Done! Your to-do list is empty. Time to recharge.</p>
    {/if}
    {#each todoList as todo, index}
      <TodoItem todo={todo} index={index} removeTodo={removeTodo} editTodo={editTodo} />
    {/each}
  </main>
  {/if}

  <div class={'enterTodo ' + (error ? 'errorBorder' : '')}>
    <input bind:value={currTodo} type="text" placeholder="Enter todo" />
    <button on:click={addTodo}>ADD</button>
  </div>
</div>

<style>
  .mainContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 24px;
    padding: 24px;
    width: 100%;
    min-width: 1000px;
    margin: 0 auto;
  }

  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .headerBtns {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .headerContainer button {
    background-color: #003c5b;
    color: white;
    padding: 10px 18px;
    border: none;
    border-radius: 4px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .headerContainer button i {
    font-size: 1.1rem;
  }

  .headerContainer button:hover {
    opacity: 0.7;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .enterTodo {
    display: flex;
    align-items: stretch;
    border: 1px solid #0891b2;
    border-radius: 5px;
    overflow: hidden;
  }

  .errorBorder {
    border-color: coral !important;
  }

  .enterTodo input {
    background-color: transparent;
    border: none;
    padding: 14px;
    color: white;
    flex: 1;
  }

  .enterTodo input:focus {
    outline: none;
  }

  .enterTodo button {
    padding: 0 28px;
    background-color: #003c5b;
    border: none;
    color: cyan;
    font-weight: 600;
    cursor: pointer;
  }

  .enterTodo button:hover {
    background-color: transparent;
  }
</style>
