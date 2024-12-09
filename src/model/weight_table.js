export const _values_weight = {
    getAmount (value) {
        this.amount += Number(value);
    },
    amount: 0,
    general_parameters: {
        panel: {
            weight: [ // в граммах в зависимости от высоты
                23210, // 2430   
                15955, 
                12640,
                11355, //1530
            ],
        }
    },
    size_panel: {
        type_fance: {
            // раздел перенесён в type_fance в файле price
         
        },
    },
    Version_pillar: {
        get_weight(height,sechenie, weight_wall) {
            // обрабатываю ошибки
            try {
                // console.log("[weight_wall]; ",weight_wall)
                let data = this.height[height][sechenie]
                return data[0];
            } catch (e) {
                console.info("Вывод вес столба ошибка: ", e);
                return {
                    weight: 0,  
                  } 
            }
        },
        height: 
        [
            [// высота
                [ // сечение столба
                    {weight: 2600}
                ],
                [
                    { // тольщина стенки
                        weight: 3600
                    },
                    {
                        weight: 5200
                    }
                ],
                [
                    {weight: 7600}
                ],
            ],
            [
                [
                    {weight: 4000}
                ],
                [
                    {
                        weight: 5000
                    },
                    {
                        weight: 7000
                    }
                ],
                [
                    {weight: 9400}
                ],
            ],
            [
                [
                    {weight: 7400}
                ],
                [
                    {
                        weight: 8600
                    },
                    {
                        weight: 10800
                    }
                ],
                [
                    {weight: 13800}
                ],
            ],
            [
                [
                    {weight: 9600}
                ],
                [
                    {
                        weight: 11000
                    },
                    {
                        weight: 13800
                    }
                ],
                [
                    {weight: 17.500}
                ],
            ],
        ]
    
    },
   
    Gates: {
        getGates( type , action, index) {
            console.log("type ",type)
            try {
                if(type == 'swing') { // распашные
                    if(action == 'smart') {
                        return this.swing.smart[index]
                    }
                    if(action == 'bars') {
                        return this.swing.bars[index]
                    }
                    if(action == 'fance') {
                        return this.swing.fance[index]
                    }
                }
                if(type == 'sliding') { // Раздвижные 
                    if(action == 'smart') {
                        return this.sliding.smart[index]
                    }
                    if(action == 'bars') {
                        return this.sliding.bars[index]
                    }
                    if(action == 'fance') {
                        return this.sliding.fance[index]
                    }
                }
            }
            catch(e) {
                console.log(`Get weight Wickets (${action} error: `,e) 
                return 0;
            }
        },
        swing: {
            smart: [
                98000,
                101000,
                105000,
                108000,
                117000,
                120000,
            ],
            bars: [
                126000,
                169000,
                177000,
                186000,
                194000,
                350000
            ],
            fance: [
                107000,
                147000,
                153000,
                158000,
                164000,
                320000
            ],
        },
        sliding: {
            smart: [
                1,
                1,
                1,
                1,
                1
            ],
            bars: [
                255000,
                268000,
                360000,
                284000,
                406000
            ],
            fance: [
                232000,
                242000,
                331000,
                350000,
                367000
            ],
        },

    }
}

export class WEIGHT {

    _this = 0;

    constructor(__this) {
        this._this = __this;

    }

    calc__weight__update() {
        // вызываеться при обновлении state
        // console.log("update " );

        // расчитывает вес при обновлении state
  
        let _this = this;
        setTimeout(()=>{ // дданные не успевают в mounted исполниться поэтому отклазываю перерасчёт
            calc__weight(_this._this);
        },200)
    }

}

function calc__weight(_this) {

    try {
        let elemts = window.document.getElementById("table_price");
        elemts = elemts.querySelectorAll(".table__weight span");
        // console.log("elemts ",elemts)

        let amount = 0; 
        elemts.forEach((element, index) => {
            // console.log("weight item", Number(element.innerHTML.replace('&nbsp;', '')))
            amount += Number(element.innerHTML.replace('&nbsp;', ''));
        });
        // console.log("amount weight ",amount)
        // // console.log("elemts ",elemts)
        // // расчитывает общую стоимость
        // let amount_summ = price.amount.addSumm(Math.round(amount));

        // // console.log("amount_summ ",amount_summ)
        // // расчитывает погонный метр
        // let running_meter = price.amount.calcRunningMeter(_this.$store.getters.Data_calc.general_parameters.active_parametrs.size_perimetr)

         _this.Weight.amount = Math.round(amount);

        _this.$store.dispatch('setWeight', _this.Weight );
    } catch (e) {
        console.log("calc statistic error: ", e)
    }
}
