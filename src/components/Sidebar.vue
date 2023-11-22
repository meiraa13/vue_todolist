<script lang="ts">
import { defineComponent } from 'vue';
import UncompletedTasks from './UncompletedTasks.vue';
export default defineComponent({
    name: "Sidebar",
    components: { UncompletedTasks }
})
</script>


<template>
    
    <div class="div-sidebar"   image="https://www.marketing91.com/wp-content/uploads/2020/03/To-do-List-scaled.jpg"   >   
        <h3 >Task Manager</h3>
        <UncompletedTasks />
    </div>

</template>

<style scoped>

.div-sidebar{

    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 15rem;
    background-image: url('/todo-img.jpg');
    background-position: center;
    background-size: cover;
    padding: 1rem;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);

}

h3 {
    text-align: center;
}


@media (min-width: 769px) {

    .div-sidebar {
        padding: 3rem;
        background-image: url('/todo-img.jpg');
        background-position: center;
        width: 400px;
        height: unset;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


}

</style>

