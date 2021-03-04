<template>
  <div class="single-post">
      <h2>{{ post.title }}</h2>
      <h4>{{ snippet }}</h4>
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