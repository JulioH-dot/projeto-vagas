<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <h4>Apresente a sua Vaga para milhares de profissionais</h4>

            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label"> Título da vaga</label>
                <input type="text" class="form-control" v-model="titulo">
                <div class="form-text">Por exemplo: Programador JavaScript Vue.js</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label"> Descrição</label>
                <textarea type="text" class="form-control" v-model="descricao"></textarea>
                <div class="form-text">Informe os detalhes da vaga</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label"> Salário</label>
                <input type="number" class="form-control" v-model="salario">
                <div class="form-text">Informe o salário</div>
            </div>
            <div class="col">
                <label class="form-label"> Modalidade</label>
                <select class="form-select" v-model="modalidade">
                    <option value="" disabled>--Selecione</option>
                    <option value="1">Home Office</option>
                    <option value="2">Presencial</option>
                    
                </select>
                <div class="form-text">Informe a modalidade</div>
            </div>
            <div class="col">
                <label class="form-label"> Tipo</label>
                <select class="form-select" v-model="tipo">
                    <option value="" disabled>--Selecione</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">Informe otipo de contratação</div>
            </div>
        </div>
        <div class="row mt-3">
            
            <div class="col">
                <button type="submit" class="btn btn-primary" @click="salvarVaga()">Cadastrar</button>
            </div>
        </div>
    </div>
</template>



<script>

export default {
    name: 'PublicarVaga',
    data:() =>({
        titulo: '',
        descricao:'',
        salario: '',
        modalidade:'',
        tipo:'',
    }),
    methods: {
        salvarVaga(){

            let vagas = JSON.parse(localStorage.getItem('vagas'));

            if(!vagas){
                vagas = []
            };
            let tempoDecorrido = Date.now();
            let dataAtual = new Date(tempoDecorrido);
            let dataPublicacao = dataAtual.toISOString();


            let vagaPadrao = {
               titulo: this.titulo,
               descricao: this.descricao,
               salario: this.salario,
               modalidade: this.modalidade,
               tipo: this.tipo,
               publicacao: dataPublicacao,  //data e hora no time zone UTC (hora universal)
            };
            
            
            

            vagas.push(vagaPadrao)
            
            if(this.validaForm()){
                
                localStorage.setItem('vagas', JSON.stringify(vagas))
                
                this.emitter.emit('alert', {
                    titulo: `A vaga:  ${this.titulo} foi cadastrada com sucesso`,
                    descricao: "Parabéns a vaga foi cadastrada",
                    tipo: 'success'
                })

                this.limparFormVaga()

            } else {
                this.emitter.emit('alert', {
                    titulo: '-_- Opsss... Não foi possível realizar o cadastro da vaga',
                    descricao: "Parece que faltou informação. Tente revisar os dados. Obrigado!!",
                    tipo: 'error'
                })
            }


            
        },
        limparFormVaga() {
            this.titulo = '';
            this.descricao ='';
            this.salario = '';
            this.modalidade ='';
            this.tipo ='';
        },
        validaForm(){
            let valido = true;

            if(this.titulo === '') valido = false
            if(this.descricao ==='') valido = false
            if(this.salario === '') valido = false
            if(this.tipo ==='') valido = false


            return valido
        }
    }
}

</script>



<style>

</style>