<template>
    <div class="" v-if="loader">
        
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
        <div class="calc__row">
            <div class="calc__rowItem">
                <Range_vertical 
                    :title="data.version_pillar.height.title"
                    :values="data.version_pillar.height.values"
                    :active_value = "data.version_pillar.active_parametrs.height_post || 1"
                    @selectedValue="selected_height"  
                ></Range_vertical>
            </div>
        </div>
        <div class="calc__row calc__localRow align-start">
            <div class="">
                <!-- сечение столба -->
                <Cell_size
                    :key="data.version_pillar.active_parametrs.sechenie_pillar"
                    :title="data.version_pillar.sechenie_pillar.title"
                    :values="data.version_pillar.sechenie_pillar.values"
                    :active_value="data.version_pillar.active_parametrs.sechenie_pillar"
                    @selectedCell_size="sechenie_pillar_value"
                ></Cell_size>
            </div>
            <div class="">
                <!-- толщина стенки -->
                <Cell_size
                    :key="data.version_pillar.active_parametrs.weight_wall"
                    :title="data.version_pillar.weight_wall.title"
                    :values="data.version_pillar.weight_wall.values[data.version_pillar.active_parametrs.sechenie_pillar]"
                    :active_value="data.version_pillar.active_parametrs.weight_wall"
                    @selectedCell_size="post_cover_value"
                ></Cell_size>
            </div>
        </div>

        <div class="calc__rowItem calc__localRow align-start stolb">
            <div class="calc__top">
                <div class="calc__title">Крышка для столба</div>
            </div>
            <div class="calc__content calc__row">
                <div class="cell_size__img">
                    <img :src="IMG_LIST.stolb.src" alt="stolb">
                </div>
                <div class="stolb__chack"  @click="setStolb">
                    <label for="stolb1"  @click="setStolb">Крышка для столба</label>
                    <input type="checkbox" id="stolb1" :checked="data.version_pillar.active_parametrs.post_cover">
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
        
        <div class="statistic__row--fluid statistic type_fance__statistic">
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
                                <span class="statistic__paramTitle">Высота столба:</span>
                                <span class="statistic__paramDot"> </span>
                                <span class="statistic__paramValue">{{ data.version_pillar.height.values[data.version_pillar.active_parametrs.height_post] / 1000 }}М</span>
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
                                <span class="statistic__paramValue">{{ data.version_pillar.weight_wall.values[data.version_pillar.active_parametrs.sechenie_pillar][data.version_pillar.active_parametrs.weight_wall]}} MM.</span>
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
                                        :style="{backgroundColor: data.version_pillar.colors[data.version_pillar.active_parametrs.collor_active].value}" 
                                    ></span> 
                                </div>
                            </div>
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
                    <div>
                      
                        <div class="statistic__valuesRow"  >
                        <div class="statistic__valuesTitle">Цена столба:</div>
                        <div class="statistic__paramDot"></div>
                        <div class="statistic__value">
                          
                            <span>
                                {{                                 
                                    Price.post.getData( 'cost',
                                        this.data.version_pillar.active_parametrs.height_post,
                                        this.data.version_pillar.active_parametrs.sechenie_pillar,
                                        this.data.version_pillar.active_parametrs.weight_wall,
                                    ).toLocaleString()
                                }} Руб
                            </span>
                        </div>
                    </div>
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
            loader: false,
        }
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
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
    mounted() {
        this.IMG_LIST = this.$store.getters.IMAGES;
        this.loader = true;
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

            // массив с сечением столба зависит от толщины стенки столба и нужно чтобы
            // если в одном масиве был выбран нулевой индекс то и в другом я тоже автоматически выставлял нулевой индекс
            let array = this.data.version_pillar.weight_wall.values[this.data.version_pillar.active_parametrs.sechenie_pillar];

            if(array.length == 1) {
                this.data.version_pillar.active_parametrs.weight_wall = 0;
                this.$store.dispatch('setData_calc', this.data );
            } 
            this.$store.dispatch('setData_calc', this.data );
       
        },
        post_cover_value(val) {
            this.data.version_pillar.active_parametrs.weight_wall = val;
            this.$store.dispatch('setData_calc', this.data );
            
        },
        selected_height(val) {
            this.data.version_pillar.active_parametrs.height_post = val;
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