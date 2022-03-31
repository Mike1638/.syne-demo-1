

<template>
  <div>
    App:vue {{ n }}
    <hr />
    Demo.vue : <Child  :money.sync='n' />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: { Child },
  data() {
    return {
      n: 10000,
    };
  },
};
</script>

<style>
</style>