<template>
  <div id="app">
    <Repositories v-bind:repositories="repositories" />
  </div>
</template>

<script>
import Repositories from "./components/Repositories";

export default {
  name: "App",
  components: {
    Repositories,
  },
  data() {
    return {
      repositories: [
        {
          id: 1,
          name: "ToDo One",
          author: "Ali",
          completed: false,
        },
        {
          id: 2,
          name: "ToDo Two",
          author: "Khaled",
          completed: true,
        },
        {
          id: 3,
          name: "ToDo Three",
          author: "Ahmed",
          completed: false,
        },
      ],
    };
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
