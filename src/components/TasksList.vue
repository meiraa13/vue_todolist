<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"TasksList",
    props:["tasks"],
    methods:{
        emitDelete(indexFrom:number){
            this.$emit('delete',indexFrom)
           
        }
    },
    emits:['delete']
})
</script>

<template>
    <div>
        <p v-if="tasks.length==0">Você ainda não possui nenhuma tarefa registrada</p>
        <ul v-else>
            <li v-for="(task, index) in tasks" :key="index">
                <p>{{ task }}</p>
                <button @click="emitDelete(index)" >deletar</button>
            </li>
        </ul>
    </div>
</template>
        

<style scoped>
    
li {
    list-style: square;
    padding: 0.5rem;
    display: flex;
    gap: 1rem;
    
}

button {
    border: 1px solid;
}


</style>