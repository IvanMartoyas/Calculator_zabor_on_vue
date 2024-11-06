<template>
    <div>
        
        <div class="calc__row">
            <div class="calc__rowItem">
                <Img_select
                    class=""
                    :title="data.fasteners_fence.fasteners_type_fances.title"
                    :values="data.fasteners_fence.fasteners_type_fances.values"
                    :active_value="data.fasteners_fence.active_parametrs.fasteners_type_fances"
                    :info_hover="false"
                    @img_selected="img_selected"
                ></Img_select>
            </div> 
        </div>

        <Img_radio
            :title="data.fasteners_fence.fixing_panel_post.title"
            :values="data.fasteners_fence.fixing_panel_post.values"
            :active_value="data.fasteners_fence.active_parametrs.fasteners_type_fances"
            :img="'fasteners.png'"
            @selected_value="setFasteners_fence"
        ></Img_radio>

        <div class="">
            <Color_picker 
                :colors="data.fasteners_fence.colors"
                :active_color = "data.fasteners_fence.active_parametrs.collor_active"
                :title="'Цвет крепежа'"
                @selected_color="setColor"
            />    
        </div>

        <div class="statistic__row  statistic type_fance__statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>
                <div class="statistic__params">
                    <div class="statistic__param">
                        <span class="statistic__paramTitle">Тип крепления:</span>
                        <span class="statistic__paramDot"> </span>
                        <span class="statistic__paramValue">{{ data.fasteners_fence.fasteners_type_fances.values[data.fasteners_fence.active_parametrs.fasteners_type_fances].title}}</span>
                    </div>
                    <div class="statistic__param">
                        <span class="statistic__paramTitle">Крепление к столбу:</span>
                        <span class="statistic__paramDot"> </span>
                        <span class="statistic__paramValue">{{ data.fasteners_fence.fixing_panel_post.values[data.fasteners_fence.active_parametrs.fixing_panel_post].title}}</span>
                    </div>
                    
                    <div class="statistic__param">
                        <span class="statistic__paramTitle">Цвет ограждения:</span>
                        <span class="statistic__paramDot"> </span>
                        <span class="statistic__paramValue--color" 
                            :style="{backgroundColor: data.fasteners_fence.active_parametrs.collor_active.value}" 
                        ></span>
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
 import Img_select from '@/components/Img_select/Img_select.vue';
 import Img_radio  from '@/components/Img_radio/ImgRadio.vue';
 import Color_picker from '@/components/Colors/Color-picker.vue';

export default {
    components: {
        Color_picker,
        Img_select,
        Img_radio
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
    },
    methods: {

        img_selected(val) {
            this.data.fasteners_fence.active_parametrs.fasteners_type_fances = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        setColor(val) {
            this.data.fasteners_fence.active_parametrs.collor_active = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        setFasteners_fence(val) {
            console.log("index ",val)
            // let index = 
            this.data.fasteners_fence.active_parametrs.fixing_panel_post = val;
            this.$store.dispatch('setData_calc', this.data );
        },

    }
}
</script>
<style lang="css" scoped>
   
</style>