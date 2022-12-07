<template>
  <div>
    
    <vagas-favoritas/>
    <topo @navegar="component = $event"/>
    <alert v-if="exibirAlert" :tipo="alert.tipo">
      <template v-slot:titulo>
        <h5>{{alert.titulo}}</h5>
      </template>
      <template v-slot:descricao>
        <p>{{alert.descricao}}</p>
      </template>
    </alert> 
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
    alert: {
      titulo: '',
      descricao: '',
      tipo: '',
    }
  }),
  components: {
    Alert,
    Conteudo: ConteudoComponent,
    Topo: TopoComponent,
    VagasFavoritas,
     
  },
  mounted(){
    this.emitter.on('alert', (a)=>{
      this.alert = a
      this.exibirAlert = true;
      setTimeout(()=> this.exibirAlert = false, 4000)
      
    })
  }
  
}
</script>

<style>

</style>
