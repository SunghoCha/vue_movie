<template>
  <TodoHeader/>
  <TodoInput @add = "addTodo"/>
  <TodoList :Items = "todoItems" @remove = "removeTodo"/>
</template>

<script>
import { ref } from 'vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList
    },

    setup() {
      const todoItems = ref([]);

      const fetchTodos = () => {
        const result = [];
        for (let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            result.push(todoItem);
        }
        return result;
      }
      todoItems.value = fetchTodos();
      const addTodo = (todo) => {
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo)
      }
      
      const removeTodo = (item, index) => {
        todoItems.value.splice(index, 1);
        localStorage.removeItem(item);
      }

      return { todoItems, addTodo }
    }
  }
</script>

<style lang="scss" scoped>

</style>