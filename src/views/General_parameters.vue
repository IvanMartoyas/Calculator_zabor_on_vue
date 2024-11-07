<template>
    <div>
        
        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right ">
                <Range_gorizontal
                    :title="'Длина периметра (м).'"
                    @selectedValue="selectedPerimetrValue"
                    :value="data.general_parameters.size_perimetr.value.val"
                    :min="data.general_parameters.size_perimetr.value.min"    
                    :max="data.general_parameters.size_perimetr.value.max"    
                    :step="data.general_parameters.size_perimetr.value.step"    
                ></Range_gorizontal>
            </div>
            <div class="calc__rowItem">
                <Range_vertical 
                    :title="'Высота забора (мм.)'"
                    :values="data.general_parameters.height_fance.values"
                    :active_value = "this.data.general_parameters.active_parametrs.height_fance"
                    @selectedValue="selected_height_fance_Value"  
                ></Range_vertical>
            </div>
        </div>

        <div class="">
            <Color_picker 
                :colors="data.general_parameters.colors"
                :active_color = "data.size_panel.active_parametrs.collor_active"
                @selected_color="selectedColor"
            />
        </div>
        <div class="statistic__row--wrapper statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>
                <div class="statistic__params">
                    <div class="statistic__param">
                        <span class="statistic__paramTitle">Длина периметра:</span>
                        <span class="statistic__paramDot"> </span>
                        <span class="statistic__paramValue">{{ data.general_parameters.active_parametrs.size_perimetr }}</span>
                    </div>
                    <div class="statistic__param">
                        <span class="statistic__paramTitle">Высота:</span>
                        <span class="statistic__paramDot"> </span>
                        <span class="statistic__paramValue">{{ data.general_parameters.height_fance.values[data.general_parameters.active_parametrs.height_fance] / 1000 }}</span>
                    </div>
                    <div class="statistic__param">
                        <span class="statistic__paramTitle">Цвет:</span>
                        <span class="statistic__paramDot"> </span>
                        <div class="statistic__paramValue">
                            <span class="statistic__paramValue--color" 
                                :style="{backgroundColor: data.general_parameters.active_parametrs.collor_active.value}" 
                            ></span>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div class="statistic__colom">
                <div class="statistic__title">Стоимость</div>
                <div class="statistic__values">
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Вес изделия:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>от 1 709,44 кг.</span></div>
                    </div>
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Цена панели:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>2 007 р</span>.</div>
                    </div>
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Цена изделия:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>от 393 586 р.</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Color_picker from '@/components/Colors/Color-picker.vue';
 import Range_gorizontal from '@/components/Range/Range_gorizontal/Range_gorizontal.vue';
 import Range_vertical from '@/components/Range/Range_vertical/Range_vertical.vue';

export default {
    components: {
        Color_picker,
        Range_gorizontal,
        Range_vertical
    },
    data() {    
        return {
        
        }
    },
    mounted() {
        
        // console.log('this.data ',this.data.general_parameters.colors)
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        }
    },
    methods: {
        selectedColor(value){ 
            this.data.general_parameters.active_parametrs.collor_active = value;
            this.$store.dispatch('setData_calc', this.data );
        },
        selectedPerimetrValue(value){ 
            // console.log("selectedPerimetrValue 321",value)
            this.data.general_parameters.active_parametrs.size_perimetr = value;
            this.$store.dispatch('setData_calc', this.data );
        },
        selected_height_fance_Value(index) {
            this.data.general_parameters.active_parametrs.height_fance = index;
            this.$store.dispatch('setData_calc', this.data );
        }
    }
}
</script>
<style>


</style>