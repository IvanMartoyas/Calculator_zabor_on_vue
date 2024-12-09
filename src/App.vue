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
  },
  mounted() {
    let _this = this;
        
    setTimeout(()=>{
      _this.$store.dispatch('init_params', _this );
    }, 300 )
  }
}
</script>

<style lang="scss" scoped>
  @import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
  @import '@/assets/css/elemets_ui.css';
  @import '@/assets/css/style.css';
  
  #app img {
    filter: grayscale(1);
  }
  #app button {
    transition: .5s;
  }
</style>
