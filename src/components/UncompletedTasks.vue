<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"UncompletedTasks",
    props:["tasks"],

})

</script>

<template>
      <div>
        
        <ul v-show="tasks.length>0">
            <p>Marque a tarefa quando concluída</p>
            <li v-for="(task, index) in tasks" :key="index">
                <input
                type="checkbox"
                v-model="task.completed"
                :id="task.task"
                /> <label :for="task.task">{{ task.task }}</label>
                
            </li>
        </ul>
    </div>



</template>