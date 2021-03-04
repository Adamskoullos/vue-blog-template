<template>
  <div class="home">
    <h1>Blog</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: { PostList },
  setup(){
    
    const posts = ref([
      {title: 'Blog Post One', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 1},
      {title: 'Blog Post Two', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 2}
    ])

    return { posts }
  }
}
</script>
