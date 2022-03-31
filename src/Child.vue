<template>
    <div>
    {{money}}
    <button @click='$emit("update:money",money-100)' ><span>花钱啊</span></button>
    </div>
</template>


<script>
export default {
    props:['money']
}
</script>

<style>

</style>