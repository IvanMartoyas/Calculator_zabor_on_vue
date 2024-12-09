<template>
    <div v-if="loader" >
        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right ">
                <Range_gorizontal
                    :title="'Длина периметра (м).'"
                    @selectedValue="selectedPerimetrValue"
                    :value="data.general_parameters.active_parametrs.size_perimetr"
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
                :active_color = "data.general_parameters.active_parametrs.collor_active"
                @selected_color="selectedColor"
            />
        </div>
        <div class="statistic__row--fluid statistic">
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
                                :style="{backgroundColor: data.general_parameters.colors[data.general_parameters.active_parametrs.collor_active].value}" 
                            ></span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="statistic__colom statistic__colom--values">
                <div class="statistic__title">Стоимость</div>
                <div class="statistic__values">
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Вес изделия:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>
                            {{Math.round(Weight.amount / 1000).toLocaleString() }} КГ.
                        </span></div>
                    </div>
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Цена панели:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>{{ Price.panel.height[data.general_parameters.active_parametrs.height_fance].cost.toLocaleString() }} Руб</span></div>
                    </div>
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Цена изделия:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>
                            от {{ Statisticks.amount_price.toLocaleString()  }} Руб
                        </span></div>
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
 import {WEIGHT} from '@/model/weight_table'

export default {
    components: {
        Color_picker,
        Range_gorizontal,
        Range_vertical
    },
    data() {    
        return {
            loader: false
        }
    },
    async mounted() {
        let _this = this;
        let panel_count=0;
        setTimeout(()=>{
            // при первой загрузке должны загрузиться данные из ulr, 
            // после этого нужно посчитать количество панелей вслед за инззменением данных 
            // заработает расчёт статистики и веса
            _this.Price.panel.count = Math.round((_this.data.general_parameters.active_parametrs.size_perimetr *1000) / _this.Price.panel.width_mm);
            panel_count = _this.Price.panel;

            var _WEIGHT = new WEIGHT(_this)
            panel_count = _WEIGHT.calc__weight__update();

            _this.loader = true;
        },400);

        
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
        Price() {
            return this.$store.getters.Price;
        },
        active_params() {
            // можно сюда вставить, но поле при загрузке несколько раз отрабатывает
            return this.$store.getters.Data_calc.general_parameters.active_parametrs;
        },
        Statisticks () {
            return this.$store.getters.Statisticks;
        },
        Weight () {
            return this.$store.getters.Weight;
        },
    },
    methods: {
        selectedColor(value){ 
            this.data.general_parameters.active_parametrs.collor_active = value;
            this.$store.dispatch('setData_calc', this.data );
            
        },
        selectedPerimetrValue(perimetr){ 
            this.data.general_parameters.active_parametrs.size_perimetr = perimetr;
            this.$store.dispatch('setData_calc', this.data );
 
            if((perimetr * 1000) < this.Price.panel.width_mm) {
                this.Price.panel.count = 1;
                this.$store.dispatch('setPrice', this.Price );
            } else {  // расчитывает количество панелей
                let count_panels = Math.round(((perimetr * 1000) / this.Price.panel.width_mm));
                this.Price.panel.count = count_panels;
                this.$store.dispatch('setPrice', this.Price );
            }
        },
        selected_height_fance_Value(index) {
            this.data.general_parameters.active_parametrs.height_fance = index;
            this.$store.dispatch('setData_calc', this.data );
        },
    }
}
</script>
<style>
.table_result {
    font-size: 15px;
    font-weight: 300;
}
.table_result__head {
    font-size: 17px;
    font-weight: 700;
}
.table_result__content {
}
.table_result__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.table_result__label {
}
.table_result__value {
}

</style>