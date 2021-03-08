<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> # {{ tag }} </span>
    <button @click="deletePost" class="delete">Delete</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { fStore } from '../firebase/config'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props){

      const route = useRoute();
      const router = useRouter();
      const { post, error, load } = getPost(route.params.id);
      // const { post, error, load } = getPost(props.id);
      load();

      const deletePost = async () => {
        await fStore.collection('posts').doc(route.params.id).delete()
        router.push('/');
      }

      return { post, error, deletePost }
    }
}
</script>

<style scoped>
 .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete{
    margin: 10px auto;
    cursor: pointer;
  }
</style>

