<script lang="ts">
import { useTasksStore } from '@/stores/taskStore';
import { defineComponent } from 'vue';
import { mapWritableState, mapActions } from 'pinia';


export default defineComponent({
    name:"InputBar",

    methods:{
      ...mapActions(useTasksStore,['addTask'])
    },
    computed:{

      ...mapWritableState(useTasksStore,['formData','tasks'])
    }

})
</script>


<template>
  <form class="d-flex ga-4  " @submit.prevent="addTask(formData)">
    <v-text-field variant="solo-filled"  v-model="formData.task" placeholder="Insira uma tarefa" ></v-text-field>
    <v-btn class="mt-2" type="submit">Adicionar</v-btn>
  </form>


</template>


<style scoped>



</style>