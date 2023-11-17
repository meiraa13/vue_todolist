<script lang="ts">
import { defineComponent } from 'vue';
import InputBar from './InputBar.vue';
import TasksList from './TasksList.vue';

export default defineComponent({
    name:"Dashboard",
    components:{
    InputBar,
    TasksList,
},
    data(){
        return{
            tasks:[] as string[],
        }
    },
    methods:{
        addTask(task:string){
            this.tasks.push(task)
            localStorage.setItem("@Tasks", JSON.stringify(this.tasks))
           
        },
        deleteTask(indexFrom:number){
            const newArr = this.tasks.filter((task, index)=> index !== indexFrom)
            this.tasks = newArr
            localStorage.setItem("@Tasks",JSON.stringify(this.tasks))

        }
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
   
   <div class="div-dashboard">
        <InputBar @submitTask="addTask" />
        <TasksList :tasks="tasks" @delete="deleteTask" />
    </div>

</template>

<style scoped>
.div-dashboard {
    width: 70%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

</style>