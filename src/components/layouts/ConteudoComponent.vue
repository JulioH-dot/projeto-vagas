<template>
    <div>
        <h1>Component Conteúdo</h1>
        <Home/>
        <PublicarVaga/>
    </div>
</template>



<script>

import Home from '../views/Home.vue';
import Vaga from '../views/Vaga.vue'


export default {
    name: 'Conteudo',
    components:{
        Home,
        PublicarVaga: Vaga,
    }
}

</script>



<style>

</style>