<template>
  <div class="home">
    <input type="text" v-model="search">
    <h5>Search term: {{ search }}</h5>
    <div v-for="car in matchingCars" :key="car">{{ car }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>

import { computed, ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core';

export default {
  name: 'Home',
  setup(){
    
    const search = ref('');
    const cars = ref(['Supra', 'GT86', 'E36', 'RX7', 'E30', '200SX'])
    
    const stopWatching = watch(search, () => {
      console.log('Watch fired')
    })
    
    const matchingCars = computed(() => {
      return cars.value.filter((car) => car.toLowerCase().includes(search.value.toLowerCase()))
    })

    const handleClick = () => {
      stopWatching()
    }

    return { search, cars, matchingCars, handleClick }
  }
}
</script>
