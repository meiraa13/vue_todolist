<template>
    <aside>
        <h1 class="text-xl" >Vue Todo App</h1>
    </aside>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"Sidebar",

})

</script>

<style scoped>

aside {
    border-right: 2px solid;
    width: 20rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    background-color: burlywood;

}

</style>