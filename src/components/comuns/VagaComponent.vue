<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{titulo}}</div>
        <div class="card-body">
            <p>{{descricao}}</p>
        </div>
        <div class="footer">
            <small class="text-muted"> Salário: R$ {{salario}} | Modalidade: {{modalidade}} | Tipo: {{tipo}} | Data: {{publicacao}}</small>
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
    created(){
        console.log('salario', typeof this.salario)
    }
}

</script>



<style>

</style>