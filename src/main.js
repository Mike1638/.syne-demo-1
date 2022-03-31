import App from  "./app.vue"
import Child from "./Child.vue"
const vm = new Vue({
   el:'#app',
   data:{
      a:12
   },
   components:{Child:Child},
   // template:`
   // <div>
   // {{a}}
   // <div> <Child/></div>
   // </div>
   // `,
   render:h=>h(App)
})
