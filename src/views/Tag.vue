<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
    components: { Spinner, PostList },
    setup(){
       const route = useRoute();
       const { posts, error, load } = getPosts();
       load();

       const filteredPosts = computed(() => {
           return posts.value.filter(post => {
               return post.tags.includes(route.params.tag)
           })
       })
       
       return { filteredPosts, error, posts }
    }
}
</script>

<style>

</style>