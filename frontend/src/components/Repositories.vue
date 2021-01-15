<template>
  <div>
    <h1>Github Repositories Filter</h1>
    <div v-bind:key="repository.id" v-for="repository in repositories">
      <h3>{{ repository.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Github Repositories",
  props: ["repositories"],
};
</script>

<style scoped>
</style>
