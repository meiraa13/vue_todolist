<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name:"InputBar",

    data(){
      return {
        formData:{
          task:"",
          completed:false

        }
      }
    },
    methods:{
      emitSubmitForm(){
        this.$emit('submitTask', this.formData)
        this.formData.task = ""

      }
    },
    emits:['submitTask']

})
</script>


<template>
  <form @submit.prevent="emitSubmitForm()">
    <input  v-model="formData.task" placeholder="Insira uma tarefa" />
    <button>Adicionar</button>
  </form>


</template>


<style scoped>

form {
    display: flex;
    gap: 2rem;
}

input {
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 30rem;
}

button {
    background-color: aqua;
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 0.5rem;
}

</style>