//import AppHeader from './components/AppHeader.vue';
//import TodoInput from '../components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
import Pagination from './components/Pagination.vue';
import {ref} from 'vue';
const response=ref([]);
response.value = await fetch('https://dummyjson.com/users');
const users = await response.value.json();

export default {
  name: 'app',

  
  data() {
   
    return {
      todos: users.users,
         
      
      nextId: 13,
      currentPage: 0,
      pageSize: 5,
      visibleTodos: []
    };
  },
  components: {
    
    
    TodoItem,
    Pagination
  },
  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      this.updateVisibleTodos();
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
      this.updateVisibleTodos();
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos() {
      this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      // if we have 0 visible todos, go back a page
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage -1);
      }
    },
    updateUrl(){
      
      const url=window.location;
      const breadCrumUrl=url.pathname[1]+url.pathname[2]+url.pathname[3]+url.pathname[4]
      return breadCrumUrl
     
    },
    breadCrumUrl(){
      
      const url=window.location;
      return url.pathname[4]
     
    }
  }
}
