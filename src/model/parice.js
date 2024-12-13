export const price = {
    amount: {
        // расчитывает стоимость и передаёт её в общую статистику в vuex
        addSumm(number){ // добавляет стоимость выбранного элемента 

            // console.log('this.amount_price ',number)
            this.amount_price = Math.round(Number(number));
            return this.amount_price;

        
        },
        amount_price: 10,// общая стоимость

        calcRunningMeter(Perimetr) { // расчитает погонный метр
            // console.log("metr ",Math.round(this.amount_price / Number(Perimetr)))
            return Math.round(this.amount_price / Number(Perimetr));

        },
        running_meter: 32,// погонный метр
    },
    panel: {
        title: 'Панель FOREST',
        width_mm: 2500,
        count: 1,
        height: [
            {
                cost: 9381,
                value: 2430,
                weight: 23210,
            },
            {
                cost: 7889,
                value: 2030,
                weight: 15955,
            },
            {
                cost: 8750,
                value: 1730,
                weight: 12640,
            },
            {
                cost: 7050,
                value: 1530,
                weight: 11355,
            },
        ]
    },
    type_fance: {
        variant_3D: {
            getData(data, height, diametr) {
                try {

                    // console.log("height ",height)
                    // console.log("diametr ",diametr)
                    // console.log("value ",this.values[height][diametr])
                    
                    if(data == 'weight') {
                        return this.values[height][diametr].weight;
                    }
                    if(data == 'title') {
                        return this.values[height][diametr].title;
                    }
                    if(data == 'cost') {
                        return this.values[height][diametr].cost;
                    }
                    if(data == 'all') {
                        return this.values[height][diametr];
                    }
                    
                
                } catch (e) {
                    console.info("Вывод данных 3д забора: ", e);
                    return 0
                }
            },
            values: [
                [
                    {
                        title: 'Панель FOREST',
                        weight: 16000,
                        cost: 6348
                    },
                    {
                        title: 'Панель SMART',
                        weight: 16000,
                        cost: 6348
                    },
                    {
                        title: 'Панель CITY',
                        weight: 16000,
                        cost: 6348
                    },
                    {
                        title: 'Панель TOWN',
                        weight: 16000,
                        cost: 6348
                    },
                    {
                        title: 'Панель FORT ',
                        weight: 16000,
                        cost: 6348
                    },
                ],
                [
                    {
                        title: 'Панель FOREST',
                        weight: 16000,
                        cost: 1844
                    },
                    {
                        title: 'Панель SMART',
                        weight: 7500,
                        cost: 2396
                    },
                    {
                        title: 'Панель CITY',
                        weight: 20500,
                        cost: 2294
                    },
                    {
                        title: 'Панель TOWN',
                        weight: 28000,
                        cost: 3541
                    },
                    {
                        title: 'Панель FORT ',
                        weight: 37000,
                        cost: 5448
                    },
                ],
                [
                    {
                        title: 'Панель FOREST',
                        weight: 12500,
                        cost: 1686
                    },
                    {
                        title: 'Панель SMART',
                        weight: 21000,
                        cost: 2061
                    },
                    {
                        title: 'Панель CITY',
                        weight: 16250,
                        cost: 2007
                    },
                    {
                        title: 'Панель TOWN',
                        weight: 22500,
                        cost: 3094
                    },
                    {
                        title: 'Панель FORT ',
                        weight: 30000,
                        cost: 4803
                    },
                ],
                [
                    {
                        title: 'Панель FOREST',
                        weight: 11250,
                        cost: 1574
                    },
                    {
                        title: 'Панель SMART',
                        weight: 5000,
                        cost: 1871
                    },
                    {
                        title: 'Панель CITY',
                        weight: 14500,
                        cost: 1808
                    },
                    {
                        title: 'Панель TOWN',
                        weight: 20000,
                        cost: 2788
                    },
                    {
                        title: 'Панель FORT ',
                        weight: 27000,
                        cost: 4585
                    }, 
                ],
  
            ]
        },
        variant_2D: {
            getData(data, height, diametr) {
                try {

                    // console.log("height ",height)
                    // console.log("diametr ",diametr)
                    // console.log("value ",this.values[height][diametr])
                    
                    if(data == 'weight') {
                        return this.values[height][diametr].weight;
                    }
                    if(data == 'title') {
                        return this.values[height][diametr].title;
                    }
                    if(data == 'cost') {
                        return this.values[height][diametr].cost;
                    }
                    if(data == 'all') {
                        return this.values[height][diametr];
                    }
                    
                
                } catch (e) {
                    console.info("Вывод данных 3д забора: ", e);
                    return 0
                }
            },
            values: [
                [
                    {
                        title: 'Панель SPORTLINE',
                        weight: 24500,
                        cost: 4490
                    },
                    {
                        title: 'Панель STRONG',
                        weight: 37500,
                        cost: 7050
                    },
                ],
                [
                    {
                        title: 'Панель SPORTLINE',
                        weight: 27500,
                        cost: 4882 
                    },
                    {
                        title: 'Панель STRONG',
                        weight: 42000,
                        cost: 8750
                    },
                ],
                [
                    {
                        title: 'Панель SPORTLINE',
                        weight: 32500,
                        cost: 4739
                    },
                    {
                        title: 'Панель STRONG',
                        weight: 50000,
                        cost: 7889
                    },
                ],
                [
                    {
                        title: 'Панель SPORTLINE',
                        weight: 38000,
                        cost: 5639
                    },
                    {
                        title: 'Панель STRONG',
                        weight: 16000,
                        cost: 57500
                    },
                ],
            ]
        },
        tech: {
            getData(data, height, fance_variant ,size_verticle) {
                if(fance_variant) {
                    fance_variant = 0
                } else {fance_variant =1}

                // console.log("tech height ",height)
                // console.log("tech fance_variant ",fance_variant)
                // console.log("tech size_verticle ",size_verticle)
                // console.log("value ",this.values[fance_variant][height][size_verticle])
                try {

                    if(data == 'weight') {
                        return this.values[fance_variant][height][size_verticle].weight;
                    }
                    if(data == 'title') {
                        return this.values[fance_variant][height][size_verticle].title;
                    }
                    if(data == 'cost') {
                        return this.values[fance_variant][height][size_verticle].cost;
                    }
                    if(data == 'all') {
                        return this.values[fance_variant][height][size_verticle];
                    }

                    //console.log("value ",this.values[fance_variant][height][size_verticle])
              
                
                } catch (e) {
                    console.info("Вывод цен техограды ошибка: ", e);
                    return 0
                }
            },
            values: [
                [ // c выпуском
                    [ // 2430
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 13320,
                            weight: 21000,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 13320,
                            weight: 21000,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 13320,
                            weight: 21000,
                        },
                    ],
                    [ // 2030
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 15000,
                            weight: 38000,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 12500,
                            weight: 31000,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 10900,
                            weight: 25600,
                        },
                    ],
                    [ // 1730
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 13900,
                            weight: 31000,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 11500,
                            weight: 25600,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 10100,
                            weight: 21000,
                        },
                    ],
                    [ // 1530
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 11100,
                            weight: 32000,
                        }, 
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 10900,
                            weight: 26000,
                        },
                        {
                            title: 'Техограда SAFEGUARD',
                            cost: 9600,
                            weight: 23000,
                        },
                    ],
                ],
                [ // безопастная
                    [ // 2430
                        {
                            title: 'Техограда BASIC ',
                            cost: 6870,
                            weight: 31000,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 6870,
                            weight: 31000,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 6870,
                            weight: 31000,
                        },
                    ],
                    [ // 2030
                        { 
                            title: 'Техограда BASIC ',
                            cost: 13600,
                            weight: 38000,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 11300,
                            weight: 31000,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 9900,
                            weight: 27000,
                        },
                    ],
                    [ // 1730
                        {
                            title: 'Техограда BASIC ',
                            cost: 12500,
                            weight: 30000,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 10500,
                            weight: 24500,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 10400,
                            weight: 21000,
                        },
                    ],
                    [ // 1530
                        {
                            title: 'Техограда BASIC ',
                            cost: 6870,
                            weight: 26000,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 5700,
                            weight: 21500,
                        },
                        {
                            title: 'Техограда BASIC ',
                            cost: 8700,
                            weight: 18500,
                        },
                    ],
                ],
                
                
            ]
        }
    },
    post: {
        test: 0,
        title: 'Столб "СМАРТ" ',
        get_post(height,sechenie, wodth__wall) {
            // обрабатываю ошибки
            try {
                let data = this.cost[height][sechenie][wodth__wall];
                return data;
            } catch (e) {
                console.info("Вывод цен столба ошибка: ", e);
                return {
                    title: 'Столб', 
                    cost: 0,  
                  } 
            }
        },
        getData(data, height, sechenie, wodth__wall) {
              // console.log("tech height ",height)
            // console.log("tech sechenie ",sechenie)
            // console.log("tech wodth__wall ",wodth__wall)
            // console.log("value ",this.values[height][sechenie][wodth__wall])
            try {

                if(data == 'weight') {
                    return this.cost[height][sechenie][wodth__wall].weight;
                }
                if(data == 'title') {
                    return this.cost[height][sechenie][wodth__wall].title;
                }
                if(data == 'cost') {
                    return this.cost[height][sechenie][wodth__wall].cost;
                }
                if(data == 'all') {
                    return this.cost[height][sechenie][wodth__wall];
                }
            
            } catch (e) {
                console.info("Вывод цен техограды ошибка: ", e);
                return 0
            }
        },
        cost: [
            [  // высота 3000 
                [ // сечение столба
                    {
                        // толщина стенки
                        title: 'Столб "СМАРТ"', 
                        cost: 1670, 
                        weight: 2600 
                    } 

                ],
                [
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 2058, 
                        weight: 3600 
                    },
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 2324,  
                        weight: 5200
                    } 
                ],
                [
                    {
                        title: 'Столб "ФОРТ"', 
                        cost: 3158,
                        weight: 7600  
                    } 
                ],
            ],
            [  // высота 2600 
                [
                    {
                        title: 'Столб "СМАРТ"', 
                        cost: 1382,
                        weight: 4000  
                    } 
                ],
                [
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 1644,  
                        weight: 5000
                    },
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 2039,  
                        weight: 7000,
                    }, 
                ],
                [
                    {
                        title: 'Столб "ФОРТ"', 
                        cost: 2789,  
                        weight: 9400
                    },
                ],
            ],
            [  // высота 2300 
                [
                    {
                        title: 'Столб "СМАРТ"', 
                        cost: 1256,
                        weight: 7400
                    }
                ],
                [
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 1487, 
                        weight: 8600 
                    },
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 1835, 
                        weight: 10800 
                    } 
                ],
                [
                    {
                        title: 'Столб "ФОРТ"', 
                        cost: 2512,  
                        weight: 13800
                    },
                ],
            ],
            [  // высота 2000 
                [
                    {
                        title: 'Столб "СМАРТ"', 
                        cost: 1133,
                        weight: 9600
                    }
                ],
                [
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 1367,
                        weight: 11000  
                    },
                    {
                        title: 'Столб "СТАНДАРТ"', 
                        cost: 1640,  
                        weight: 13800
                    }
                ],
                [
                    {
                        title: 'Столб "ФОРТ"', 
                        cost: 2240,  
                        weight: 17500
                    },   
                ],
            ],
        ],
        plastic_plug: [
            {
                title: 'Пластиковая заглушка',
                cost: 20,
            },
            {
                title: 'Пластиковая заглушка',
                cost: 22,
            },
            {
                title: 'Пластиковая заглушка',
                cost: 38,
            },
        ]

    },
    kit_bracket_set: {
        title: 'Комплект скоба F24 (4шт.) цинк',
        cost: 2582,
    },
    SBB: {
        title: 'СББ из АКЛ',
        cost: 2582,
        weight: 8300,
        SBB_attachment_kit: {
            title: 'Комплект крепления СББ к насадке',
            cost: 2582,
        }
    },
    PBB: {
        title: 'ПББ',
        cost: 5000,
        weight: 650,
    },
    nasadka_L: {
        title: 'Насадка L ус 510',
        cost: 444,
    },
    self_tapping_screw: {
        title: 'Кровельный саморез',
        cost: 16,
    },
    scoba: 
    {
        getData(stolb__index, sechenie_index) {
            // обрабатываю ошибки
            try {
                let result = this.array_data[stolb__index][sechenie_index];
                return result
            } catch (e) {
                console.info("Вывод цен скобы ошибка: ", e);
                return {
                    title: 'Скоба', 
                    cost: 0, 
                    fortifications_item: {
                        title: '...',
                        cost: 0,
                    }, 
                } 
            }

        },
        array_data: [
            [ // тип столба на фланец
                {
                    title: "Комплект скоба F24",
                    cost: 126,
                    fortifications_item: {
                        title: 'Кровельный саморез',
                        cost: 16,
                    },
                },
                {
                    title: `Комплект скоб F50 цинк`,
                    cost: 146,
                    fortifications_item: {
                        title: 'Комплект метизов для скобы',
                        cost: 103,
                    }
                },
                {
                    title: 'Комплект усиленных скоб под столб 80х80 цинк',
                    cost: 119,
                    fortifications_item: {
                        title: 'Комплект метизов для усиленной скобы',
                        cost: 135
                    }
                }
            ],
            [ 
                // под бетонирование
                {
                    title: 'Комплект скоба F24',
                    cost: 126,
                    fortifications_item: {
                        title: 'Кровельный саморез',
                        cost: 16,
                    },
                },
                {
                    title: `Комплект скоб F50 цинк`,
                    cost: 146,
                    fortifications_item: {
                        title: 'Комплект метизов для скобы',
                        cost: 103,
                    }
                },
                {
                    title: "Комплект усиленных скоб под столб",
                    cost: 153,
                    fortifications_item: {
                        title: 'Комплект метизов для усиленной скобы',
                        cost: 135
                    }
                }
            ],
        ],
    },
    kalitki: {
        getWickets(action, index) {
            try {
                return this[action].cost[index];
            }
            catch(e) {
                console.log(`Get weight Wickets (${action} error: `,e) 
                return {
                    weight: 0
                }
            }
        },
        smart: {
            title: 'Калитка SMART',
            cost: [
                {
                    cost: 21448,
                    weight: 33000,
                },
                {
                    cost: 21594,
                    weight: 33000,
                },
                {
                    cost: 22803,
                    weight: 33000,
                },
                {
                    cost: 21448,
                    weight: 24876,
                },  
            ],
        },
        bars: {
            title: 'Калитка BARS',
            cost: [
                { 
                    cost: 32786,
                    weight: 53500,
                },
                { 
                    cost: 33770,
                    weight: 54500,
                }
            ],
        },
        fence: {
            title: 'Калитка FENCE',
            cost: [
                {
                    cost: 29686,
                    weight: 47500,
                },
                {
                    cost: 30491,
                    weight:  50000,
                }
            ],
        },
    },
    gates: {
        getGates(type, action, index) {
            // console.log("index ", index)
            try {
                // .action.cost[index]
                return this[type][action].cost[index];
            }
            catch(e) {
                console.log(`Get weight Wickets (${action} error: `,e) 
                return 0;
            }
        },
        swing_gates: {
            title: 'Распашные ворота',
            smart: {
                title: 'SMART',
                cost: [
                    {
                        cost: 78234,
                        weight: 98000,
                    },
                    {
                        cost: 86783,
                        weight: 101000,
                    },
                    {
                        cost: 93365,
                        weight: 105000,
                    },
                    {
                        cost: 94454,
                        weight: 108000,
                    },
                    {
                        cost: 101906,
                        weight: 117000,
                    },
                    {
                        cost: 131180,
                        weight: 120000,
                    },
                ]
            },
            bars: {
                title: 'BARS',
                cost: [
                    {
                        cost: 66948,
                        weight: 126000,
                    },
                    {
                        cost: 72173,
                        weight: 169000,
                    },
                    {
                        cost: 76904,
                        weight: 177000,
                    },
                    {
                        cost: 77996,
                        weight: 186000,
                    },
                    {
                        cost: 83596,
                        weight: 194000,
                    },
                    {
                        cost: 105587,
                        weight: 350000,
                    },
                ]
            },
            fance: {
                title: 'FANCE',
                cost: [
                    {
                        cost: 27223,
                        weight: 107000,
                    },
                    {
                        cost: 31055,
                        weight: 147000,
                    },
                    {
                        cost: 34104,
                        weight: 153000,
                    },
                    {
                        cost: 36923,
                        weight: 158000,
                    },
                    {
                        cost: 40194,
                        weight: 164000,
                    },
                    {
                        cost: 43466,
                        weight: 320000,
                    },
                ]
            },
        },
        sliding_gates: {
            title: 'Распашные ворота',
            smart: {
                title: 'SMART',
                cost: [
                    {
                        cost: 189226,
                        weight: 100000,
                    },
                    {
                        cost: 189226,
                        weight: 100000,
                    },
                    {
                        cost: 212870,
                        weight: 100000,
                    },
                    {
                        cost: 220631,
                        weight: 100000,
                    },
                    {
                        cost: 242639,
                        weight: 100000,
                    },
                ]
            },
            bars: {
                title: 'BARS',
                cost: [      
                    {
                        cost: 174760,
                        weight: 255000,
                    },
                    {
                        cost: 174760,
                        weight: 268000,
                    },
                    {
                        cost: 195929,
                        weight: 360000,
                    },
                    {
                        cost: 203981,
                        weight: 284000,
                    },
                    {
                        cost: 222422,
                        weight: 406000,
                    },
                ]
            },
            fance: {
                title: 'FANCE',
                cost: [
                    {
                        cost: 50000,
                        weight: 232000,
                    },
                    {
                        cost: 50000,
                        weight: 242000,
                    },
                    {
                        cost: 50000,
                        weight: 331000,
                    },
                    {
                        cost: 50000,
                        weight: 350000,
                    },
                    {
                        cost: 50000,
                        weight: 367000,
                    },
                ]
            },
        }
    }
}