<template>
    <Nomeclatura></Nomeclatura>
    <div class="calculator-page__third-screen wrapper">
  
        <div class="calculator-page__title">Параметры периметра</div>
        <div class="final-table">

            <!-- <div class="left-part"> -->
                <div class="Parametrs_perimetr">
                    <div class="statistic__page pr-1">
                  
                            <div class="">
                                <div class="statistic__param">
                                    <span class="statistic__paramTitle"> Цена забора:</span>
                                    <span class="statistic__paramDot"> </span>
                                    <span class="statistic__paramValue">{{ Statisticks.amount_price.toLocaleString()  }} Руб</span>
                                </div>
                                <div class="statistic__param">
                                    <span class="statistic__paramTitle">Цена погонного метра:</span>
                                    <span class="statistic__paramDot"> </span>
                                    <span class="statistic__paramValue">{{ Statisticks.running_meter.toLocaleString()  }} Руб</span>
                                </div>
                                
                                <div class="statistic__param">
                                    <span class="statistic__paramTitle">Вес:</span>
                                    <span class="statistic__paramDot"> </span>
                                    <div class="statistic__paramValue">
                                        {{ Math.round(Weight.amount / 1000).toLocaleString() }} Кг
                                    </div>
                                </div>

                        </div>
                    </div>
                
                    <input class=" pr-1" type="checkbox" id="order_call" @click="order_call = !order_call, setOrder_call()" :checked="order_call">
                    <label class=" pr-1" for="order_call">Запросить звонок менеджера для расчета стоимости монтажа</label>
                    <!-- <input type="text" class="phone_number" v-if="order_call" v-model.number="number_phone"> -->
                </div>
               <!--</div>
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
                </div> -->
                <!-- <div class="delivery__item">
                    <div><div class="custom_radio custom_radio--height" @click="delivery_type = false, setTypeDelivery()" :class="{active: !delivery_type}"></div>
                        </div>
                    <div class="delivery__title" @click="delivery_type = false, setTypeDelivery()">
                        <div class="delivery__type">Доставка до двреи:</div>
                        <div class="delivery__adress">
                            Зависит от адреса и объема груза
                        </div>
                                      
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
            
            </div> -->
            <div class="btns-wrapper">
                <button class="reset_settings" @click="resetButton">
                    Сбросить настройки
                </button>
                <button class="make_sale" @click="open_popup()">
                    Оформить заказ
                </button>
            </div>
        </div>
        <div class="textCalc">
            Калькулятор 3D забора онлайн - это удобный инструмент, который позволяет провести расчет забора без лишних трудностей и с минимальными затратами времени. Вам больше не придется путаться в многочисленных параметрах и условиях, вы сможете рассчитать забор, используя калькулятор, прямо у себя дома. Расчет забора онлайн калькулятор предлагает выполнить в несколько этапов. Вам потребуется ввести основные данные о заборе (общие параметры, размер панели, вариант исполнение столба, крепежи, дополнительные элементы, калитки, ворота и общий вид ограждения) и калькулятор автоматически проведет все необходимые расчеты. Все расчеты и цены носят ознакомительный характер, поэтому за полной сметой необходимо обращаться к нашим менеджерам.
        </div>
        <dialog :open="take_order" v-if="take_order" class="popup">
            <div class="popup__wrapper">
                <div class="popup__top">
                    <div class="popup__title">Сделать заказ</div>
                    <button class="popup__close" @click.prevent="take_order = !take_order">Закрыть</button>
                </div>
                <form class="popup__content" action="#" method="post">
                    <div class="popup__row">
                        <label for="name">Ваше имя</label>
                        <input type="text" v-model="form.name" class="popup__input--text" name="name" id="name" placeholder="Ваше имя">
                    </div>
                    <div class="popup__row">
                        <label for="phone">Телефон</label>
                        <input type="tel" class="popup__input--text" v-model="form.phone" name="phone" id="phone" placeholder="Телефон" required>
                    </div>
                    <div class="popup__row">
                        <label for="massage">Коментарий</label>
                        <textarea type="tel" class="popup__input--text" v-model="form.massage" name="massage" id="massage" placeholder="Коментарий"></textarea>
                    </div>
                    <div class="popup__row">
                        <input type="checkbox" class="popup__input--checkbox" @click="form_policy_privacy = !form_policy_privacy" :checked="form_policy_privacy" name="policy_chek" required id="policy_chek"> 
                        <label for="policy_chek"  @click="form_policy_privacy = !form_policy_privacy">Соглашаюсь с <a href="#">обработкой данных</a></label>
                    </div>
                    <input type="hidden" v-model="form.calculator_data" name="calculator_data">
                    <button type="sybmit" class="popup__submit " @click.prevent.stop="submit_calc_data()">Заказать</button>

                    <!-- <div 
                        v-if="form_massage != ''"  
                        :class="['form_masage', massageClass]"
                        >{{ form_massage }}</div> -->
                </form>
            </div>                
        </dialog>
        

    </div>
</template>
<script>
import Nomeclatura from './Nomanclatura.vue';

import { get_params } from '@/assets/js/generate_parametrs_table';
import { ROUTER_PARAMS } from '@/router/router_queris';
var __ROUTER_PARAMS = 0;
export default {
    components: {
        Nomeclatura
    },
    data() {
        return {
            delivery_type: true,// если true то самовывоз
            order_call: false, // заказть звонок
            take_order: false,
            zone_index: 0,

            form_policy_privacy: false,

            massageClass: true,
            form_massage: '',
            popup_massage_dalay: 5000,

            form: {
                name: '',
                phone: '',
                massage: '',
                calculator_data: '',
            }
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
        setOrder_call(){
            this.data.Parametrs_perimetr.active_parametrs.order_call = this.order_call;
            this.$store.dispatch('setData_calc', this.data );
        },
        resetButton() {
            __ROUTER_PARAMS.reset_url();
        },
        get_params() {
            this.form.calculator_data = get_params(this.data, this.form);
        },
        open_popup() {
            this.take_order = true;
            this.get_params();
        },
        submit_calc_data() {
            let _this = this;

            if(this.form.phone == "") {
                this.form_massage = "Заявка была отправленна, мы свяжемся с вами в ближайшее время!";
                this.massageClass = 'error';

                setTimeout(()=>{
                    _this.form_massage = "";
                    _this.take_order = false;
                    this.massageClass = "";
                }, this.popup_massage_dalay)

                return;
            }

            
            this.form.calculator_data = get_params(this.data, this.form)

            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...this.form})
            };

            fetch("mail.php", requestOptions)
                // .then(response => console.log("response ",response))
                .then(response => response.json())
                .then(response => {
                    
                })

                
                this.form_massage = "Заявка была отправленна, мы свяжемся с вами в ближайшее время!"
                this.massageClass = "sucsess";

                setTimeout(()=>{
                    _this.form_massage = "";
                    _this.take_order = false;
                    this.massageClass = "";
                },this.popup_massage_dalay)
      
        },
    },  
    mounted() {
        this.zone_index = this.data.Parametrs_perimetr.active_parametrs.sellected_zone;
        this.delivery_type = this.data.Parametrs_perimetr.active_parametrs.type_delivery;
        this.order_call = this.data.Parametrs_perimetr.active_parametrs.order_call || false;
        
        __ROUTER_PARAMS = new ROUTER_PARAMS(this);
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
}

</script>
<style>
.calculator-page__third-screen {
    padding: 40px;
    padding-top: 20px;
}
.calculator-page__title {
    font-size: 34px;
    margin-top: 3rem;
}
.final-table {
    
    background-color: var(--statistic);
    padding: 35px 40px;
    /* border-radius: var(--border-radius); */
    margin-top: 1rem;
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
}
.left-part, .right-part {
    width: 50%;
    box-sizing: border-box;
}
/* .right-part {
    padding-left: 30px;
    border-left: 3px solid white;
} */
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
    padding-top: 1rem;
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
    background: var(--tiker);
    color: var(--white);
}
.make_sale:hover {
    background: var(--yellow);
    color: var(--tiker);
}
.reset_settings {
    background-color: transparent;
    border: 2px solid var(--tiker);
    padding: 15px 40px;
    color: var(--tiker);
    font-weight: 700;
    font-size: 14px;
}
.reset_settings:hover {
    background: var(--tiker);
    color: var(--white);
    cursor: pointer;
}
.form_masage  {
    margin-top: .6rem;
    padding: .5rem 1rem;
    box-sizing: border-box;
    max-width: 300px;
}
.form_masage.sucsess {
    border: 2px solid var(--tiker);
}
.form_masage.error {
    border: 2px solid red;
}
.custom_radio {
    /* background: #f5f6f6!important;
    border: 1px solid #006f3e!important; */
    width: 10px!important;
    height: 10px!important;
    margin-right: 8px!important;
    margin-top: 8px;
    box-shadow: 0 0 1px 1px var(--tiker);
}

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
@media screen and (max-width: 768px) {
    .calculator-page__third-screen {
        padding: 1.5rem;
    }

    .final-table {
        padding: 1rem;
        display: block;
    }
    .left-part, .right-part {
        width: 100%;
        border: 0;
    }
    .delivery {
        padding: 0;
        /* width: 100%; */
    }
    .btns-wrapper {
        justify-content: center;
        gap: 1rem;
    }
}
</style>