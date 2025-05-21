//import AppHeader from './components/AppHeader.vue';
//import TodoInput from '../components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
import Conection from './components/Endpoints';
import Pagination from './components/Pagination.vue';
import BreadCrum from './components/Breadcrum.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
import Chart from 'chart.js/auto'
import {ref} from 'vue';
import { 
  initAccordions, 
  initCarousels, 
  initCollapses, 
  initDials, 
  initDismisses, 
  initDrawers, 
  initDropdowns, 
  initModals, 
  initPopovers, 
  initTabs, 
  initTooltips } from 'flowbite';


    const response=ref([]);
    response.value = await fetch('https://dummyjson.com/users?limit=208');
    const users = await response.value.json();
    const categoryTitle=users.users.map(item=> item.company.title)
    const items = new Set(categoryTitle);
    const title = Array.from(items);
export default {
  name: 'app',
  props:{
    faDeleteLeft:faDeleteLeft
  },
  data() {
    return {
      users:[],
      todos: users.users,
      breadCrumUrl:'',
      searchUser:'',
      nextId: 13,
      currentPage: 0,
      pageSize: 10,
      visibleTodos: [],
      userId:'',
      delete:faUserPlus ,
      useradmin:'',
      categoryTitle:title ,
      newarray:[],
      chart:'' 
    };
  },
  components: {
    FontAwesomeIcon,
    BreadCrum,
    TodoItem,
    Pagination,
    Conection
  },
  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    async SelectFilter(item)
    {
        const response=ref([]);
        response.value = await fetch('https://dummyjson.com/users?limit=208&sortBy=firstName&order='+item+'');
        const users = await response.value.json();
        this.todos=users.users;
        this.updateVisibleTodos();    
    },
    async searchcategoryTitle(item)
    {
      const response=ref([]);
      response.value = await fetch('https://dummyjson.com/users/filter?key=company.title&value='+item+'');
      const users = await response.value.json();
      this.todos=users.users;
      this.updateVisibleTodos(); 
      this.CanvasInterface(this.todos);
  },
   CanvasInterface(items) {
    var title=this.todos.map(item => ({
      label:item.company.title
      }))
    var repetidos = {};
    const  ctx=document.getElementById('acquisitions');
    if(items===''){
    var data = this.todos.map((numero)=>({
    label:numero.role,
    data:repetidos[numero.role] = (repetidos[numero.role] || 0) + 1
    }));
    this.chart = new Chart(ctx,
     
      {
    type: 'bar',
        data: {
          labels:["Admin", "Moderator","User"],
          datasets:[
            {
              label:"admin",
              data:[repetidos.admin]
            },
            {
              label:"moderator",
              data:[0,repetidos.moderator]
            }
            ,
            {
              label:"user",
              data:[0,0,repetidos.user]
            }
          ]
          ,
       
        options: {
    indexAxis: 'x',
    interaction: {
      mode: 'y'
  }
  }
      }
    }
    )
  Chart.update();
    }else
    {  
     var data = this.todos.map((numero)=>({
      label:numero.role,
      data:repetidos[numero.role] = (repetidos[numero.role] || 0) + 1
    }));
    this.chart = new Chart(ctx,
     
      {
    type: 'bar',
        data: {
          labels:["Admin", "Moderator","User"],
          datasets:[
            {
              label:"admin",
              data:[repetidos.admin]
            },
            {
              label:"moderator",
              data:[0,repetidos.moderator]
            }
            ,
            {
              label:"user",
              data:[0,0,repetidos.user]
            }
          ]
          ,
       
        options: {
    indexAxis: 'x',
    interaction: {
      mode: 'y'
  }
  }
      }
    }
    )
  
    }
   
   
  },
    search(item){
      this.searchUser=item;
      
      const dataToFilter=this.todos.filter((todo) => todo.firstName==item);
      if(item.length==0) 
        {
          this.updateVisibleTodos();
        }
      else
        {
          
          this.visibleTodos=dataToFilter;
        }
    },
    addTodo(email,password,repet_password,firstname,lastname,floating_phone,age,username,phone,image,gender) {
      this.todos.push({id: 31, email: email});
      this.nextId++;
      console.log(this.todos)
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
      this.useradmin=JSON.parse(localStorage.getItem('usuario'));
      if(this.useradmin){
        this.userId=JSON.parse(localStorage.getItem('usuario')).id;
        const allFilter= this.todos.filter((todo) => todo.id !==JSON.parse(localStorage.getItem('usuario')).id);
        this.visibleTodos = allFilter.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  
      }else{
        this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      }
      
      // if we have 0 visible todos, go back a page
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage -1);
      }
    },
    updateUrl(){
      this.pageSize= this.breadCrumUrl[1]!=='' ? 5 : 5,
      this.delete=faUserPlus;
      const url=window.location;
     this.breadCrumUrl=url.hash.split("/");
     console.log(this.breadCrumUrl)
    
 
    return this.breadCrumUrl,this.pageSize;
    },
    /*breadCrumUrl(){
      
      const url=window.location;
      return url.hash[4]
     
    }*/
    
  },
  mounted(){
   this.CanvasInterface();
    this.updateUrl();
    initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
  }
}
