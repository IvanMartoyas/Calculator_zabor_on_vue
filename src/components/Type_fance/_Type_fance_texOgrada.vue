<template>
    <div v-if="loader">
        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right">
                <Range_vertical 
                    :title="data.size_panel.height.title"
                    :values="data.size_panel.height.values"
                    :active_value = "this.data.size_panel.active_parametrs.height_fance"
                    @selectedValue="selectedValue_fance_Value"  
                ></Range_vertical>
            </div>
        </div>

        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right">
                <div class="calc__title">Тип ограды</div>
                <div class="calc__subTitle"></div>
                <div class="calc__content">
               
                    <div class="calc__row type_fance_variants">
                        <div class="type_fance_variants__item" :class="{active: isVariant}" @click="setVariant(true)">
                            <img :src="IMG_LIST.type123.src" alt="type_fance_variants">
                            <div :class="type_fance_variants__label">C выпуском</div>
                        </div>
                   
                        <div class="type_fance_variants__item" :class="{active: !isVariant}" @click="setVariant(false)">
                            <img :src="IMG_LIST.type123.src" alt="type_fance_variants">
                            <div :class="type_fance_variants__label">Безопастная</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="calc__localRow">
                <Cell_size
                    :title="type_fance.params.size_verticle.title"
                    :values="type_fance.params.size_verticle.values"
                    :active_value="type_fance.params.selected_data.size_verticle"
                    @selectedCell_size="size_verticle_value"
                ></Cell_size>
            </div>
            
        </div>
 
        <Color_picker 
            :colors="data.size_panel.colors"
            :active_color = "data.size_panel.active_parametrs.collor_active"
            @selected_color="size_panel_selectedColor"
        />

        <div class="statistic__row--wrapper statistic type_fance__statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>
                <div class="statistic__params">
                    <div class="statistic__row gap-1">
                        <div class="statistic__colom">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Тип забора:</span>
                                <span class="statistic__paramDot"> </span> 
                                <span class="statistic__paramValue">TECH</span>
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
                                <span class="statistic__paramTitle">Тип ограды:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ getTypeFance() }} </span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Шаг заполнения</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ type_fance.params.size_verticle.values[type_fance.params.selected_data.size_verticle] }} ММ.</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Цвет:</span>
                                <span class="statistic__paramDot"> </span>
                                <div class="statistic__paramValue">
                                    <span class="statistic__paramValue--color" 
                                        :style="{backgroundColor: data.size_panel.colors[data.size_panel.active_parametrs.collor_active].value}" 
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
                        <div class="statistic__value"><span>
                            {{ Math.round(Weight.amount/1000).toLocaleString() }} КГ.
                        </span></div>
                    </div>
                    <div class="statistic__valuesRow">
                        <div class="statistic__valuesTitle">Цена панели:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value"><span>
                            {{ Price.panel.height[data.general_parameters.active_parametrs.height_fance].cost.toLocaleString() }} Руб
                        </span></div>
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
            isVariant: true, // вариант тех ограды первый или второй
            loader: false
        }
    },
    mounted() {
        this.setVariant(this.type_fance.params.selected_data.fance_variant);

        this.IMG_LIST = this.$store.getters.IMAGES;
        this.loader = true;
    },
    
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
        type_fance() {
            return this.$store.getters.Data_calc.size_panel.type_fance[2];
        },
        Price() {
            return this.$store.getters.Price;
        },
        Statisticks () {
            return this.$store.getters.Statisticks;
        },
        Weight () {
            return this.$store.getters.Weight;
        },
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
        // selectedDiametr(val) {
        //     // console.log("selectedCell_size ",val)
        //     this.data.size_panel.type_fance[2].params.selected_data.diameter_index = val;
        //     this.$store.dispatch('setData_calc', this.data );
        // },
        size_verticle_value(val) {
            // console.log("size_verticle_value ",val)
            this.data.size_panel.type_fance[2].params.selected_data.size_verticle = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        setVariant(variant) {
            if(variant) {
                this.isVariant = true;
                this.data.size_panel.type_fance[2].params.selected_data.fance_variant = true;
            } else {
                this.isVariant = false;
                this.data.size_panel.type_fance[2].params.selected_data.fance_variant = false;
            }
            this.$store.dispatch('setData_calc', this.data );
        },
        getTypeFance() {
            // выводит тип ограды
            let type_fance = this.data.size_panel.type_fance[2].params.selected_data.fance_variant;
            if(type_fance) {
                return 'с выпуском';
            } else {
                return 'Безопастная';
            }
        }
    }
}
</script>