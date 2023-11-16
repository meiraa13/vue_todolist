<template>
<main>
  <Sidebar />
  <Dashboard />
</main>
  
  
</template>


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


<style>

main {
  display: flex;
  height: 100vh;
  gap: 5rem;


}
  



</style>
