<script lang="ts">
  export let todo: string
  export let index: number
  export let removeTodo: (index: number) => void
  export let editTodo: (index: number) => void
</script>

<div class="todo">
  <p>
    {index + 1}. {todo}
  </p>
  <div class="actions">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <i
      on:click={() => editTodo(index)}
      on:keydown={() => {}}
      class="fa-regular fa-pen-to-square"
    />
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <i
      on:click={() => removeTodo(index)}
      on:keydown={() => {}}
      class="fa-regular fa-trash-can"
    />
  </div>
</div>

<style>
  .todo {
    border-left: 1px solid cyan;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 1.3rem;
  }

  .actions i {
    cursor: pointer;
  }

  .actions i:hover {
    color: coral;
  }
</style>
