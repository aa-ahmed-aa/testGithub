<template>
  <b-row class="mb-4">
    <b-col md="3">
      <label for="title">Repository name</label>
      <b-form-input
        v-model="filters.repoName"
        :id="filters.repoName"
        :type="`text`"
        @change="$emit('getRepositories')"
      ></b-form-input>
    </b-col>

    <b-col md="3">
      <label for="example-datepicker">Date</label>
      <b-input-group class="mb-3">
        <b-form-input
          id="example-input"
          v-model="filters.date"
          type="text"
          placeholder="Date"
          autocomplete="off"
          @change="$emit('getRepositories')"
        ></b-form-input>
        <b-input-group-append>
          <b-form-datepicker
            v-model="filters.date"
            button-only
            right
            locale="en-US"
            aria-controls="example-input"
            @change="$emit('getRepositories')"
          ></b-form-datepicker>
        </b-input-group-append>
      </b-input-group>
    </b-col>

    <b-col md="3">
      <label for="Order">Order</label>
      <b-form-select
        v-model="filters.orderType"
        :options="ordersType"
        @change="$emit('getRepositories')"
      ></b-form-select>
    </b-col>

    <b-col md="3">
      <label for="Order">Sort Type</label>
      <b-form-select
        v-model="filters.sortType"
        :options="sortTypes"
        @change="$emit('getRepositories')"
      ></b-form-select>
    </b-col>

    <b-col md="12">
      <label for="range-1">Items per Page : {{ filters.itemsPerPage }}</label>
      <b-form-input
        id="range-1"
        v-model="filters.itemsPerPage"
        type="range"
        min="2"
        max="10"
        @change="$emit('getRepositories')"
      ></b-form-input>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SearchComponent",
  props: ["filters"],
  data() {
    return {
      ordersType: [
        { value: "asc", text: "ASC" },
        { value: "desc", text: "DESC" },
      ],
      sortTypes: [
        { value: "stars", text: "Stars" },
        { value: "watches", text: "Watches" },
        { value: "forks", text: "Forks" },
      ],
    };
  },
};
</script>