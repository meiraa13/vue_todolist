<script lang="ts">
import { defineComponent } from 'vue';
import InputBar from './InputBar.vue';
import TasksList from './TasksList.vue';
import UncompletedTasksVue from './UncompletedTasks.vue';

export interface IData {
    task:string,
    completed:boolean
}

export default defineComponent({
    name:"Dashboard",
    components:{
    InputBar,
    TasksList,
    UncompletedTasksVue,
},
    data(){
        return{
            tasks:[] as IData[],
        }
    },
    methods:{
        addTask(task:IData){
            const objCopy = {...task}
            this.tasks.push(objCopy)
            localStorage.setItem("@Tasks", JSON.stringify(this.tasks))
           
        },
        deleteTask(){
            const newArr = this.tasks.filter((task) =>!task.completed)
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
        <UncompletedTasksVue :tasks="tasks"/>
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