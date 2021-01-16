<template>
  <b-row class="mb-3 bg-light" shadow align-v="center">
    <b-col md="auto">
      <a href="javascript:;" class="avatar avatar-xl rounded-circle">
        <img
          alt="Image placeholder"
          width="100"
          height="100"
          :src="repo.owner.avatar_url"
        />
      </a>
    </b-col>
    <b-col class="ml--2">
      <h4 class="mb-0 text-primary">{{ repo.name }} - ({{ repo.language }})</h4>
      <p class="text-sm text-muted mb-0">
        <a :href="repo.owner.html_url" target="_blank">{{ repo.full_name }}</a>
      </p>
      <div class="text-sm text-muted mb-0">{{ repo.description }}</div>
    </b-col>
    <b-col md="auto">
      <a :href="repo.html_url" target="_blank">
        <b-button variant="outline-primary fixed"> Visit </b-button>
      </a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "RepoCard",
  props: ["repo"],
};
</script>
