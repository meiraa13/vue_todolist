<script lang="ts">
import { defineComponent } from 'vue';
import UncompletedTasks from './UncompletedTasks.vue';
export default defineComponent({
    name: "Sidebar",
    components: { UncompletedTasks }
})
</script>


<template>
    
    <v-card 
    image="https://www.marketing91.com/wp-content/uploads/2020/03/To-do-List-scaled.jpg"  
    class="pa-10 img" 
    elevation="10"
    >   
        <h3 class="text-center">Marque a tarefa quando concluída</h3>
        <UncompletedTasks />
    </v-card>

</template>

