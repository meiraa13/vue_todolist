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

<main>
  <Sidebar />
  <Dashboard />
</main>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;

}

button {
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
}

button:hover{
  background-color:#CFD8DC ;
}

main {

  background-color: #ECEFF1;
  display: flex;
  flex-direction: column;
  height:100vh ;


}

@media (min-width: 769px) {

  main {
    flex-direction: row;
    height: 100vh;
  }
}



</style>
