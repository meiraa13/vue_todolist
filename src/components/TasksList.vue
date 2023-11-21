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
    <div >
        <p v-if="tasks.length==0">Você ainda não possui nenhuma tarefa registrada</p>
        <div v-else class="d-flex ga-12">
            <div>
                <h1>Tarefas completadas</h1>
                <v-card class="overflow-auto bg-blue-grey-lighten-4 text-decoration-line-through"  height="300" width="400">
                    <v-list-item v-for="(task, index) in completedTasks" :key="index">
                        <p>{{ task.task }}</p>
                    </v-list-item>
                </v-card>
                <v-btn v-show="completedTasks.length>0" @click="deleteList" >Limpar lista</v-btn>
            </div>
            <div>
                <h1>Tarefas incompletas</h1>
                <v-card class="overflow-auto" height="300" width="400">
                    <v-list-item v-for="(task, index) in uncompletedTasks" :key="index">
                        <p>{{ task.task }}</p>
                    </v-list-item>
                </v-card>
            </div>


        </div>
    </div>
</template>
        
