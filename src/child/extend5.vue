<template>
  <div>extend5</div>
</template>


<script>

import MyVue from "../extend/Myvue.js"
export default {
  data() {
    return {
      name: "extend5",
    };
  },
  extends:MyVue
};
</script>