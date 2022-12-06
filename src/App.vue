<template>
  <div>
    <vagas-favoritas/>
    <Topo @navegar="component = $event"/>
    <Conteudo :conteudo="component" />
  </div>
</template>

<script>
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoComponent from '@/components/layouts/TopoComponent.vue'



export default {
  name: 'App',
  data:() =>({
    component: 'Home'
  }),
  components: {
    Conteudo: ConteudoComponent,
    Topo: TopoComponent,
    VagasFavoritas
  },
  
}
</script>

<style>

</style>
