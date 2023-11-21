import type { ITask } from '@/components/Dashboard.vue'
import { defineStore } from 'pinia'

interface IState {
    formData: ITask,
    tasks: ITask[]
}

export const useTasksStore = defineStore('tasks', {
    state: ():IState =>{
        return {
            formData:{
                task:"",
                completed:false
            },
            tasks:[]
        }
    },
    actions:{
        addTask(task:ITask){
            const objCopy:ITask = {...task}
            this.tasks.push(objCopy)
            localStorage.setItem("@Tasks", JSON.stringify(this.tasks))
            task.task = ""
           
        },
        deleteList(){
            const newArr:ITask[] = this.tasks.filter((task) =>!task.completed)
            this.tasks = newArr
            localStorage.setItem("@Tasks",JSON.stringify(this.tasks))

        }
    },
    getters:{
        completedTasks():ITask[] {
            return this.tasks.filter((task)=>task.completed)
        },
        uncompletedTasks():ITask[] {
            return this.tasks.filter((task)=>!task.completed)
        }
    }

})