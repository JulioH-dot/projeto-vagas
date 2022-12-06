<template>
    <div>
        <button @click="conteudo = 'home'">Home</button>
        <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
      
        <keep-alive>
            <component :is="conteudo" />
        </keep-alive>
    </div>
</template>



<script>

import Home from '../views/Home.vue';
import PublicarVaga from '../views/PublicarVaga.vue'


export default {
    name: 'Conteudo',
    data: () => ({
        conteudo: 'home'
    }),
    components:{
        Home,
        PublicarVaga,
    }
}

</script>



<style>

</style>