<template>
      <div class="wrapper">
        <div id="tabs-wrapper" class="tabs__block">

            <div 
                class="tabMenu__button"
                @click="isActive = true"
            >Меню</div>

            <div class="overlay__menu" @click="isActive = false" :class="{'overlay__menu--active': isActive}"><div class="close__button"  @click="isActive = false"><img :src="require('@/assets/img/_close.png')" alt=""></div></div>
            
            <div class="tabs tabMenu" :class="{'tabMenu--active': isActive}">
                    
              <span 
                class="tab tabMenu__item" 
                v-for="(item, i) in menu_items" 
                :key="item" 
                v-show="item.active" 
                @click="setComponent(item.slug, i)"
                :class="{active: menu_items[i].slug == componentId}"
              >{{item.title}}</span>
            </div>
            <div class="tabs-content tabContent">
                <div class="tab-item tabContent__item">
                    <component :is="componentId"></component>
                </div>
            </div>
        </div>
      </div>
</template>
<script>
// import { _menu_items } from '@/components/Tabs_menu/_menu.js'; // пункты меню
import General_parameters from '@/views/General_parameters.vue';
import Size_panel from '@/views/Size_panel.vue';
import Version_pillar from '@/views/Version_pillar.vue';
import Additional_elements_fence from '@/views/Additional_elements_fence.vue';
import Wickets from '@/views/Wickets.vue';
import Gates from '@/views/Gates.vue';
import General_view_fence from '@/views/General_view_fence.vue';
import Fasteners_fence from '@/views/Fasteners_fence.vue';

export default {
    name: "Tab",
    components: {
        General_parameters,
        Size_panel,
        Version_pillar,
        Additional_elements_fence,
        Wickets,
        Gates,
        General_view_fence,
        Fasteners_fence
    },
    data() {
        return {
            menu_items: [],
            componentId: '',
            isActive: false
        }
    },
    computed: {
        menu() {
            return this.$store.getters.Menu_items;
        }
    },
    mounted() {
        this.menu_items = this.menu;
        this.componentId = this.menu_items[0].slug;// активирую первый элемент из массива
        // this.$store.getters.Menu_items
    },
    methods: {
        setComponent(slug, index) { 
            this.componentId = slug;
        },
    },
    
}
</script>
<style lang="scss">
   @import './style_tab.css';
</style>