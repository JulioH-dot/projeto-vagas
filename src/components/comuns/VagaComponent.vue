<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{titulo}}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" v-model="favorite">
                            <label class="form-check-label"> Favoritar </label>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
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
    data:()=>({
        favorite: false,
    }),
    watch:{
        favorite(newValue){
            if(newValue){
                this.emitter.emit('favoritarVaga', {
                    titulo: this.titulo, 
                    salario: this.salario, 
                    descricao: this.descricao
                })
            } else{
                this.emitter.emit('desfavoritarVaga', {
                    titulo: this.titulo, 
                    salario: this.salario, 
                    descricao: this.descricao
                })
            }
        }
    },
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
    methods: {
        
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