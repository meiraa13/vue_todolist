<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState, mapState, mapActions } from 'pinia';
import { useTasksStore } from '@/stores/taskStore';

export default defineComponent({
    name:"TasksList",
    methods:{
        ...mapActions(useTasksStore,['deleteList'])
    },
    computed:{
        ...mapWritableState(useTasksStore,['tasks']),
        ...mapState(useTasksStore,['completedTasks','uncompletedTasks'])
    }
})
</script>

<template>
    <div class="div-tasklist" >
        <p  v-if="tasks.length==0">Você ainda não possui nenhuma tarefa registrada</p>
        <div class="div-tasks" v-else>
            <div class="div-ul" >
                <h4>Completed Tasks</h4>
                <ul class="completed">
                    <li v-for="(task, index) in completedTasks" :key="index">
                        <p class="b-bottom">{{ task.task }}</p>
                    </li>
                </ul>
                <button v-show="completedTasks.length>0" @click="deleteList" >Clear tasks</button>
            </div>
            <div class="div-ul">
                <h4>Uncompleted Tasks</h4>
                <ul >
                    <li v-for="(task, index) in uncompletedTasks" :key="index">
                        <p class="b-bottom" >{{ task.task }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

.div-tasklist{
    margin-top: 2rem;


}

.b-bottom{
    border-bottom: 1px solid;
}

.div-tasks{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
}

.div-ul {
    width: 100%;
    display: flex;
    flex-direction: column;
}

ul{
    border: 3px solid #E53935;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    height: 200px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
 

}


h4 {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}   

button {
    margin-top: 0.5rem;
    width: fit-content;
    padding: 0.3rem 1rem;
}

.completed {
    text-decoration: line-through;
    background-color: white;
    border: 3px solid #43A047;
}


@media (min-width: 769px) {

    .div-tasks{
        flex-direction: row;
        height: 100%;
    }

    ul {
        height: 250px;
        overflow: auto;
        max-width: 400px;
    }

    h4{
        font-size: larger;
        justify-content: start;
    }


}

</style>
        
