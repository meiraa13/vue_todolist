<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Dashboard from './components/Dashboard.vue';

export default defineComponent({
  name:"App",
  components:{
    Sidebar,
    Dashboard
    
  }
})
</script>

<template>

<main class="d-flex ">
  <Sidebar />
  <Dashboard />
</main>

</template>


<style>

main {
  height: 100vh;



}
  



</style>
