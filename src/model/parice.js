export const price = {
    amount: {
        // расчитывает стоимость и передаёт её в общую статистику в vuex
        addSumm(number){ // добавляет стоимость выбранного элемента 
            this.amount_price = Math.round(Number(number));
            return this.amount_price;
           // console.log('this.amount_price ',this.amount_price)
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
            },
            {
                cost: 7889,
                value: 2030,
            },
            {
                cost: 8750,
                value: 1730,
            },
            {
                cost: 7050,
                value: 1530,
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
        SBB_attachment_kit: {
            title: 'Комплект крепления СББ к насадке',
            cost: 2582,
        }
    },
    PBB: {
        title: 'ПББ',
        cost: 5000,
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
        smart: {
            title: 'Калитка SMART',
            cost: [
                21448, // 900
                21594, // 1000
                22803, // 1100
                24876, // 1200    
            ],
        },
        bars: {
            title: 'Калитка BARS',
            cost: [
                32786, // 1000 
                33770, // 1200
            ],
        },
        fence: {
            title: 'Калитка FENCE',
            cost: [
                29686, // 1000 
                30491, // 1200
            ],
        },
    },
    gates: {
        swing_gates: {
            title: 'Распашные ворота',
            smart: {
                title: 'SMART',
                cost: [
                    78234,
                    86783,
                    93365,
                    94454,
                    101906,
                    131180
                ]
            },
            bars: {
                title: 'BARS',
                cost: [
                    66948,
                    72173,
                    76904,
                    77996,
                    83596,
                    105587
                ]
            },
            fance: {
                title: 'FANCE',
                cost: [
                    27223,
                    31055,
                    34104,
                    36923,
                    40194,
                    43466
                ]
            },
        },
        sliding_gates: {
            title: 'Распашные ворота',
            smart: {
                title: 'SMART',
                width: [
                    173154,
                    189226,
                    189226,
                    212870,
                    220631,
                    242639
                ]
            },
            bars: {
                title: 'BARS',
                width: [
                    161485,
                    174760,
                    174760,
                    195929,
                    203981,
                    222422
                ]
            },
            fance: {
                title: 'FANCE',
                width: [
                    50000,
                    50000,
                    50000,
                    50000,
                    50000,
                    50000,
                ]
            },
        }
    }
}