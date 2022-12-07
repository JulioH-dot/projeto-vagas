<template>
    <div class="h-100 p-5 bg-light border rounded-3">
        <h2>Pesquisar Vagas</h2>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>Título da vaga</label>
                    <input type="text" class="form-control" placeholder="Pesquise por palavras chaves como PHP, pleno, Vue ..." v-model="titulo">
                    <small class="form-text text-muted">Informe palavras relacionadas com o título da vaga procurada</small>
                </div>
            </div> 
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-dark mt-2 border border-primary" type="button" @click="pesquisarVaga()">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'PesquisarVaga',
        data:()=>({
            titulo:''
        }),
        methods:{
            pesquisarVaga(){
                this.emitter.emit('filtrarVagas', {titulo: this.titulo})
                
            }
        }
    }
</script>

<style>

</style>