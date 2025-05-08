  <template>
    <nav class=" p-2 bg-[#fff] " aria-label="Breadcrumb" v-if="homeurl!=='#/'"  >
      <div class="max-w-screen-xl md:mx-auto px-[3.5rem]">
        <ol class="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex capitalize items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </a>
          </li>
          <li v-for="(item,index) in name?.slice(1,name.length)">
            <div class="flex items-center">
              <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <div v-if="name?.[name?.length - 1]==item ">
              <span aria-current="page" 
                            
                           class="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                {{item.replace(/[^a-zA-Z]+name=/g,'')}} 
                
              </span>
              </div>
              <span v-else >
                <router-link aria-current="page" 
                           :to="'/'+item" 
                           class="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                {{item.replace(/[^a-zA-Z]+name=/g,'')}} 
                
              </router-link>
              </span>
            </div>
          </li>
        </ol>
    </div>
  </nav>
</template>
<script lang="ts" >
export default{
name:'breadcrum',
props:{
name: String,
counterNav:Number,
url:String
},
data()
{
    return{
      homeurl:''
        };
},  
methods:
{
 SendToParent()
    {
      const url=window.location;
      this.homeurl=url.hash
      return this.homeurl;
      console.log(this.homeurl);
    },
  },
mounted()
    {
        this.SendToParent();
        
       
    }
}
</script>