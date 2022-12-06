<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{titulo}}</div>
        <div class="card-body">
            <p>{{descricao}}</p>
        </div>
        <div class="footer">
            <small class="text-muted"> Salário: R$ {{salario}} | Modalidade: {{getModalidade}} | Tipo: {{getTipo}} | Data: {{getPublicacao}}</small>
        </div>
    </div>
       
</template>



<script>

export default {
    name: 'VagaComponent',
    props: {
        titulo: {
            type: String,
            required: true
        }, 
        descricao:{
            type: String,
            default(){
                return '*'.repeat(5)
            }
        },
        salario: {
            type: [Number, String],
            required: true
        },  //tipando as props
        modalidade: {
            type: String,
            default: "À combinar"
        },
        tipo: {
            type: String,
            required: true,
        },
        publicacao: {
            type: String,
            required: true,
        }
    },

    computed: {
        getModalidade(){

            switch(this.modalidade){
                case '1': return 'Home Office'
                case '2': return 'Presencial'
            }
        },
        getTipo(){
            switch(this.tipo){
                case '1': return 'CLT'
                case '2': return 'PJ'
            }
        },
        getPublicacao(){
            let dataPublicacao = new Date(this.publicacao);
            //return dataPublicacao.toLocaleString('pt-BR')
            return dataPublicacao.toLocaleDateString('pt-BR')
        }
    }
}

</script>



<style>

</style>