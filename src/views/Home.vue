<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagPanel :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagPanel from '../components/TagPanel.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagPanel },
  setup(){

    const { posts, error, load } = getPosts();
    load();

    return { posts, error }
  }
}
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
h1{
  text-align: center;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>