<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <BlogPost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import BlogPost from './BlogPost.vue';

export default {
    
    props: ['posts'],
    components: { BlogPost },
    setup(props){
      onMounted(() => {
          // code to run when the component is mounted
      })

    }
}
</script>

<style>

</style>