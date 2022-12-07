<template>
    <div :class="estiloAlert" role="alert">
        <slot name="titulo"></slot>
        <hr>
        <slot name="descricao"></slot>
    </div>
</template>

<script>


export default{
    name: 'Alert',
    props: {
        tipo: String
    },
    computed:{
        estiloAlert(){
            switch(this.tipo){
                case 'error': return 'alert alert-danger'
                case 'success': return 'alert alert-success'
                default: return 'alert alert-success'
            }
        }
    }
}
</script>

<style>

</style>