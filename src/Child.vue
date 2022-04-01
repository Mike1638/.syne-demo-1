<template>
    <div>
    {{money}}
    <button @click='$emit("update:money",money-100)' ><span>花钱啊</span></button>
    <div v-xx>xxx</div>
    <button v-on2:click="hi" >on2</button>
    </div>
</template>


<script>
export default {
    methods:{
        hi(){
            console.log('w shi sha bi');
        }
    }
    ,
    props:['money'],
    directives:{
        "xx":{
            inserted:function(el){
                el.addEventListener('click',()=>{
                    console.log("xxx");
                })
            }
        },
        "on2":{
            inserted(el,info){
                el.addEventListener(info.arg,info.value)
            },
            unbind(el,info){
                el.removeEventListener(info.arg,info.value)
            }
        }
    }
}
</script>

<style scoped>

</style>>
  