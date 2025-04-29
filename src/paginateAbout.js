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
      visibleTodos: [],
      userId:'',
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
      this.userId=JSON.parse(localStorage.getItem('usuario')).id;
      const allFilter= this.todos.filter((todo) => todo.id !==JSON.parse(localStorage.getItem('usuario')).id);
      this.visibleTodos = allFilter.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      // if we have 0 visible todos, go back a page
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage -1);
      }
    },
    updateUrl(){
      
      const url=window.location;
      const breadCrumUrl=url.hash[2]+url.hash[3]+url.hash[4]+url.hash[5];
      return breadCrumUrl;
     
    },
    breadCrumUrl(){
      
      const url=window.location;
      return url.hash[4]
     
    }
  }
}
