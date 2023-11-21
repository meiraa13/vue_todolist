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
        <ul class="pa-2 mt-15 overflow-auto h-50 bg-white rounded-lg "  v-show="tasks.length>0">
            <v-list-item class="mb-2 rounded-lg " variant="outlined" v-for="(task, index) in tasks" :key="index">
                <input
                type="checkbox"
                v-model="task.completed"
                /> <span :for="task.task">{{ task.task }}</span>
            </v-list-item>
        </ul>

                
</template>


