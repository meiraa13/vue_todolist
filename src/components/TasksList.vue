<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType  } from 'vue';

interface ITask {
    task:string,
    completed:boolean
}

export default defineComponent({
    name:"TasksList",
    props:{
        tasks:{
            type:Object as PropType<ITask[]>,
            required:true
        }
    },
    methods:{
        emitDelete(){
            this.$emit('delete')
           
        }
    },
    emits:['delete'],
    computed:{
        completedTasks(){
            return this.tasks.filter((task)=>task.completed)
        },
        uncompletedTasks(){
            return this.tasks.filter((task)=>!task.completed)
        }
    }
})
</script>

<template>
    <div>
        <p v-if="tasks.length==0">Você ainda não possui nenhuma tarefa registrada</p>
        <div v-else>
            <div>
                <ul>
                    <h1>Tarefas completadas</h1>
                    <li v-for="(task, index) in completedTasks" :key="index">
                        <p>{{ task.task }}</p>
                    </li>
                </ul>
                <button v-show="completedTasks.length>0" @click="emitDelete" >Limpar lista</button>
            </div>

            <ul>
                <h1>Tarefas incompletas</h1>
                <li v-for="(task, index) in uncompletedTasks" :key="index">
                    <p>{{ task.task }}</p>
                </li>
            </ul>

        </div>
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