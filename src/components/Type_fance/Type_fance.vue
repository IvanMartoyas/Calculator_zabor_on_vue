<template>
    <div v-if="loader">
        <div class="calc__top calc__row">
            <div class="calc__title">Тип забора</div>
        </div>
        <div class="calc__content" :key="this.data.size_panel.active_parametrs.type_fance_index">
            <div class="typeFance">
                <div class="typeFance__item" @click="setFanceType(0)" :class="{active: fance_active == 0}">
                    <div class="typeFance__img"><img :src="IMG_LIST.D3_zabor.src" alt="3Д забор "></div>
                    <div class="typeFance__title">
                        3Д забор <i class="element__toolTip--show"> ?
                            <span class="element__toolTip">Панель с V- образными изгибами</span>
                        </i>
                    </div>
                </div>
                <div class="typeFance__item" @click="setFanceType(1)" :class="{active: fance_active == 1}">
                    <div class="typeFance__img"><img :src="IMG_LIST.D2_ograda.src" alt="2Д Ограда "></div>
                    <div class="typeFance__title">
                        2Д Ограда <i class="element__toolTip--show"> ?
                            <span class="element__toolTip">Устойчивость к горизонтальным нагрузкам</span>
                        </i>
                        
                    </div>
                </div>
                <div class="typeFance__item" @click="setFanceType(2)" :class="{active: fance_active == 2}">
                    <div class="typeFance__img"><img :src="IMG_LIST.texograda.src" alt="Техограда"></div>
                    <div class="typeFance__title">
                        Техограда <i class="element__toolTip--show"> ?
                            <span class="element__toolTip">  Модульное профильное ограждение  </span>
                        </i>
                       
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  
</template>

<script>
 // полностью работает как надо ПРОВЕРЕН!
 import Color_picker from '@/components/Colors/Color-picker.vue';
 import Range_gorizontal from '@/components/Range/Range_gorizontal/Range_gorizontal.vue';
 import Range_vertical from '@/components/Range/Range_vertical/Range_vertical.vue';

export default {
    components: {
        Color_picker,
        Range_gorizontal,
        Range_vertical,
    },
    data() {    
        return {
            fance_active: 0,
            loader: false
        }
    },
    mounted() {
        this.setFanceType(this.$store.getters.Data_calc.size_panel.active_parametrs.type_fance_index)
       
        this.IMG_LIST = this.$store.getters.IMAGES;
        this.loader = true;
    },
    methods: {
        setFanceType(index) {
            this.fance_active = index;
            this.setType_fance_index(index)

            let menu = this.$store.getters.Menu_items;
            if(index == 2) {
                menu[3].active = false;
                this.$store.dispatch('menu_items', menu );
            } else {
                menu[3].active = true;
                this.$store.dispatch('menu_items', menu );
            }
        },
        setType_fance_index(index) { // сохраняет выбраный тип забора
            this.data.size_panel.active_parametrs.type_fance_index = index;
            this.$store.dispatch('setData_calc', this.data );
        },
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
        type_index() {
         
            this.setFanceType(this.$store.getters.Data_calc.size_panel.active_parametrs.type_fance_index)
            return this.$store.getters.Data_calc.size_panel.active_parametrs.type_fance_index;
        },
        menu() {
            return this.$store.getters.Menu_items;
        },
    },
}
</script>
<styles scoped>
    @import './style.css';
</styles>