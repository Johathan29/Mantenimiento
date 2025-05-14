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
  console.log(title);
  
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
      newarray:[] 
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
    async endPoint(item)
    {
        const response=ref([]);
        response.value = await fetch('https://dummyjson.com/users?limit=208&sortBy=firstName&order='+item+'');
        const users = await response.value.json();
        this.todos=users.users;
        this.updateVisibleTodos();
        console.log(this.todos)
    },
    async searchcategoryTitle(item)
    {
      const response=ref([]);
      response.value = await fetch('https://dummyjson.com/users/filter?key=company.title&value='+item+'');
      const users = await response.value.json();
      this.todos=users.users;
      this.updateVisibleTodos();
    
  },
   function() {
    this.newarray=[{label:[],data:[]}];
    const data = [
     { label: [2010], data: 10 ,backgroundColor: 'rgba(255, 99, 132, 0.2)'},
     { label: [2011], data: 20,backgroundColor:  'rgba(255, 159, 64, 0.2)' },
     { label: [2012], data: 15,backgroundColor: 'rgba(255, 205, 86, 0.2)' },
     { label: [2013], data: 25,backgroundColor:'rgba(75, 192, 192, 0.2)' },
     { label: [2014], data: 22,backgroundColor: 'rgba(54, 162, 235, 0.2)' },
     { label: [2015], data: 30,backgroundColor:'rgba(153, 102, 255, 0.2)',
      },
     { label: [2016], data: 28,backgroundColor:'rgba(201, 203, 207, 0.2)'
    , },
   ];
   
   console.log(data.map(item=>item.label))
    const numbers = [1,1,1,2,2,2,3,3,4,4,5,6,7,8];
    const specimens = data.filter((number, i) => i == 0 ? true : numbers[i - 1] != number);
    const counterSpecimens = specimens.map(spec => {
        return {number: spec};
    });
    
    counterSpecimens.map((countSpec, i) =>{
        const actualSpecLength = numbers.filter(number => number === countSpec.number).length;
        countSpec.count = actualSpecLength;
    })
    console.log(counterSpecimens)
    const labels = ["2010","2011","2012","2013","2014","2015","2016"]
    new Chart(
      document.getElementById('acquisitions'),
      {
    type: 'bar',
        data: {
          labels:labels,
          datasets:[ { label: [2010], data: [10] ,backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            
          ],},
          { label:[2011], data: [20],backgroundColor: [
           
            'rgba(255, 159, 64, 0.2)',
            
          ],},
          { label: [2012], data: [15],backgroundColor: [
            
            'rgba(255, 205, 86, 0.2)',
            
          ], },
          { label: [2013], data: [25],backgroundColor: [
           
            'rgba(75, 192, 192, 0.2)',
            
          ],},
          { label: [2014], data: [22],backgroundColor: [
            
            'rgba(54, 162, 235, 0.2)',
            
          ],},
          { label: [2015], data: [30],backgroundColor: [
            
            'rgba(153, 102, 255, 0.2)',
            
          ],
           },
          { label: [2016], data: [28],bbackgroundColor: [
            
            'rgba(201, 203, 207, 0.2)'
          ],},]
            
          
        
          
        },
        options: {
    indexAxis: 'x',
  }
      }
    )
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
   this.function();
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
