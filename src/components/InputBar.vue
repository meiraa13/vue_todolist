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
  <form @submit.prevent="addTask(formData)">
    <input  v-model="formData.task" placeholder="Insert a new task" />
    <button :disabled="formData.task.length == 0" type="submit">Add</button>
  </form>


</template>


<style scoped>

form {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

input {
  border-style: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}

button {
  padding: 0.5rem;
}




</style>