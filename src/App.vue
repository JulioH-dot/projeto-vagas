<template>
  <div>
    
    <vagas-favoritas/>
    <topo @navegar="component = $event"/>
    <alert v-if="exibirAlert" />
    <conteudo :conteudo="component" />
  </div>
</template>

<script>

import Alert from '@/components/comuns/Alert.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoComponent from '@/components/layouts/TopoComponent.vue'



export default {
  name: 'App',
  data:() =>({
    component: 'Home',
    exibirAlert: false,
  }),
  components: {
    Alert,
    Conteudo: ConteudoComponent,
    Topo: TopoComponent,
    VagasFavoritas,
     
  },
  mounted(){
    this.emitter.on('alert', ()=>{
      this.exibirAlert = true;
      setTimeout(()=> this.exibirAlert = false, 4000)
      console.log('Apresentar a mensagem de alerta customizada')
    })
  }
  
}
</script>

<style>

</style>
