<template>
  <div>extend4</div>
</template>


<script>

import MyVue from "../extend/Myvue.js"
export default {
  data() {
    return {
      name: "extend4",
    };
  },
  extends:MyVue
};
</script>