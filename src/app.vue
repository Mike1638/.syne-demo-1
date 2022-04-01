<template>
  <div :class="`app theme-${themeName} theme-${themeSize}`">
    App:vue {{ n }}
    <hr />
    Demo.vue : <Child :money.sync="n" />
    <span> wshi shabi</span>
    <hr />
      <Change />
      <hr />
      <Mix1 v-if="visible1 === true" />
      <button @click="visible1 = false">X1</button>
      <Mix2 v-if="visible2 === true" />
      <button @click="visible2 = false">X2</button>
      <Mix3 v-if="visible3 === true" />
      <button @click="visible3 = false">X3</button>
      <Extend4 v-if="visible4 === true" />
      <button @click="visible4 = false">X4</button>
      <Extend5 v-if="visible5 === true" />
      <button @click="visible5 = false">X5</button>
  </div>
</template>

<script>
import Child from "./Child.vue";
import Mix1 from "../src/child/mix1.vue";
import Mix2 from "../src/child/mix2.vue";
import Mix3 from "../src/child/mix3.vue";
import Extend4 from "../src/child/extend4.vue";
import Extend5 from "../src/child/extend5.vue";
import Change from "../src/child/change.vue"
export default {
  components: { Child, Mix1, Mix2, Mix3, Extend4, Extend5, Change},
  data() {
    return {
      n: 10000,
      visible1: true,
      visible2: true,
      visible3: true,
      visible4: true,
      visible5: true,
      themeName: "blue",
      themeSize:'normal'
    }
  },
  provide(){
    return{
        themeName:this.themeName,
        changeColor:this.changeColor,
       changesize:this.changesize
    }
  },
  methods:{
      changeColor(){
          if(this.themeName === 'blue'){
              this.themeName = 'red'
          }else{
              this.themeName = 'blue'
          }
      },
      changesize(name){
          if(['normal','big','small'].indexOf(name)>=0){
                 this.themeSize = name
          }
      },
  },
};
</script>



<style scoped>
.app {
  border: 1px solid red;
}
.app.theme-blue button {
  background: blue;
}
.app.theme-blue {
  color: blue;
}
.app.theme-red button {
  background: red;
}
.app.theme-red {
  color: red;
}
.app.theme-big{
    font-size: 30px;
}
.app.theme-small{
    font-size: 8px;
}
.app.theme-normal{
    font-size: 16px;
}
</style>