<template>
  <div>
    <!-- Header -->
    <b-row class="mt-5">
      <b-col>
        <h1 class="text-center">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="100"
            height="100"
          />
          Repositories Filter
        </h1>
      </b-col>
    </b-row>

    <!-- Errors -->
    <b-row v-if="error.length > 0">
      <b-col md="12">
        <b-alert show variant="danger">{{ error }}</b-alert>
      </b-col>
    </b-row>

    <!-- Search -->
    <search-component
      v-on:getRepositories="getRepositories"
      v-bind:filters="filters"
    />

    <!-- Pagination  -->
    <b-row class="ml-1">
      <b-pagination
        v-model="filters.page"
        :total-rows="results"
        :per-page="filters.itemsPerPage"
        aria-controls="my-table"
        @change="getRepositories"
      ></b-pagination>
    </b-row>

    <!-- Spinner -->
    <b-row v-if="loading">
      <b-col md="12">
        <div class="text-center">
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <!-- <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner> -->
        </div>
      </b-col>
    </b-row>

    <!-- List Repos -->
    <div v-bind:key="repo.id" v-for="repo in repositories">
      <repo-card v-bind:repo="repo" />
    </div>
  </div>
</template>

<script>
import RepoCard from "./RepoCard.vue";
import SearchComponent from "./SearchComponent";
import axios from "axios";

export default {
  name: "Repositories",
  components: {
    RepoCard,
    SearchComponent,
  },
  props: ["filter"],
  data() {
    return {
      loading: false,
      error: "",
      results: 0,
      repositories: [],
      filters: {
        repoName: "",
        date: "2019-01-01",
        sortType: "stars",
        orderType: "desc",
        page: 1,
        itemsPerPage: 6,
      },
    };
  },
  methods: {
    getRepositories() {
      if (this.filters.repoName.length != 0) {
        this.loading = true;
        axios
          .get(
            `http://localhost:3000/repository?q=${this.filters.repoName}&sortType=${this.filters.sortType}&order=${this.filters.orderType}&page=${this.filters.page}&limit=${this.filters.itemsPerPage}`
          )
          .then(
            (response) => (
              (this.repositories = response.data.items),
              (this.results = response.data.total_count),
              (this.loading = false),
              (this.error = "")
            )
          );
      } else {
        this.error = "Please Enter Name";
      }
    },
  },
};
</script>

<style scoped>
</style>
