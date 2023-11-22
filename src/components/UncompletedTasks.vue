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



