// get_params преобразует данные из модели вчитаемый вид в форме таблици
export function get_params(data, _form) {
    
    /*
        <div class="table_result__head">Общие параметры</div>
        <div class="table_result__content">
        
            <div class="table_result__row">
                <div class="table_result__label">Длина периметра</div>
                <div class="table_result__value">
                    ${data.general_parameters.active_parametrs.size_perimetr}
                </div>
            </div>
        </div>
    */
    
    function deliver_aders() {
        let delivery = data.Parametrs_perimetr.active_parametrs.type_delivery;
        
        if(delivery) {
            return 'Самомывоз';
        } else {
            return data.Parametrs_perimetr.zone[data.Parametrs_perimetr.active_parametrs.sellected_zone].value;
        }
    }
    // клиент просил связаться с ним
    let call_phone = `
        <div class="table_result__head">
            Данные с формы    
        </div>
        <div class="table_result__content">
            <div class="table_result__row">
                <div class="table_result__label">Имя</div>
                <div class="table_result__value">
                    ${_form.name || 'Незаполненно'}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Номер</div>
                <div class="table_result__value">
                    ${_form.phone || 0}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Сообщение</div>
                <div class="table_result__value">
                    ${_form.massage || 'Незаполненно'}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Клиент просил перезвонить?</div>
                <div class="table_result__value">
                    ${data.Parametrs_perimetr.active_parametrs.order_call? 'Да':'Нет'}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Способ доставки</div>
                <div class="table_result__value">
                    ${deliver_aders()}
                </div>
            </div>
        </div>
    `;

    // Общие параметры
    let General_parameters = `

        <div class="table_result__head">Общие параметры</div>
        <div class="table_result__content">
        
            <div class="table_result__row">
                <div class="table_result__label">Длина периметра</div>
                <div class="table_result__value">
                    ${data.general_parameters.active_parametrs.size_perimetr}
                </div>
            </div>

            <div class="table_result__row">
                <div class="table_result__label">Высота</div>
                <div class="table_result__value">
                    ${data.general_parameters.height_fance.values[data.general_parameters.active_parametrs.height_fance] / 1000}m
                </div>
            </div>

            <div class="table_result__row">
                <div class="table_result__label">Цвет</div>
                <div class="table_result__value">
                   ${data.general_parameters.colors[data.general_parameters.active_parametrs.collor_active].title }
                </div>
            </div>

        </div>

    `;
    
    // Выводит размер панели
    function size_panel_statistic(  ) {

        function _size_index() {
            let index = data.size_panel.active_parametrs.type_fance_index;
            if(index == 0 ) {
                return '3D';
            }
            if(index == 1 ) {
                return '2D';
            }
            if(index == 2 ) {
                return 'TECH';
            }
        }
        let size_index = _size_index();

        function getTypeFance() {
            // выводит тип ограды
            let type_fance = data.size_panel.type_fance[2].params.selected_data.fance_variant;
            if(type_fance) {
                return 'с выпуском';
            } else {
                return 'Безопастная';
            }
        }

        if(size_index == '3D'){ 
            return `
                <div class="table_result__row">
                    <div class="table_result__label">Тип забора</div>
                    <div class="table_result__value">
                        ${size_index}
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Высота столба</div>
                    <div class="table_result__value">
                        ${data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] / 1000}M
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Длина секции</div>
                    <div class="table_result__value">
                        ${data.size_panel.section_size[data.size_panel.active_parametrs.section_size_value ] } MM
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Диаметр прутка</div>
                    <div class="table_result__value">
                        ${data.size_panel.type_fance[0].params.diameter.values[data.size_panel.type_fance[0].params.selected_data.diameter_index] } MM
                    </div>
                </div>
                
                <div class="table_result__row">
                    <div class="table_result__label">Размер ячейки</div>
                    <div class="table_result__value">
                        ${data.size_panel.type_fance[0].params.cell_size.values[data.size_panel.type_fance[0].params.selected_data.cell_size_index] } MM
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Цвет</div>
                    <div class="table_result__value">
                    ${data.size_panel.colors[data.size_panel.active_parametrs.collor_active].title }
                    </div>
                </div>
            `;
        }
        if(size_index == '2D'){ 
            return `
                <div class="table_result__row">
                    <div class="table_result__label">Тип забора</div>
                    <div class="table_result__value">
                        ${size_index}
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Высота столба</div>
                    <div class="table_result__value">
                        ${data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] / 1000}M
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Длина секции</div>
                    <div class="table_result__value">
                        ${data.size_panel.section_size[data.size_panel.active_parametrs.section_size_value ] } MM
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Диаметр прутка</div>
                    <div class="table_result__value">
                        ${data.size_panel.type_fance[1].params.diameter.values[data.size_panel.type_fance[1].params.selected_data.diameter_index] } MM
                    </div>
                </div>
                
                <div class="table_result__row">
                    <div class="table_result__label">Размер ячейки</div>
                    <div class="table_result__value">
                        ${data.size_panel.type_fance[1].params.cell_size.values[data.size_panel.type_fance[1].params.selected_data.cell_size_index] } MM
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Цвет</div>
                    <div class="table_result__value">
                    ${data.size_panel.colors[data.size_panel.active_parametrs.collor_active].title }
                    </div>
                </div>
            `;
        }
        if(size_index == "TECH") {
            return `
                    <div class="table_result__row">
                        <div class="table_result__label">Тип забора</div>
                        <div class="table_result__value">
                            ${size_index}
                        </div>
                    </div>

                    <div class="table_result__row">
                        <div class="table_result__label">Высота столба</div>
                        <div class="table_result__value">
                            ${data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] / 1000}M
                        </div>
                    </div>

                    <div class="table_result__row">
                        <div class="table_result__label">Длина секции</div>
                        <div class="table_result__value">
                            ${data.size_panel.section_size[data.size_panel.active_parametrs.section_size_value ] } MM
                        </div>
                    </div>


                    <div class="table_result__row">
                        <div class="table_result__label">Тип ограды</div>
                        <div class="table_result__value">
                            ${getTypeFance() }
                        </div>
                    </div>
                    
                    <div class="table_result__row">
                        <div class="table_result__label">Шаг заполнения</div>
                        <div class="table_result__value">
                            ${data.size_panel.type_fance[2].params.size_verticle.values[data.size_panel.type_fance[2].params.selected_data.size_verticle]}
                             
                        </div>
                    </div>

                    <div class="table_result__row">
                        <div class="table_result__label">Цвет</div>
                        <div class="table_result__value">
                        ${data.size_panel.colors[data.size_panel.active_parametrs.collor_active].title }
                        </div>
                    </div>
                `;
        }
    }

    let Size_panel = `
        <div class="table_result__head"> Размер панели </div>
        <div class="table_result__content">
            ${size_panel_statistic()}
        </div>
    `;

    // Вариант исполнения столба
    let version_pillar = `

        <div class="table_result__head">Вариант исполнения столба</div>
        <div class="table_result__content">
        
            <div class="table_result__row">
                <div class="table_result__label">Тип крепления</div>
                <div class="table_result__value">
                    ${data.version_pillar.type_post.values[data.version_pillar.active_parametrs.type_post_index].title}
                </div>
            </div>

            <div class="table_result__row">
                <div class="table_result__label">Высота</div>
                <div class="table_result__value">
                    ${data.version_pillar.height.values[data.version_pillar.active_parametrs.height_fance] / 1000 }М
                </div>
            </div>

            <div class="table_result__row">
                <div class="table_result__label">Сечение столба</div>
                <div class="table_result__value">
                    ${data.version_pillar.sechenie_pillar.values[data.version_pillar.active_parametrs.sechenie_pillar ]  }ММ
                </div>
            </div>
           
            <div class="table_result__row">
                <div class="table_result__label">Толщина стенки столба</div>
                <div class="table_result__value">
                    ${data.version_pillar.weight_wall.values[data.version_pillar.active_parametrs.weight_wall]  }ММ
                </div>
            </div>
            
            <div class="table_result__row">
                <div class="table_result__label">Крышка для столба</div>
                <div class="table_result__value">
                    ${data.version_pillar.active_parametrs.post_cover? 'Есть':'Нет'  }
                </div>
            </div>

            <div class="table_result__row">
                <div class="table_result__label">Цвет</div>
                <div class="table_result__value">
                ${data.version_pillar.colors[data.version_pillar.active_parametrs.collor_active].title }
                </div>
            </div>

        </div>
        
    `;

    let fasteners_fence = `
        <div class="table_result__head">Крепежи для забора</div>
        <div class="table_result__content">
        
            <div class="table_result__row">
                <div class="table_result__label">Тип крепления</div>
                <div class="table_result__value">
                    ${data.fasteners_fence.fasteners_type_fances.values[data.fasteners_fence.active_parametrs.fasteners_type_fances].title}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Крепление к столбу</div>
                <div class="table_result__value">
                    ${data.fasteners_fence.fixing_panel_post.values[data.fasteners_fence.active_parametrs.fixing_panel_post].title}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Цвет ограждения</div>
                <div class="table_result__value">
                    ${data.fasteners_fence.colors[data.fasteners_fence.active_parametrs.collor_active].title}
                </div>
            </div>

        </div>
    `;

    let Additional_elements_fence = `
        <div class="table_result__head">Дополнительные элементы ограждения</div>
        <div class="table_result__content">
    
            <div class="table_result__row">
                <div class="table_result__label">Ширина ${data.Additional_elements_fence.active_parametrs.type_filling.type }</div>
                <div class="table_result__value">
                    ${data.Additional_elements_fence.active_parametrs.type_filling.width}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">L насадка</div>
                <div class="table_result__value">
                    ${data.Additional_elements_fence.active_parametrs.L_nasadca}
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Цвет ограждения</div>
                <div class="table_result__value">
                    ${data.Additional_elements_fence.colors[data.Additional_elements_fence.active_parametrs.collor_active].title}
                </div>
            </div>

        </div>
    `;
    function wickets_active_params() {
            let active_params = data.Wickets.active_parametrs;
            let string ='';
            if(active_params.smart != 0) {
                string += `
                    <div class="table_result__row">
                        <div class="table_result__label">Количество калиток SMART</div>
                        <div class="table_result__value">
                            ${active_params.smart}
                        </div>
                    </div>
                    <div class="table_result__row">
                        <div class="table_result__label">Ширина проёма SMART</div>
                        <div class="table_result__value">
                            ${data.Wickets.opening_width_smart.values[active_params.opening_width_smart]}
                        </div>
                    </div>
                `;
            }
            if(active_params.fance != 0) {
                string += `
                    <div class="table_result__row">
                        <div class="table_result__label">Количество калиток FANCE</div>
                        <div class="table_result__value">
                            ${active_params.fance}
                        </div>
                    </div>
                    <div class="table_result__row">
                        <div class="table_result__label">Ширина проёма FANCE</div>
                        <div class="table_result__value">
                            ${data.Wickets.opening_width_fance.values[active_params.opening_width_fance]}
                        </div>
                    </div>

                `;
            }
            if(active_params.bars != 0) {
                string += `
                    <div class="table_result__row">
                        <div class="table_result__label">Количество калиток BARS</div>
                        <div class="table_result__value">
                            ${active_params.bars}
                        </div>
                    </div>
                    <div class="table_result__row">
                        <div class="table_result__label">Ширина проёма BARS</div>
                        <div class="table_result__value">
                            ${data.Wickets.opening_width_bars.values[active_params.opening_width_bars]}
                        </div>
                    </div>
                `;
            }

            return string;
    }
    let Wickets = `
        <div class="table_result__head">Общие параметры</div>
        <div class="table_result__content">
            ${wickets_active_params()}
            <div class="table_result__row">
                <div class="table_result__label">Высота калитки</div>
                <div class="table_result__value">
                    ${data.Wickets.height.values[data.Wickets.active_parametrs.height] / 1000}м
                </div>
            </div>
            <div class="table_result__row">
                <div class="table_result__label">Цвет</div>
                <div class="table_result__value">
                    ${data.Wickets.colors[data.Wickets.active_parametrs.collor_active].title}
                </div>
            </div>
        </div>
    `;

    function gates__params() {
        let active_params = data.Gates.active_parametrs;
        let string = "";

        if(active_params.swing_smart != 0 || active_params.swing_bars != 0 || active_params.swing_fance != 0) {
            string += `
                <div class="table_result__row">
                    <div class="table_result__label">Ширина распашных ворот</div>
                    <div class="table_result__value">
                        ${data.Gates.opening_width_swing.values[active_params.swing_width]}
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Количество распашных ворот</div>
                    <div class="table_result__value">
                        SMART: ${active_params.swing_smart}
                        BARS:  ${active_params.swing_bars }
                        FANC:  ${active_params.swing_fance}
                    </div>
                </div>
            `;
        }

        if(active_params.sliding_smart != 0 || active_params.sliding_bars != 0 || active_params.sliding_fance != 0) {
            
            string += `
                <div class="table_result__row">
                    <div class="table_result__label">Ширина раздвижных ворот</div>
                    <div class="table_result__value">
                        ${data.Gates.opening_width_sliding.values[active_params.sliding_width]}
                    </div>
                </div>

                <div class="table_result__row">
                    <div class="table_result__label">Количество раздвижных ворот</div>
                    <div class="table_result__value">
                        SMART: ${active_params.sliding_smart}
                        BARS:  ${active_params.sliding_bars }
                        FANC:  ${active_params.sliding_fance}
                    </div>
                </div>
            `; 
        }

        return string;
    }
    let Gates = `
        <div class="table_result__head">Ворота</div>
        <div class="table_result__content">
        
            ${gates__params()}

            <div class="table_result__row">
                <div class="table_result__label">Высота калитки</div>
                <div class="table_result__value">
                    ${data.Gates.height.values[data.Gates.active_parametrs.height] / 1000}м
                </div>
            </div>

            <div class="table_result__row">
                <div class="table_result__label">Цвет</div>
                <div class="table_result__value">
                    ${data.Gates.colors[data.Gates.active_parametrs.collor_active].title}
                </div>
            </div>

        </div>
    `;

    let table_content = `
        ${call_phone} 
        ${General_parameters} 
        ${Size_panel} 
        ${version_pillar}
        ${fasteners_fence}
        ${Additional_elements_fence}
        ${Wickets}
        ${Gates}
    `;
    
    let style_css = `
        .table_result {
            font-size: 15px;
            font-weight: 300;
        }
        .table_result__head {
            padding: .5rem 1rem;
            padding-left: 0;
            margin-top: 1rem;
            font-size: 17px;
            font-weight: 700;
        }
        .table_result__content {
            border: 1px solid #e1e0e0;        
        }
        .table_result__row {
            padding: .5rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .table_result__row:nth-child(even) {
            background-color: #f5f5f5;
        }
        .table_result__label {
        }
        .table_result__value {
        }
    `;
    let style = `
        <style>${style_css}</style>
    `;

    let table = ` ${style}<div class="table_result">${table_content}</div>`;
    return table;
} 