<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState } from 'pinia';
import { useTasksStore } from '@/stores/taskStore';

export default defineComponent({
    name:"UncompletedTasks",
    computed:{
        ...mapWritableState(useTasksStore,['tasks'])

    }

})

</script>

<template>
        <ul  v-show="tasks.length>0">
            <li  v-for="(task, index) in tasks" :key="index">
                <input type="checkbox" v-model="task.completed"/> <span :for="task.task">{{ task.task }}</span>
            </li>
        </ul>

                
</template>

<style scoped>

ul {
    background-color: white;
    border: 3px solid cadetblue;
    padding: 1rem;
    border-radius: 0.5rem;
    opacity: 0.9;
}


@media (min-width: 769px) {
    ul{
        background-color: white;
        border: 3px solid cadetblue;
        overflow: auto;
        padding: 1rem;
        border-radius: 0.5rem;
        max-height: 19rem;
        height: 19rem;
        
    }   

    span {
        text-decoration: underline;
    }

}
  



</style>

