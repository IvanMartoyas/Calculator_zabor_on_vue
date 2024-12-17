<template>
    <div v-if="loader">
        <div class="calc_row calc__localRow">
            <div class="calc__rowItem">
                <div class="calc__top calc__row">
                    <div class="calc__title">Распашные ворота</div>
                </div>
                <div class="calc__content Gates__items Gates__row_params Gates__row">
                    <div>
                        <Block_item
                            @setValue="setValueSwing_smart"
                            :title="'SMART'" 
                            :info="'SMART'" 
                            :input="true" 
                            :img="IMG_LIST.smart.src"
                            :input_data="data.Gates.active_parametrs.swing_smart"
                            :active_value="false"
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueSwing_bars"
                            :title="'BARS'" 
                            :info="'BARS'" 
                            :input="true" 
                            :img="IMG_LIST.bars.src"
                            :input_data="data.Gates.active_parametrs.swing_bars"
                            :active_value="false"
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueSwing_fance"
                            :title="'FANSE'" 
                            :info="'FANSE'" 
                            :input="true" 
                            :img="IMG_LIST.fence.src"
                            :input_data="data.Gates.active_parametrs.swing_fance"
                            :active_value="false"
                        ></Block_item>
                    </div>
                </div>

            </div>
            
            <div class="calc__rowItem">

                <div class="calc__top calc__row">
                    <div class="calc__title">Раздвижные ворота</div>
                </div>
                <div class="calc__content Gates__items Gates__row_params Gates__row">
                    <div>
                        <Block_item
                            @setValue="setValueSliding_smart"
                            :title="'SMART'" 
                            :info="'SMART'" 
                            :input="true" 
                            :img="IMG_LIST.smart.src"
                            :input_data="data.Gates.active_parametrs.sliding_smart"
                            :active_value="false"
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueSliding_bars"
                            :title="'BARS'" 
                            :info="'BARS'" 
                            :input="true" 
                            :img="IMG_LIST.bars.src"
                            :input_data="data.Gates.active_parametrs.sliding_bars"
                            :active_value="false"
                        ></Block_item>
                    </div>
            
                    <div >
                        <Block_item
                            @setValue="setValueSliding_fance"
                            :title="'FANSE'" 
                            :info="'FANSE'" 
                            :input="true" 
                            :img="IMG_LIST.fence.src"
                            :input_data="data.Gates.active_parametrs.sliding_fance"
                            :active_value="false"
                        ></Block_item>
                    </div>
                </div>

                <div class="top-padding">
                    <div class="calc__row align-start">
                        <Range_vertical 
                            :title="data.Gates.height.title"
                            :values="data.Gates.height.values"
                            :active_value = "this.data.Gates.active_parametrs.height"
                            @selectedValue="setHeight"  
                        ></Range_vertical>
                    </div>  
                </div>

            </div>

        </div>


        <div class="calc__row calc__localRow Gates__row_params">

            <Select_list
                v-if="active_params.swing_smart != 0 || active_params.swing_bars != 0 || active_params.swing_fance != 0"
                :title ="data.Gates.opening_width_swing.title"
                :values="data.Gates.opening_width_swing.values"
                :active_value = "data.Gates.active_parametrs.swing_width"
                @selected_value="selected_swing_width_value"
            ></Select_list>
            <Select_list
                v-if="active_params.sliding_smart != 0 || active_params.sliding_bars != 0 || active_params.sliding_fance != 0"
                :title ="data.Gates.opening_width_sliding.title"
                :values="data.Gates.opening_width_sliding.values"
                :active_value = "data.Gates.active_parametrs.sliding_width"
                @selected_value="selected_sliding_width_value"
            ></Select_list>

        </div>

        
        <div class="">
            <Color_picker 
                :colors="data.Gates.colors"
                :active_color = "data.Gates.active_parametrs.collor_active"
                @selected_color="selectedColor"
            />
        </div>

 
        <div class="statistic__row--wrapper statistic Gates__statistic">

            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>

                <div class="statistic__row" v-if="active_params.swing_smart != 0 || active_params.swing_bars != 0 || active_params.swing_fance != 0">
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Ширина распашных ворот:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{  data.Gates.opening_width_swing.values[active_params.swing_width] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param statistic__param--NotDot">
                                <span class="statistic__paramTitle">Количество распашных ворот:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">
                                    <ul>
                                        <li  v-if="active_params.swing_smart > 0" >SMART: {{ active_params.swing_smart }} шт.</li>
                                        <li  v-if="active_params.swing_bars > 0" >BARS:  {{  active_params.swing_bars }}шт.</li>
                                        <li  v-if="active_params.swing_fance > 0" >FANC:  {{ active_params.swing_fance }}шт.</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="statistic__row" v-if="active_params.sliding_smart != 0 || active_params.sliding_bars != 0 || active_params.sliding_fance != 0">
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Ширина раздвижных ворот:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.Gates.opening_width_sliding.values[active_params.sliding_width] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="statistic__colom">
                        <div class="statistic__params">
                            <div class="statistic__param statistic__param--NotDot">
                                <span class="statistic__paramTitle">Количество раздвижных ворот: </span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">
                                    <ul>
                                        <li v-if="active_params.sliding_smart > 0">SMART: {{ active_params.sliding_smart }} шт.</li>
                                        <li v-if="active_params.sliding_bars  > 0"> BARS:  {{ active_params.sliding_bars }}шт.</li>
                                        <li v-if="active_params.sliding_fance > 0">FANC:  {{ active_params.sliding_fance }}шт.</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                

              

                <div class="statistic__row pt-1">
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
                            <div class="statistic__paramValue">
                                <span class="statistic__paramValue--color" 
                                    :style="{backgroundColor: data.Gates.colors[data.Gates.active_parametrs.collor_active].value}" 
                                ></span> 
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
                            {{Math.round(Weight.amount / 1000).toLocaleString() }} КГ.
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
                loader: false
            }
        },
        methods: {

            // задаю количество распашных ворот
            setValueSwing_smart(value){ 
                this.data.Gates.active_parametrs.swing_smart = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueSwing_bars(value){ 
                this.data.Gates.active_parametrs.swing_bars = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueSwing_fance(value){ 
                this.data.Gates.active_parametrs.swing_fance = value;
                this.$store.dispatch('setData_calc', this.data );
            },


            // задаю количество раздвижных ворот
            setValueSliding_smart(value){ 
                this.data.Gates.active_parametrs.sliding_smart = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueSliding_bars(value){ 
                this.data.Gates.active_parametrs.sliding_bars = value;
                this.$store.dispatch('setData_calc', this.data );
            },
            setValueSliding_fance(value){ 
                this.data.Gates.active_parametrs.sliding_fance = value;
                this.$store.dispatch('setData_calc', this.data );
            },
      
            // указываю ширину распашных ворот
            selected_swing_width_value(value){ 
                this.data.Gates.active_parametrs.swing_width = value;
                this.$store.dispatch('setData_calc', this.data );
            },

            // указываю ширину раздвижных ворот
            selected_sliding_width_value(value){ 
                this.data.Gates.active_parametrs.sliding_width = value;
                this.$store.dispatch('setData_calc', this.data );
            },

            // цвет
            selectedColor(value){ 
                this.data.Gates.active_parametrs.collor_active = value;
                this.$store.dispatch('setData_calc', this.data );
            },

            // ширина
            setHeight(value){ 
                this.data.Gates.active_parametrs.height = value;
                this.$store.dispatch('setData_calc', this.data );
            },

        },
        computed: {
            data() {
                return this.$store.getters.Data_calc;
            },
            active_params() {
                return this.$store.getters.Data_calc.Gates.active_parametrs;
            },
            Statisticks () {
                return this.$store.getters.Statisticks;
            },
            Weight () {
                return this.$store.getters.Weight;
            },
        },
        mounted() {
            this.data.Gates.active_parametrs.visited_page = true;
            this.$store.dispatch('setData_calc', this.data );

            this.IMG_LIST = this.$store.getters.IMAGES;
            this.loader = true;
        }
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
    .Gates__statistic ul {
        list-style: none;
        padding: 0;
    }
    .Gates__statistic li {
        padding: .2rem 0;
    }
    @media screen and (max-width: 768px) {
        .Gates__row  {
            display: flex;
            gap: .2rem!important;
        }
    }
</style>