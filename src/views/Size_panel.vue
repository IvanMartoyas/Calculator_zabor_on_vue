<template>
    <div>
        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right ">
                <Type_fance></Type_fance>
            </div>
            <div class="calc__rowItem">
                <div class="calc__top calc__row">
                    <div class="calc__title">Длина секции (мм).</div>
                </div>
                <div class="calc__content">
                    <div 
                        class="btn btn-item"
                        v-for="(item ,i) in data.size_panel.section_size" 
                        :key="item" 
                        :class="{active: (i == data.size_panel.active_parametrs.section_size_value)}"
                        @click="setSizeSection(i)"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>

        <div>
            <component :is="componentId"></component>
        </div>
    </div>
</template>
<script>
 import Type_fance from '@/components/Type_fance/Type_fance.vue';
 import Type_fance_3D from '@/components/Type_fance/_Type_fance_3D.vue';
 import Type_fance_2D from '@/components/Type_fance/_Type_fance_2D.vue';
 import TexOgrada from '@/components/Type_fance/_Type_fance_texOgrada.vue';

 import Color_picker from '@/components/Colors/Color-picker.vue';
 import Range_gorizontal from '@/components/Range/Range_gorizontal/Range_gorizontal.vue';
 import Range_vertical from '@/components/Range/Range_vertical/Range_vertical.vue';

export default {
    components: {
        Color_picker,
        Range_gorizontal,
        Range_vertical,

        Type_fance,
        Type_fance_3D,
        Type_fance_2D,
        TexOgrada,
    },
    data() {    
        return {
            componentId: 'Type_fance_3D',
            
        }
    },
    mounted() {
        let index = this.data.size_panel.active_parametrs.type_fance_index || 0;
        if(index == 0 ) {
            this.componentId = 'Type_fance_3D';
        }
        if(index == 1 ) {
            this.componentId = 'Type_fance_2D';
        }
        if(index == 2 ) {
            this.componentId = 'TexOgrada';
        }
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
        type_fance_index() {
            return this.$store.getters.Data_calc.size_panel.active_parametrs.type_fance_index;
        }
    },
    methods: {
        size_panel_selectedColor(value){ 
            this.data.size_panel.active_parametrs.collor_active = value;
            this.$store.dispatch('setData_calc', this.data );
        },
        setSizeSection(index) { // сохраняет длинну секции
            this.data.size_panel.active_parametrs.section_size_value = index;
            this.$store.dispatch('setData_calc', this.data );
        },

    },
    watch: {
        type_fance_index(newData, oldData) {

            if(newData == 0 ) {
                this.componentId = 'Type_fance_3D';
            }
            if(newData == 1 ) {
                this.componentId = 'Type_fance_2D';
            }
            if(newData == 2 ) {
                this.componentId = 'TexOgrada';
            } 
        }
    }
}
</script>
<style>


</style>