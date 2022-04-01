<template>
<div>
    <button @click="x">当前颜色：{{themeName}}</button>
    <button @click="changesize('big')">big</button>
    <button @click="changesize('small')">small</button>
    <button @click="changesize('normal')">normal</button>

</div>
</template>

<script>
export default {
    inject:['themeName','changeColor','changesize'],
    methods:{
        x(){
           this.changeColor()
        }
    }
}
</script>

<style scoped>

</style>

