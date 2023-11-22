<script lang="ts">
import { defineComponent } from 'vue';
import InputBar from './InputBar.vue';
import TasksList from './TasksList.vue';
import { mapWritableState } from 'pinia';
import { useTasksStore } from '@/stores/taskStore';

export interface ITask {
    task:string,
    completed:boolean
}

export default defineComponent({
    name:"Dashboard",
    components:{
    InputBar,
    TasksList,
},
    computed:{
        ...mapWritableState(useTasksStore,['tasks'])
    },
    mounted(){
        const localTasks = localStorage.getItem("@Tasks")
        if(localTasks){
            this.tasks = JSON.parse(localTasks)
        }
    }   
})
</script>


<template>
   
   <div class="div-dashboard" >
        <InputBar  />
        <TasksList  />
    </div>

</template>

<style scoped>

.div-dashboard{
    padding: 1rem;
    background-color:#ECEFF1 ;
}



@media (min-width: 769px) {

    .div-dashboard {
        padding: 3rem;
        width: 100%;
    }
}

</style>
