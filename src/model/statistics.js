import { price } from '@/model/parice'; // цены

export const statisticks = {
    amount_price: 10,// общая стоимость
    running_meter: 32,// погонный метр
    weight_perimetr: 32,// вес периметра
}

export class Statistics {
    _this = 0;

    constructor(__this) {
        this._this = __this;
        // console.log("init")

    }

    calc__statistics__update() {
        // вызываеться при обновлении state
        // console.log("update " );

        // расчитывает статистику при обновлении state
  
        let _this = this;
        setTimeout(()=>{ // дданные не успевают в mounted исполниться поэтому отклазываю перерасчёт
            calc__statistics(_this._this);
        },200)
    }

    

}

function calc__statistics(_this) {
    // console.log("calc__statistics ",)
    try {
        let elemts = window.document.getElementById("table_price");
        elemts = elemts.querySelectorAll(".table__price span");
        // console.log("elemts ",elemts)

        let amount = 0; 
        elemts.forEach((element, index) => {
            // console.log("value item", Number(element.innerHTML.replace('&nbsp;', '')))
            amount += Number(element.innerHTML.replace('&nbsp;', ''));
        });
        // console.log("elemts ",elemts)
        // расчитывает общую стоимость
        let amount_summ = price.amount.addSumm(Math.round(amount));

        // console.log("amount_summ ",amount_summ)
        // расчитывает погонный метр
        let running_meter = price.amount.calcRunningMeter(_this.$store.getters.Data_calc.general_parameters.active_parametrs.size_perimetr)

        _this.Statisticks.amount_price = amount_summ;
        _this.Statisticks.running_meter = running_meter;
        _this.$store.dispatch('setStatisticks', _this.Statisticks );
    } catch (e) {
        console.log("calc statistic error: ", e)
    }
}