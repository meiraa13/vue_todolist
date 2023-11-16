<template>
    <div class="div-dashboard">
        <form @submit.prevent="addTask()">
            <input v-model="task" placeholder="Insira uma tarefa" />
            <button>Adicionar Tarefa</button>
        </form>
        <TasksList :tasks="tasks" />
    </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from './SearchBar.vue';
import TasksList from './TasksList.vue';



export default defineComponent({
    name:"Dashboard",
    components:{
    SearchBar,
    TasksList
    },
    data(){
        return{
            task:"",
            tasks:[] as string[],
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.task)
            this.task = ""
            console.log(this.tasks)
        }
    }
})
</script>

<style scoped>
.div-dashboard {
    width: 70%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
 
    gap: 4rem;
}

form {
    display: flex;
    gap: 2rem;
}

input {
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 30rem;
}

button {
    background-color: aqua;
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 0.5rem;
}

</style>