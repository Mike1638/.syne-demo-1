<template>
  <div>child1</div>
</template>


<script>
import log from "../mix/mix.js";
export default {
  data() {
    return {
      name: "child3",
    };
  },
  mixins: [log],
};
</script>