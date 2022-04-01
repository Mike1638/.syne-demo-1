import App from  "./app.vue"
import Child from "./Child.vue"
const vm = new Vue({
   el:'#app',
   components:{Child:Child},
   render:h=>h(App)
})
Vue.directive('x',{
   inserted:function(el){
     el.addEventListener('click',()=>{
        console.log('x');
     })
   }
})