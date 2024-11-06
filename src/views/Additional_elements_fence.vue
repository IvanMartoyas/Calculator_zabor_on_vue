<template>
    <div>
        <div class="calc__row calc__localRow align-start">
            <div class="calc__rowItem border-right">
              
            </div>
        </div>
        <div class="type_fill">
            <div class="calc__rowItem">
                <div class="calc__top">
                    <div class="calc__title">Тип заполнения</div>
                </div>
                <div class="calc__content calc__row">
                    <div class="type_fill__items">

                        <div class="type_fill__item">
                            <div class="type_fill__img">
                                <img :src="require('../assets/img/setka1.jpg')" alt="Тип заполнения">
                            </div>
                            <div class="type_fill__checkBlock">
                                <div @click="sbb_check = !sbb_check, pbb_check = false" class="custom_checkbox type_fill__checkbox" :class="{active: sbb_check}">
                                    <div v-if="sbb_check">&#x2713;</div>
                                </div>
                                <div @click="sbb_check = !sbb_check, pbb_check = false" class="type_fill__title">СББ</div>
                                <div class="type_fill__width" v-if="sbb_check">
                                    Длинна <input type="text" @input.prevent="setWidth('СББ')" v-model.number="width"  class="calc__fild" > м.
                                </div>
                            </div>
                        </div>
                        <div class="type_fill__item">
                            <div class="type_fill__img">
                                <img :src="require('../assets/img/setka2.jpg')" alt="Тип заполнения">
                            </div>
                            <div class="type_fill__checkBlock">
                                <div @click="pbb_check = !pbb_check, sbb_check = false" class="custom_checkbox type_fill__checkbox" :class="{active: pbb_check}">
                                    <div v-if="pbb_check">&#x2713;</div>
                                </div>
                                <div @click="pbb_check = !pbb_check, sbb_check = false" class="type_fill__title">ПББ</div>
                                <div class="type_fill__width" v-if="pbb_check">
                                    Длинна <input type="text" @input.prevent="setWidth('ПББ')" v-model.number="width"  class="calc__fild" > м.
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class=" type_fill__nasadki"  v-if="pbb_check || sbb_check">
                    <div class="calc__top">
                        <div class="calc__title"> Типы насадок</div>
                    </div>
                    <div class="calc__content">
                        <div class="type_fill__title">L Насадка:</div>
                        <div class="type_fill__value">{{ countLNasadka() }} шт.</div>
                    </div> 
                </div>
            </div>      

        </div>
    

        <div class="">
            
            <Color_picker 
                :colors="data.Additional_elements_fence.colors"
                :active_color = "data.Additional_elements_fence.active_parametrs.collor_active"
                @selected_color="selectedColor"
            />
            
        </div>

        <div class="statistic__row  statistic type_fance__statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>
                <div class="statistic__params">
                    <div class="calc__row gap-1">
                        <div class="statistic__colom">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Тип крепления:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.type_post.values[data.version_pillar.active_parametrs.type_post_index].title}}</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Ширина {{ data.Additional_elements_fence.active_parametrs.type_filling.type }}:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.Additional_elements_fence.active_parametrs.type_filling.width }}М</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">L насадка:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.Additional_elements_fence.active_parametrs.L_nasadca || 0 }} Шт.</span>
                            </div>
                            
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Цвет ограждения:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue--color" 
                                    :style="{backgroundColor: data.Additional_elements_fence.active_parametrs.collor_active.value}" 
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
//  import Img_select from '@/components/Img_select/Img_select.vue';
 import Color_picker from '@/components/Colors/Color-picker.vue';
export default {
//   name: 'App',
    components: {
        // Img_select
        Color_picker,
    },
    data() {
        return {
            sbb_check: false,
            pbb_check: false,
            width: 0, 
        }
    },
    methods: {
        selectedColor(value){ 
            this.data.Additional_elements_fence.active_parametrs.collor_active = value;
            this.$store.dispatch('setData_calc', this.data );
        },
        setWidth(type) { 
            if(this.width < 0) {
                this.width = 0
            } 
            this.data.Additional_elements_fence.active_parametrs.type_filling.type = type;
            this.data.Additional_elements_fence.active_parametrs.type_filling.width = this.width;
            this.$store.dispatch('setData_calc', this.data );
        },
        countLNasadka(type) {

            if(this.sbb_check || this.pbb_check) {
                this.data.Additional_elements_fence.active_parametrs.L_nasadca = this.width;
                this.$store.dispatch('setData_calc', this.data );
            }
            if(this.sbb_check) {
                // if(this.width > 10) {

                // }
                // let data = this.width; 
                // data = Math.round(this.width / 10)
                // data *= 8;
                return this.width; 
            } 
            if(this.pbb_check) {
                return this.width; 
            }
    
        }

    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        }
    },
}
</script>
<style>

    .type_fill {

    }
    .type_fill__checkbox {
        display: inline-block!important;
        margin-right: .5rem;
    }
    .type_fill__title {
        display: inline-block;
        vertical-align: 4px;
    }
    .type_fill__value {

    }
    .type_fill__img img {
        width: 100px;
        height: 100px;
        margin-right: 20px;
        border-radius: 50%;
    }

    .type_fill__checkBlock {

    }
    .type_fill__items {
        display: flex;
        gap: 1rem;
    }
    .type_fill__item {
        display: flex;
        align-items: center;
        min-width: 250px;
    }
    .type_fill__item input {
        font-weight: 100;
        line-height: 2px;
        font-size: 16px;
        width: 50px;
    }
    .type_fill__img {
    }
    .type_fill__radio {
    }
    .type_fill__nasadki {
        margin-top: 1rem;
    }
</style>