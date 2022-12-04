<template>
  <div>
    
    <Topo />
    <Conteudo />
  </div>
</template>

<script>
import ConteudoComponent from './components/layouts/ConteudoComponent.vue'
import TopoComponent from './components/layouts/TopoComponent.vue'



export default {
  name: 'App',
  components: {
    Conteudo: ConteudoComponent,
    Topo: TopoComponent
  }
}
</script>

<style>

</style>
