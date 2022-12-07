<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga/>
            </div>
        </div>
        <lista-vagas />
           
        <div class="row mt-5">
            <div class="col-4">
                <Indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white"/>
            </div>
            <div class="col-4">
                <Indicador titulo="Profissionais Cadastrados" indicador="500" bg="bg-dark" color="text-white"/>
            </div>
            <div class="col-4">
                <Indicador titulo="Visitantes Online" :indicador="usuariosOnline" bg="bg-ligth" color="text-dark"/>
                
            </div>
        </div>
    </div>
</template>



<script>
import Indicador from '@/components/comuns/Indicador.vue';
import ListaVagas from '@/components/comuns/ListaVagas.vue'
import PesquisarVaga from '../comuns/PesquisarVaga.vue';


export default {
    name: 'Home',
    components:{ 
        Indicador,
        PesquisarVaga,
        ListaVagas
    },
    data: ()=>({
        usuariosOnline: 0,
        
    }),
    methods:{
        getUsuariosOnline(){
            this.usuariosOnline=Math.floor(Math.random()*101)
        }
    }, 
    created(){
        setInterval(this.getUsuariosOnline, 5000)
    },
}

</script>



<style>

</style>