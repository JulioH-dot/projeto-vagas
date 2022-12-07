<template>
    <div>
        <div class="divVagasFavoritas">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas Favoritas</button>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vaga, index) in list" :key="index" >
                        
                        <div class="card">
                            <div class="card-header bg-dark text-white">
                                <div class="row">
                                    <div class="col d-flex justify-content-between">
                                        <div>{{vaga.titulo}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <p>{{vaga.descricao}}</p>
                            </div>
                            <div class="footer">
                                <small class="text-muted"> Salário: R$ {{vaga.salario}} </small>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name: "VagasFavoritas",
    data:()=>({
        list: []
    }),
    mounted(){
        // verificar se vagasFavoritas já existe em localStorage
        this.emitter.on('favoritarVaga', (dadosVaga)=>{
            console.log('componente Vagas favoritas: ', dadosVaga)
            this.list.push(dadosVaga)
        });

        this.emitter.on('desfavoritarVaga', (dadosVaga)=>{
           // console.log('componente Vagas favoritas: ', JSON.stringify(dadosVaga) )
            let indexArray = this.list.findIndex(dados => dados.titulo.toLowerCase() === dadosVaga.titulo.toLowerCase()) // procura o indice do array que que for igual o título que desfavoritar
            
            //console.log(indexArray)
            if(indexArray !== -1){
                this.list.splice(indexArray, 1) //remove o indice do array
                
            }
        })
    },
    
     
}

</script>

<style scoped>
.divVagasFavoritas{
    position: absolute; 
    z-index: 1; 
    top: 70px; 
    right:0px
}

</style>