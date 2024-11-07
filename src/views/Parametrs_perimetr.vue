<template>
    <div class="calculator-page__third-screen">

        <div class="calculator-page__title">Параметры периметра</div>
        <div class="final-table">

            <div class="left-part">
                <div class="Parametrs_perimetr">
                    <div class="statistic__page pr-1">
                  
                            <div class="statistic__params">
                                <div class="statistic__param">
                                    <span class="statistic__paramTitle"> Цена забора:</span>
                                    <span class="statistic__paramDot"> </span>
                                    <span class="statistic__paramValue">{{ data.fasteners_fence.fasteners_type_fances.values[data.fasteners_fence.active_parametrs.fasteners_type_fances].title}}</span>
                                </div>
                                <div class="statistic__param statistic__param--NotDot">
                                    <span class="statistic__paramTitle">Цена погонного метра:</span>
                                    <span class="statistic__paramDot"> </span>
                                    <span class="statistic__paramValue">{{ data.fasteners_fence.fixing_panel_post.values[data.fasteners_fence.active_parametrs.fixing_panel_post].title}}</span>
                                </div>
                                
                                <div class="statistic__param">
                                    <span class="statistic__paramTitle">Вес (периметра):</span>
                                    <span class="statistic__paramDot"> </span>
                                    <div class="statistic__paramValue">
                                        <span class="statistic__paramValue--color" 
                                            :style="{backgroundColor: data.fasteners_fence.active_parametrs.collor_active.value}" 
                                        ></span>
                                    </div>
                                </div>

                        </div>
                    </div>
                
                    <input type="checkbox" id="order_call" @click="order_call = !order_call" :checked="order_call">
                    <label for="order_call">Запросить звонок менеджера для расчета стоимости монтажа</label>
                    <!-- <input type="text" class="phone_number" v-if="order_call" v-model.number="number_phone"> -->
                </div>
            </div>
            <div class="right-part delivery top-padding">
                <div class="delivery__item">
                    <div><div class="custom_radio custom_radio--height" @click="delivery_type = true, setTypeDelivery()" :class="{active: delivery_type}"></div>
                    </div>
                    <div class="delivery__title" @click="delivery_type = true, setTypeDelivery()">
                        <div class="delivery__type">Самовывоз:</div>
                        <div class="delivery__price">Бесплатно</div>
                        <div class="delivery__adress">
                            141850, МО, Дмитровский район, рп. Деденево, Московское ш., д.1
                        </div>
                    </div>
                </div>
                <div class="delivery__item">
                    <div><div class="custom_radio custom_radio--height" @click="delivery_type = false, setTypeDelivery()" :class="{active: !delivery_type}"></div>
                        </div>
                    <div class="delivery__title" @click="delivery_type = false, setTypeDelivery()">
                        <div class="delivery__type">Доставка до двреи:</div>
                        <div class="delivery__adress">
                            Зависит от адреса и объема груза
                        </div>
                        <!-- v-if="!delivery_type" -->
                     
                        <div class="delivery__zone" v-if="!delivery_type">
                            <ul>
                                <li
                                    v-for="(item, i) in data.Parametrs_perimetr.zone"
                                    :key="item"
                                    :class="{delivery__zone__active: i == zone_index}"
                                >
                                    <div 
                                        class="custom_radio" @click="setZone(i)"
                                        :class="{active: i == zone_index}"
                                        
                                    ></div>
                                    <div class="delivery__type" @click="setZone(i)">{{ item.title }}</div>
                                </li>
                            </ul>
                            <img src="../assets/img/map.jpg" alt="map" class="delivery__map">
                        </div>
                    </div>
                </div>
            
            </div>
            <div class="btns-wrapper">
                <button class="reset_settings">
                    Сбросить настройки
                </button>
                <button class="make_sale" @click="take_order = true">
                    Оформить заказ
                </button>
            </div>
        </div>
        <div class="textCalc">
            Калькулятор 3D забора онлайн - это удобный инструмент, который позволяет провести расчет забора без лишних трудностей и с минимальными затратами времени. Вам больше не придется путаться в многочисленных параметрах и условиях, вы сможете рассчитать забор, используя калькулятор, прямо у себя дома. Расчет забора онлайн калькулятор предлагает выполнить в несколько этапов. Вам потребуется ввести основные данные о заборе (общие параметры, размер панели, вариант исполнение столба, крепежи, дополнительные элементы, калитки, ворота и общий вид ограждения) и калькулятор автоматически проведет все необходимые расчеты. Все расчеты и цены носят ознакомительный характер, поэтому за полной сметой необходимо обращаться к нашим менеджерам.
        </div>
        <!-- <dialog :open="take_order" class="order__popup"> 
            Привет, мир!
        </dialog> -->
    </div>
</template>
<script>

export default {
    data() {
        return {
            delivery_type: true,// если true то самовывоз
            number_phone: 0,
            order_call: false, // заказть звонок
            take_order: false,
            zone_index: 0,
        }
    },
    methods: {
        setZone(val){
            this.data.Parametrs_perimetr.active_parametrs.sellected_zone = val;
            this.$store.dispatch('setData_calc', this.data );
            this.zone_index = val;
        },
        setTypeDelivery(){
            this.data.Parametrs_perimetr.active_parametrs.type_delivery = this.delivery_type;
            this.$store.dispatch('setData_calc', this.data );
           
        },
        
    },  
    mounted() {
        this.zone_index = this.data.Parametrs_perimetr.active_parametrs.sellected_zone;
        this.delivery_type = this.data.Parametrs_perimetr.active_parametrs.type_delivery;
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
    },
}

</script>
<style>
.calculator-page__third-screen {
    padding: 40px;
    padding-top: 20px;
}
.calculator-page__title {
    font-size: 34px;
}
.final-table {
    background-color: #f0f4f7;
    padding: 35px 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.left-part, .right-part {
    width: 50%;
    box-sizing: border-box;
}
.right-part {
    padding-left: 30px;
    border-left: 3px solid white;
}
.statistic__page {
    margin-bottom: 1.5rem;
}
.delivery__item {
    font-weight: 100;
    display: flex;
    width: 100%;
    align-items: start;
}
.delivery__title {
    display: flex;
    align-items: baseline;
    gap: .4rem;
    cursor: pointer;
    flex-wrap: wrap;
}
.delivery__type {
    font-weight: 700;
}
.delivery__price {
}
.delivery__adress {
}
.delivery__zone {
    width: 100%;
}
.delivery__zone ul {
    list-style: none;   
}
.delivery__zone li {
    margin-bottom: .3rem;
    display: flex;
}
.delivery__zone__active {
    font-weight: 700;
}
.delivery__type {
    font-weight: 300;
    margin-top: 3px;
}
.delivery__zone__active .delivery__type {
    font-weight: 700;

}
.delivery__map {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.btns-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
}
.textCalc {
    margin-top: 25px;
}
.make_sale {
    text-transform: uppercase;
    margin: 0 15px;
    padding: 15px 40px;
    margin-top: 30px;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    background: #006f3e;
    color: #fff;
}
.make_sale:hover {
    background: var(--hover-button);
}
.reset_settings {
    background-color: transparent;
    border: 2px solid #879eb3;
    padding: 15px 40px;
    color: #006f3e;
    font-weight: 700;
    font-size: 14px;
}
.reset_settings:hover {
    background: #006f3e;
    color: #fff;
}

.custom_radio {
    /* background: #f5f6f6!important;
    border: 1px solid #006f3e!important; */
    width: 10px!important;
    height: 10px!important;
    margin-right: 8px!important;
    margin-top: 8px;
    box-shadow: 0 0 1px 1px #006f3e;
}
/* .custom_radio--height {
    height: 10px!important;
} */
.phone_number {
    display: inline-block;
    padding: 0 15px;
    border: 1px solid #d0d0d0;
    width: auto;
    max-width: 105px;
    height: 38px;
    background-color: transparent;
    font-size: 14px;
    margin-right: 10px;
    margin-left: 25px;
    font-weight: 800;
}
.order__popup {
    position: fixed;
    width: 450px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 8px;
}
.order__popup::backdrop {
    width: 100%;
    height: 100%;
    background: #006f3e;
}

@media screen and (max-width: 920px) {
    .final-table {
        /* display: block; */
    }
    .Parametrs_perimetr .statistic__param {
        border: 0 !important;
        flex-wrap: wrap;
    }
    .Parametrs_perimetr .statistic__paramTitle,
    .Parametrs_perimetr .statistic__paramValue {
        display: block!important;
        flex-basis: 100%!important;
    }
    .left-part, .right-part {
        padding: 0;
        flex-basis: 50%;
        /* border: 0; */
        margin-bottom: 1rem;
    }
    .right-part {
        padding-left: 1rem;
    }
    .delivery__zone ul {
        list-style: none;
        padding: 0;
    }
    .btns-wrapper {
        justify-content: space-between;
        gap: 1rem;
    }
    .make_sale {
        margin: 0;
    }
}
</style>