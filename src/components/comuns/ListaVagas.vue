<template>
    <div>
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
               <Vaga v-bind="vaga"/> 
            </div>
        </div> 
    </div>

</template>



<script>

import Vaga from '@/components/comuns/VagaComponent.vue';


export default{

    name: 'ListaVagas',
    data: ()=>({
        vagas: []
    }),
    components:{
        Vaga
    },
    activated(){
        this.vagas = JSON.parse(localStorage.getItem('vagas'))
    },
    mounted(){
        this.emitter.on('filtrarVagas', termoDePesquisa=>{

            const vagas1 = JSON.parse(localStorage.getItem('vagas'))
            

            this.vagas = vagas1.filter( index => index.titulo.toLowerCase().includes(termoDePesquisa.titulo.toLowerCase()))
            this.vagas = vagas1.filter( index => index.descricao.toLowerCase().includes(termoDePesquisa.titulo.toLowerCase()))
            

            console.log(this.vagas)
        })
    }
}
</script>