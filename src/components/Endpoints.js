import {ref} from 'vue';

export default {
    name: 'Conections',
    props: {
        todos:['a'],
       users:[],
    },
    methods: {
        usersAll() {
       return this.todos
      },
   
      totalPages() {
        return Math.ceil(this.todos.length / this.pageSize);
      },
      showPreviousLink() {
        return this.currentPage >= 1 ? false : true;
      },
      showNextLink() {
        const stock=(this.totalPages() - 1);
        return this.currentPage < stock ? false : true;
      },
      
    },
    data(){
        return{
        todos: ["johathan"]     
    }
    },
    mounted(){
this.usersAll();
    },
  }
  