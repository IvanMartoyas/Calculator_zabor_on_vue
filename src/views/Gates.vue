<template>
    <div>
        <div class="calc_row calc__localRow">
            <div class="calc__rowItem">
                <div class="calc__top calc__row">
                    <div class="calc__title">Распашные ворота</div>
                </div>
                <div class="calc__content Gates__items Gates__row_params Gates__row">
                    <div>
                        <Block_item
                            @setValue="setValueSmart"
                            :title="'SMART'" 
                            :info="'SMART'" 
                            :input="true" 
                            img="_smart.jpg"
                            :input_data="data.Wickets.active_parametrs.smart"
                        
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueBars"
                            :title="'BARS'" 
                            :info="'BARS'" 
                            :input="true" 
                            img="_bars.jpg"
                            :input_data="data.Wickets.active_parametrs.bars"
                        
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueFanse"
                            :title="'FANSE'" 
                            :info="'FANSE'" 
                            :input="true" 
                            img="_fence.jpg"
                            :input_data="data.Wickets.active_parametrs.fance"
                        
                        ></Block_item>
                    </div>
                </div>

                <div class="calc__top calc__row">
                    <div class="calc__title">Раздвижные ворота</div>
                </div>
                <div class="calc__content Gates__items Gates__row_params Gates__row">
                    <div>
                        <Block_item
                            @setValue="setValueSmart"
                            :title="'SMART'" 
                            :info="'SMART'" 
                            :input="true" 
                            img="_smart.jpg"
                            :input_data="data.Wickets.active_parametrs.smart"
                        
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueBars"
                            :title="'BARS'" 
                            :info="'BARS'" 
                            :input="true" 
                            img="_bars.jpg"
                            :input_data="data.Wickets.active_parametrs.bars"
                        
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueFanse"
                            :title="'FANSE'" 
                            :info="'FANSE'" 
                            :input="true" 
                            img="_fence.jpg"
                            :input_data="data.Wickets.active_parametrs.fance"
                        
                        ></Block_item>
                    </div>
                </div>

                <div class="calc__rowItem">
                    <div class="calc__row align-start">
                        <Range_vertical 
                            :title="data.Wickets.height.title"
                            :values="data.Wickets.height.values"
                            :active_value = "this.data.Wickets.active_parametrs.height"
                            @selectedValue="setHeight"  
                        ></Range_vertical>
                    </div>  
                </div>

            </div>

        </div>


        <div class="calc__row calc__localRow Gates__row_params">

            <Select_list
                v-if="active_params.smart != 0"
                :title ="data.Wickets.opening_width_smart.title"
                :values="data.Wickets.opening_width_smart.values"
                :active_value = "data.Wickets.active_parametrs.opening_width_smart"
                @selected_value="selected_smart_value"
            ></Select_list>
            <Select_list
                v-if="active_params.bars != 0"
                :title ="data.Wickets.opening_width_bars.title"
                :values="data.Wickets.opening_width_bars.values"
                :active_value = "data.Wickets.active_parametrs.opening_width_bars"
                @selected_value="selected_bars_value"
            ></Select_list>

        </div>

        
        <div class="calc__rowItem">
            <Color_picker 
                :colors="data.Gates.colors"
                :active_color = "data.Gates.active_parametrs.collor_active"
                @selected_color="selectedColor"
            />
        </div>

 
        <div class="statistic__row statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>

                <div class="statistic__row" v-if="active_params.smart != 0">
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Количество калиток SMART:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ active_params.smart }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Ширина проема SMART:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.Wickets.opening_width_smart.values[active_params.opening_width_smart] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="statistic__row" v-if="active_params.bars != 0">
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Количество калиток BARS:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ active_params.bars }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Ширина проема BARS:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.Wickets.opening_width_bars.values[active_params.opening_width_bars] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="statistic__row" v-if="active_params.fance != 0">
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Количество калиток FANCE:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ active_params.fance }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Ширина проема FANCE:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.Wickets.opening_width_fance.values[active_params.opening_width_fance] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
              

                <div class="statistic__row">
                    <div class="statistic__colom">
                        <div class="statistic__param">
                            <span class="statistic__paramTitle">Высота калитки:</span>
                            <span class="statistic__paramDot"> </span>
                            <span class="statistic__paramValue">{{ data.Gates.height.values[data.Gates.active_parametrs.height] / 1000 }}м</span>
                        </div>
                    </div>
                    <div class="statistic__colom">
                        <div class="statistic__param">
                            <span class="statistic__paramTitle">Цвет:</span>
                            <span class="statistic__paramDot"> </span>
                            <span class="statistic__paramValue--color" 
                                :style="{backgroundColor: data.Gates.active_parametrs.collor_active.value}" 
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
 import Range_vertical from '@/components/Range/Range_vertical/Range_vertical.vue';
 import Block_item from '@/components/Block_item/Block_item.vue';
 import Color_picker from '@/components/Colors/Color-picker.vue';
 import Select_list from '@/components/Select_list/Select_list.vue';

    export default {
        components: {
            Block_item,
            Color_picker,
            Select_list,
            Range_vertical
        },
        data() {    
            return {

            }
        },
        methods: {
            selectedColor(value){ 
                this.data.Gates.active_parametrs.collor_active = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueSmart(value){ 
                this.data.Wickets.active_parametrs.smart = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueBars(value){ 
                this.data.Wickets.active_parametrs.bars = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueFanse(value){ 
                this.data.Wickets.active_parametrs.fance = value;
                this.$store.dispatch('setData_calc', this.data );
            },

       
            selected_smart_value(value){ 
                this.data.Wickets.active_parametrs.opening_width_smart = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            selected_bars_value(value){ 
                this.data.Wickets.active_parametrs.opening_width_bars = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            selected_fance_value(value){ 
                this.data.Wickets.active_parametrs.opening_width_fance = value;
                this.$store.dispatch('setData_calc', this.data );
            },

            setHeight(value){ 
                this.data.Wickets.active_parametrs.height = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            // size_panel_selectedColor(value){ 
            //     this.data.version_pillar.active_parametrs.collor_active = value;
            //     this.$store.dispatch('setData_calc', this.data );
            // },
        },
        computed: {
            data() {
                return this.$store.getters.Data_calc;
            },
            active_params() {
                return this.$store.getters.Data_calc.Wickets.active_parametrs;
            }
        },
    }
</script>
<style lang="css" scoped>
    .Gates__items {
        display: flex;
        gap: 1rem;
    }
    .Gates__row_params {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .Gates__row {
        padding-bottom: 1.5rem;
    }
</style>