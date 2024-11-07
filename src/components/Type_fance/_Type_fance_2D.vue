<template>
    <div>
        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right">
                <Range_vertical 
                    :title="data.size_panel.height.title"
                    :values="data.size_panel.height.values"
                    :active_value = "this.data.size_panel.active_parametrs.height_fance"
                    @selectedValue="selectedValue_fance_Value"  
                ></Range_vertical>
            </div>
            <div class="">
             
                    <Diametr
                    :title="type_fance.params.diameter.title"
                    :values="type_fance.params.diameter.values"
                    @selected_value="selectedDiametr"
                ></Diametr>
            </div>
        </div>
        <div class="calc__localRow ">
            <Cell_size
                :title="type_fance.params.cell_size.title"
                :values="type_fance.params.cell_size.values"
                :active_value="type_fance.params.selected_data.cell_size_index"
                @selectedCell_size="selectedCell_size"
            ></Cell_size>
        </div>
        <div class="calc__row calc__localRow align-start">
            <div class=" align-start">
                <Color_picker 
                    :colors="data.size_panel.colors"
                    :active_color = "data.size_panel.active_parametrs.collor_active"
                    @selected_color="size_panel_selectedColor"
                />
            </div>
        </div>
    

        <div class="statistic__row--wrapper statistic type_fance__statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>
                <div class="statistic__params">
                    <div class="calc__row gap-1">
                        <div class="statistic__colom">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Тип забора:</span>
                                <span class="statistic__paramDot"> </span> 
                                <span class="statistic__paramValue">2D</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Высота секции:</span>
                                <span class="statistic__paramDot"> </span> 
                                <span class="statistic__paramValue">{{ data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] }} MM.</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Длина секции:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.size_panel.section_size[data.size_panel.active_parametrs.section_size_value ] }} MM.</span>
                            </div>
                        </div>
                        <div class="statistic__colom">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Диаметр прутка:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ type_fance.params.diameter.values[type_fance.params.selected_data.diameter_index] }} MM.</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Размер ячейки:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ type_fance.params.cell_size.values[type_fance.params.selected_data.cell_size_index] }} ММ.</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Цвет:</span>
                                <span class="statistic__paramDot"> </span>
                                <div class="statistic__paramValue">
                                    <span class="statistic__paramValue--color" 
                                        :style="{backgroundColor: data.size_panel.active_parametrs.collor_active.value}" 
                                    ></span>
                                </div>
                            </div>
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
 import Diametr from '@/components/Diametr/Diametr.vue';
 import Cell_size from '@/components/Cell_size/Cell_size.vue';

export default {
    components: {
        Color_picker,
        Range_gorizontal,
        Range_vertical,
        Diametr,
        Cell_size
    },
    data() {    
        return {
           
        }
    },
    mounted() {

    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
        type_fance() {
            return this.$store.getters.Data_calc.size_panel.type_fance[1];
        }
    },
    methods: {
        setFanceType(index) {
            // this.fance_active = index;
        },
        size_panel_selectedColor(value){ 
            this.data.size_panel.active_parametrs.collor_active = value;
            this.$store.dispatch('setData_calc', this.data );
        },
        selectedValue_fance_Value(index) { // сохраняет длинну секции
            this.data.size_panel.active_parametrs.height_fance = index;
            this.$store.dispatch('setData_calc', this.data );
        },
        selectedDiametr(val) {
            console.log("selectedCell_size ",val)
            this.data.size_panel.type_fance[1].params.selected_data.diameter_index = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        selectedCell_size(val) {
            console.log("selectedCell_size ",val)
            this.data.size_panel.type_fance[1].params.selected_data.cell_size_index = val;
            this.$store.dispatch('setData_calc', this.data );
        },

    }
}
</script>