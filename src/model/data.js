export const enum_colors_fences = [ // цвета ограждения 
    {
        id: 0,
        title: 'RAL 6005',
        value: '#008000'
    },
    {
        id: 1,
        title: 'RAL 8017',
        value: '#73140b'
    },
    {
        id: 2,
        title: 'Цинк    ',
        value: '#d2d2d2',
    },
];

const units_measurement = {
    weight: 29.548, // это вес на 1 пункт выбранном в Длине периметра
}

export const _data_calc = { // основные данные
    general_parameters: { // ообщие параметры
        panel: {
            width_mm: 2500,// mm
        },
        colors: enum_colors_fences,
        size_perimetr: {
            title: 'Длина периметра (м).',
            descrition: 'Длина периметра (м).',
            value: {
                val: 350,
                min: 0,
                step: 5,
                max: 500
            }
        },
        height_fance: {
            title: 'Высота забора (мм.)',
            descrition: 'Высота забора (мм.)',
            values: [
                2430,
                2030,
                1730,
                1530,
            ]
        },
        active_parametrs: { // сюда сохраняю выбранные значения
            collor_active: 0,
            size_perimetr: 1,
            height_fance: 1,
        }
    },
    size_panel: { // Размер панели
        type_fance: [ // тип забора
            { // 3d
                params: {
                    diameter: {
                        title: 'Диаметр прутка (мм).',
                        values: [
                            3, 
                            3.6, 
                            4, 
                            5, 
                            6
                        ], 
                    },
                    cell_size: { // 
                        title: 'Размер ячейки (мм).',
                        values: ['55x200']
                    },
                    selected_data: {
                        diameter_index: 3,// выбраный диаметр (индек с массиву)
                        cell_size_index: 0
                    }
                },
            },
            {  // 2d
                params: {
                    diameter: {
                        title: 'Диаметр прутка (мм).',
                        values: [
                            '6/5/6', 
                            '8/6/8',
                        ]
                    },
                    cell_size: { // 
                        title: 'Размер ячейки (мм).',
                        values: ['55x200']
                    },
                    selected_data: {
                        diameter_index: 0,// выбраный диаметр (индек с массиву)
                        cell_size_index: 0
                    }
                },
            },
            {// техограда
                params: {
                    size_verticle: {
                        title: 'Расстояние вертикальными рейками (мм.) (шаг заполнения)',
                        values: [100, 125, 150]
                    },
                    selected_data: {
                        size_verticle: 0, //Расстояние вертикальными рейками
                        fance_variant: true, // true c выпуском, false безопастная
                    }
                }
            },
        ],
        height: {
            title: 'Высота (мм.)',
            values:  [
                2430,
                2030,
                1730,
                1530,                             
            ]
        },
        section_size: [
            2500
        ],
        colors: enum_colors_fences,
        active_parametrs: {
            type_fance_index: 0,
            collor_active: 0,
            section_size_value: 0, // длина секции
            height_fance: 0,
        }
    },
    version_pillar: {// Вариант исполнения столба
        type_post: {
            title: 'Тип крепления столба',
            values: [
                {
                    title: 'На фланец',
                    img: 'post1.jpg'
                },
                {
                    title: 'Под бетонирование',
                    img: 'post1.jpg'
                },
            ]
        },
        height: {
            title: 'Высота (мм.)',
            values:  [
                3000,
                2400,
                2000,
                1800,                             
            ]
        },
        sechenie_pillar: {
            title: 'Сечение столба (мм.)',
            values: ['60х40','60х60','80х80']
        },
        weight_wall: { // 
            title: 'Тощина стенки столба (мм.)',
            values: [
                ['1.5'],
                ['1.5','2.0'],
                ['2.0'],
            ]
        },
        post_cover: {
            title: 'Крышка для столба',
            value: true,
            weight: [ // грамм
                20,
                30,
                40
            ]
        },
        colors: enum_colors_fences,

        active_parametrs: {
            height_post: 1,
            type_post_index: 0,
            sechenie_pillar: 0,
            weight_wall: 0,
            post_cover: true,
            collor_active: 0,
        }
    },
    fasteners_fence: { // крепежи забора
        fasteners_type_fances: {
            title: 'Тип крепления',
            values: [
                {
                    title: 'Скоба F24',
                    img: 'fasteners.png',
                },
            ]
        },
        fixing_panel_post: { // список креплений забора
            title: 'Крепление панели к столбу',
            values: [
                {
                    title: 'Крепление для F24',
                    subTitle: 'Кровельный саморез',
                    value: true
                },
            ]
        },
        colors: enum_colors_fences,
        active_parametrs: {
            fasteners_type_fances: 0,
            fixing_panel_post: 0,
            collor_active: 0,
        }
    },
    Additional_elements_fence: {// дополнительные элементы ограждения
        colors: enum_colors_fences,
        active_parametrs: {
            type_filling: {
                type: 'СББ',
                width: 0,
            },
            collor_active: 0,
            L_nasadca: 0,
        },
        type_filling: {
            title: "Тип заполнения",
            values: [
                {
                    img: 'setka1.jpg',
                    title: 'CББ',
                    width: 2,
                    active: true,
                },
                {
                    img: 'setka2.jpg',
                    title: 'ПББ',
                    width: 2,
                    active: true,
                },
            ]
        }
    },
    Wickets: { 
        active_parametrs: {
            collor_active: 0,
            //Типы калиток указываетсья количество шт
            smart: 0,
            bars: 0,
            fance: 0,

            // ширина калиток указываеться индекс для выбора нужной ширины
            opening_width_smart: 0,
            opening_width_bars: 0,
            opening_width_fance: 0,

            // высота
            height: 0,
        },
        height: {
            
            title: 'Высота (мм.)',
            values: [1700],
        },
        colors: enum_colors_fences,
        opening_width_smart: {
            title: 'Ширина проема SMART (мм)',
            values: [900, 1000, 1100, 1200]
        },
        opening_width_bars: {
            title: 'Ширина проема BARS (мм)',
            values: [1000, 1200]
        },
        opening_width_fance: {
            title: 'Ширина проема FENCE (мм)',
            values: [ 1000, 1200]
        },
    },
    Gates: {
        active_parametrs: {
            collor_active: 0,

            //Типы распашных ворот количество
            swing_smart: 0,
            swing_bars: 0,
            swing_fance: 0,
            // ширина распашных ворот индекс масива
            swing_width: 0,


            //Типы раздвижных ворот количество
            sliding_smart: 0,
            sliding_bars: 0,
            sliding_fance: 0,
            // ширина раздвижных ворот индекс масива
            sliding_width: 0,

            // высота
            height: 0,
        },
        height: {
            title: 'Высота (мм.)',
            values: [1700]
        },
        colors: enum_colors_fences,

        opening_width_swing: {
            title: 'Ширина распашных ворот, мм.',
            values: [3500, 4000, 4500, 5000, 5500, 6000]
        },

        opening_width_sliding: {
            title: 'Ширина раздвижных ворот, мм.',
            values: [4000, 4500, 5000, 5500, 6000]
        },


    },

    Parametrs_perimetr: { // общие параметры
        active_parametrs: {
            sellected_zone: 0,
            type_delivery: false,
            order_call: false
        },
        zone: [// зоны доставки
            {
                title: 'Зона 1 - 3500 рублей',
                value: 'Зона 1'
            },
            {
                title: 'Зона 2 - 4700 рублей',
                value: 'Зона 2'
            },
            {
                title: 'Зона 3 - 6100 рублей',
                value: 'Зона 3'
            },
            {
                title: 'Зона 4 - 7300 рублей',
                value: 'Зона 4'
            },
        ]
    }
}