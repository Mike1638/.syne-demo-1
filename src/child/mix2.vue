<template>
  <div>child2</div>
</template>


<script>
import log from "../mix/mix.js";
export default {
  data() {
    return {
      name: "child2",
    };
  },
  mixins: [log],
};
</script>