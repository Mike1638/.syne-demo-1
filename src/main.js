import Child from  "./app.vue"
const vm = new Vue({
   el:'#app',
   template:`
   <div>
   <Child></Child>
   </div>
   `,
   render:h=>h(Child)
})
