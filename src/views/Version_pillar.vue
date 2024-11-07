<template>
    <div class="">
        
        <div class="calc__row">
            <div class="calc__rowItem">
                <Img_select
                    class=""
                    :title="data.version_pillar.type_post.title"
                    :values="data.version_pillar.type_post.values"
                    :active_value="data.version_pillar.active_parametrs.type_post_index"
                    :info_hover="true"
                    @img_selected="img_selected"
                ></Img_select>
            </div> 
        </div>

        <div class="calc_row">
            <div class="calc__localRow">
                <Cell_size
                    :title="data.version_pillar.sechenie_pillar.title"
                    :values="data.version_pillar.sechenie_pillar.values"
                    :active_value="data.version_pillar.active_parametrs.sechenie_pillar"
                    @selectedCell_size="sechenie_pillar_value"
                ></Cell_size>
            </div>
            <div class="calc__localRow">
                <Cell_size
                    :title="data.version_pillar.weight_wall.title"
                    :values="data.version_pillar.weight_wall.values"
                    :active_value="data.version_pillar.active_parametrs.weight_wall"
                    @selectedCell_size="post_cover_value"
                ></Cell_size>
            </div>
            <div class="calc__rowItem calc__localRow align-start stolb">
                <div class="calc__top">
                    <div class="calc__title">Крышка для столба</div>
                </div>
                <div class="calc__content calc__row">
                    <div class="cell_size__img">
                        <img src="@/assets/img/stolb.png" alt="reyki">
                    </div>
                    <div class="stolb__chack"  @click="setStolb">
                        <label for="stolb1"  @click="setStolb">Крышка для столба</label>
                        <input type="checkbox" id="stolb1" :checked="data.version_pillar.active_parametrs.post_cover">
                    </div>
                </div>
            </div>   
        </div>

 

       <div class="calc__rowItem">
            
            <Color_picker 
                :colors="data.version_pillar.colors"
                :active_color = "data.version_pillar.active_parametrs.collor_active"
                @selected_color="size_panel_selectedColor"
            />
            
        </div>
        
        <div class="statistic__row--wrapper  statistic type_fance__statistic">
            <div class="statistic__colom">
                <div class="statistic__title">Параметры</div>
                <div class="statistic__params">
                    <div class="statistic__row gap-1">
                        <div class="statistic__colom">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Тип крепления:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.type_post.values[data.version_pillar.active_parametrs.type_post_index].title}}</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Высота:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.height.values[data.version_pillar.active_parametrs.height_fance] / 1000 }}М</span>
                            </div>
                            
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Сечение столба (мм.)</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.sechenie_pillar.values[data.version_pillar.active_parametrs.sechenie_pillar ] }} MM.</span>
                            </div>
                        </div>
                        <div class="statistic__colom">
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Толщина стенки столба:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.weight_wall.values[data.version_pillar.active_parametrs.weight_wall]}} MM.</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Крышка для столба:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.active_parametrs.post_cover? 'Есть':'Нет' }}</span>
                            </div>
                            <div class="statistic__param">
                                <span class="statistic__paramTitle">Цвет ограждения:</span>
                                <span class="statistic__paramDot"> </span>
                                <div class="statistic__paramValue">
                                    <span class="statistic__paramValue--color" 
                                        :style="{backgroundColor: data.version_pillar.active_parametrs.collor_active.value}" 
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
 import Img_select from '@/components/Img_select/Img_select.vue';
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
        Cell_size,
        Img_select
    },
    data() {    
        return {
           
        }
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
    },
    methods: {
        size_panel_selectedColor(value){ 
            this.data.version_pillar.active_parametrs.collor_active = value;
            this.$store.dispatch('setData_calc', this.data );
        },
        setHight(index) { 
            this.data.version_pillar.active_parametrs.height_fance = index;
            this.$store.dispatch('setData_calc', this.data );
        },
        img_selected(val) {
            this.data.version_pillar.active_parametrs.type_post_index = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        sechenie_pillar_value(val) {
            this.data.version_pillar.active_parametrs.sechenie_pillar = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        post_cover_value(val) {
            this.data.version_pillar.active_parametrs.weight_wall = val;
            this.$store.dispatch('setData_calc', this.data );
        },
        setStolb() {
            console.log('updatae')
            this.data.version_pillar.active_parametrs.post_cover = !this.data.version_pillar.active_parametrs.post_cover;
            this.$store.dispatch('setData_calc', this.data );
        },
    }
}
</script>
<style lang="css" scoped>
    .stolb {
        max-width: 250px;
        padding-bottom: 2rem;
    }
    .stolb__chack {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: .5rem;
    }
    .stolb input { 
        height: 22px;
        width: 22px;
        background-color: transparent;
        border: 1px solid #d0d0d0;
    }
    #stolb1:checked { 
        background-color: #fff !important;
        border-color: #006f3e !important;
       
    }
    .stolb label { 
        cursor: pointer;
        font-size: 14px;
        line-height: 23px;
    }
    .stolb input[type="checkbox" i]:focus-visible {
        border: 0;
    }
</style>