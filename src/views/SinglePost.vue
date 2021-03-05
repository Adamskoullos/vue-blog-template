<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> # {{ tag }} </span>
  </div>
  <div v-else>Loading....</div>
</template>

<script>
import getPost from '../composables/getPost'

export default {
    props: ['id'],
    setup(props){

      const { post, error, load } = getPost(props.id);
      load();

      return { post, error }
    }
}
</script>

<style>

</style>

