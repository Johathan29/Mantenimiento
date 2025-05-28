//import AppHeader from './components/AppHeader.vue';
//import TodoInput from '../components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
import Conection from './components/Endpoints';
import Pagination from './components/Pagination.vue';
import BreadCrum from './components/Breadcrum.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
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
      login:{},
      userId:'',
      delete:faUserPlus ,
      faCircleCheck:faCircleCheck,
      faCircleXmark:faCircleXmark,
      useradmin:'',
      MessageString:false,
      MessageEmail:false,
      MessageCompany:false,
      MessagePhone:false,
      MessageLastName:false,
      MessageUserName:false,
      MessageFirstName:false,
      MessagePassword:false,
      MessageNumber:false,
      categoryTitle:title ,
      newarray:[],
      chart:'',
      uppercase:false,
      number:false,
      signos:false


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
        MessageBoxPassword(repeat_password,floating_password){
      //let Message=false;
      const arraypassword=repeat_password
      var uppercase = /[A-Z]/g;
      var number =/[0-9]/g
      var signos=/[!@#$%^&*)(+=._-]/g
      this.uppercase=uppercase.test(arraypassword);
      this.number=number.test(arraypassword);
      this.signos=signos.test(arraypassword);
      //
      if(repeat_password===floating_password){
        this.MessageString=true
      }else {
        this.MessageString=false
      }
    
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
    async addUser(email,floating_password,repeat_password,floating_first_name,floating_last_name,floating_phone,floating_username) {
    
     console.log(email+","+floating_password+","+repeat_password+","+floating_first_name+","+floating_last_name+","+floating_phone+","+floating_username)
     if(email===undefined || floating_password===''|| repeat_password==='' || floating_first_name===''|| floating_last_name===""||floating_phone===undefined || floating_username===''){ 
        if(email===undefined){
            this.MessageEmail=true;
            }else{
              this.MessageEmail=false;
            } if(floating_username==='')
          {
            this.MessageUserName=true
          }else{
            this.MessageUserName=false
          }if(floating_password==='' || repeat_password===''){
          this.MessagePassword=true
          }else{
            this.MessagePassword=false
          }if(floating_first_name===''){
            this.MessageFirstName=true
          }else{
            this.MessageFirstName=false
          }if(floating_last_name===''){
            this.MessageLastName=true
          }else{
            this.MessageLastName=false
          }
        }
      else{
        this.login = await fetch('https://dummyjson.com/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: floating_first_name,
          lastName: floating_last_name,
          email: email,
          phone: floating_phone,
          username: floating_username,
          password:repeat_password,
          gener:'Ferme'
          }),
        })
        .then(res => res.json())
      
      //const datauser= this.login;
      this.todos.push(this.login);
      //this.nextId++;
      
      this.updateVisibleTodos();
    }
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
     this.userId=this.todos.find((todo) => todo.id==JSON.parse(localStorage.getItem('usuario')).id);
 
    return this.breadCrumUrl,this.pageSize;
    },
    /*breadCrumUrl(){
      
      const url=window.location;
      return url.hash[4]
     
    }*/
    
  },
  mounted(){
    this.MessageBoxPassword()
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
