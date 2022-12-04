<template>
  <div>
    <Topo />
    <ConteudoComponent />
  </div>
</template>

<script>
import ConteudoComponent from './components/layouts/ConteudoComponent.vue'
import Topo from './components/layouts/TopoComponent.vue'



export default {
  name: 'App',
  components: {
    ConteudoComponent,
    Topo,
  }
}
</script>

<style>
#app {
  
}
</style>
