<template>
  <div class="container" style="width: 1000px;">
    <h1 class="mt-4">To-Do List</h1>

    <!-- TABEL BUAT NAMBAHIN TODO -->
    <div class="row mb-3">
      <div class="col" style="width: 15%;">
        <input class="form-control" v-model="newTodo.title" placeholder="Task title" />
      </div>
      <div class="col" style="width: 30%;">
        <textarea class="form-control" v-model="newTodo.description" placeholder="Task description"></textarea>
      </div>
      <div class="col" style="width: 15%;">
        <input type="date" class="form-control" v-model="newTodo.dueDate" />
      </div>
      <div class="col" style="width: 20%;">
        <select class="form-select" v-model="newTodo.category">
          <option v-for="(category, index) in categories" :value="category.name" :key="index">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="col" style="width: 20%;">
        <button class="btn btn-primary" @click="addTodo">Add</button>
      </div>
    </div>

    <!-- TABEL TODO -->
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Todo</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" :key="index">
          <td>
            <input type="checkbox" class="form-check-input" style="width: 20px;" v-model="todo.completed" />
          </td>
          <td>
            <p class="mb-0" :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }">{{ todo.name }}</p>
          </td>
          <td>
            <p class="mb-0" id="TodoDesc"><strong></strong> {{ todo.description }}</p>
          </td>
          <td>
            <p class="mb-0"><strong></strong> {{ todo.dueDate }}</p>
          </td>
          <td>
            <p class="mb-0"><strong></strong> {{ todo.Category.name }}</p>
          </td>
          <td>
            <button class="btn btn-info" @click="showEditDialog(index)">Edit</button>
            <button class="btn btn-danger" @click="deleteTodo(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <button class="btn" @click="removeCompletedTodos">remove completed todos</button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const todos = ref([]);
const categories = ref([]);

async function loadTodos() {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/Todo');
    todos.value = response.data.docs;
  } catch (error) {
    console.error('Error loading todos:', error);
  }
}

async function loadCategories() {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/Category');
    categories.value = response.data.docs;
  } catch (error) {
    console.error('Error loading categories:', error);
  }
}

onMounted(() => {
  loadTodos();
  loadCategories();
});

// function resetNewTodo() {
//   newTodo.value.title = '';
//   newTodo.value.description = '';
//   newTodo.value.dueDate = '';
//   newTodo.value.category = 'High';
// }

const newTodo = ref({
  title: '',
  description: '',
  dueDate: '',
  category: 'High',
});

function removeCompletedTodos() {
  todos.value = todos.value.filter((todo) => !todo.completed);
}
</script>
