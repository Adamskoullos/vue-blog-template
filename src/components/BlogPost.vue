<template>
  <div class="single-post">
      <router-link :to="{ name: 'SinglePost', params: { id: post.id } }" >
          <h2>{{ post.title }}</h2>
      </router-link>
      <h4>{{ snippet }}</h4>
      <span v-for="tag in post.tags" :key="tag"> # {{ tag }} </span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'


export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0,75) + '....';
        })
        return { snippet }
    }
}
</script>

<style>

</style>