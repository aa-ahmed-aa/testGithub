<template>
  <b-container class="bv-example-row">
    <Repositories />
  </b-container>
</template>

<script>
import Repositories from "./components/Repositories";

export default {
  name: "App",
  components: {
    Repositories,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
