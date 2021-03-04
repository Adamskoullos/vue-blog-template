<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <BlogPost :post="post" />
      </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue';

export default {
    
    props: ['posts'],
    components: { BlogPost },
    setup(props){
       
    }
}
</script>

<style>

</style>