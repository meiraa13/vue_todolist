<template>
    <div>
        <p v-if="tasks.length==0">Você ainda não possui nenhuma tarefa registrada</p>
        <ul v-else>
            <li v-for="(item, index) in tasks" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
        


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"TasksList",
    props:["tasks"]
})


</script>

<style scoped>
    
li {
    list-style: square;
    padding: 0.5rem;
    
}


</style>