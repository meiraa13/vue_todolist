<template>
  <form>
    <input v-model="task" placeholder="Insira uma tarefa" />
    <button>Adicionar</button>
  </form>


</template>


<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name:"SearchBar",
    props:{
        task:String,
    }

        

    
})


</script>

<style scoped>


</style>