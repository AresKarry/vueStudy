<template>
  <div id="root">
        <TestKai/>
        <TestKai2/>
        <TestKai3/>
  </div>
</template>

<script>
import TestKai from "../src/components/TestKai.vue";
import TestKai2 from "../src/components/TestKai2.vue";
import TestKai3 from "../src/components/TestKai3.vue";
export default {
  name: "App",
  template: `<App></App>`,
  components: {
    TestKai,
    TestKai2,
    TestKai3,
  },
}
</script>

<style>
</style>