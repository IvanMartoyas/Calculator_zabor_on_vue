<template>
  <div>
 
    <Tab></Tab>
    <Parametrs_perimetr class="wrapper"></Parametrs_perimetr>

  </div>
</template>

<script>
import Tab from './components/Tabs_menu/Tab.vue';
import Parametrs_perimetr from './views/Parametrs_perimetr.vue';

export default {
  name: 'App',
  components: {
    Tab,
    Parametrs_perimetr
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/elemets_ui.css';
  @import '@/assets/css/style.css';
  
  /* временно */
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    font-family: Arial;
  }
</style>
