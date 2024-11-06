
// старый клас на jquery НЕ ИСПОЛЬЗУТЕЬСЯ В КОДЕ

class Range {

    _id = 0;
    _data = {};

    Range_gorizontal (
        id, // селектор элемента
        data,  // обект с настройками 
        store_variable, // переменная куда буду схоранять значение | ссылка на метод в храниилище
    ) {
        let hesh = new Date()
        hesh = hesh.getTime()
        let input_id = 'input_'+hesh; // уникальный input id

        // расчитываю step, входное значение в процентах
        data._step = data._max / ((data._step / 100 ) * data._max);
        
        $(id).html(`
            <input class="_range" id="${input_id}" type="range" min="${data._min}" value="${data._val}" max="${data._max}" >
            <div class="range__items"></div>
            <div class="range__labels calc__row"></div>  
            <div class="tooltip"><span></span></div>
        `);

        
        // ПОЛОСКИ  начало

        function renderSpan() { // отрисовывает полоски
            if(!data._line_span.active) {
                $(`${id} > .range__items`).hide();
                return 
            }
            // определяю  активные ли они
            let active_class = '';
            let valStep = data._max / data._step;
            let span_line = '';
            $(id).find('.range__items').html('');
            for( let i = 0; i <= data._step; i++) {

                let val_input = $(id).find('input').val();
                
                if( val_input >= valStep*i) {
                    active_class = 'active';
                } else {
                        active_class = '';
                }
                // рисую полоски 
                span_line += ` <span class="range__item ${active_class}" value="${valStep*i}"><i style="height: " ></i></span> `;
            }
            $(id).find('.range__items').html(span_line);  
                
        } renderSpan();

        $(id).find(`#${input_id}`).on( "input", function() {
           
            // обновляю элементы 
            renderSpan();
            renderToolTip();
            render_labels();
        });
        // обрабатываю клики по нижним полоскам (span)
        $(id).on( "click", "span", function() {
            $(id).find(`#${input_id}`).val($(this).attr('value')) // сохраняю записанное значение

            // активирую и дезактивирую нижние элементы
            $(id).find('.range__item').removeClass("active");
            $(this).addClass("active");

            // обновляю элементы 
            renderSpan();
            renderToolTip();
            render_labels();
            
        });
        // ПОЛОСКИ конец
        
        
        // ВЫВОД ЦИФР НАЧАЛО
        function render_labels() {
            if(!data._labels.active) { 
                $(`${id} > .range__labels`).hide();
                return 
            }
            let labels = Math.round(data._max / data._labels.mount_labels)+1;
            if(data._max / data._labels.mount_labels) {

            }
            let label_size = data._labels.mount_labels;
            let labels_text = '';
            let active_class = '';

            for(let i = 0; i < labels; i++) {

                let val_input = $(id).find(`#${input_id}`).val();
                
                if( val_input >= label_size*i) {
                    active_class = 'active';
                } else {
                        active_class = '';
                }

                labels_text += `<span class="${active_class}" value="${label_size*i}">${label_size * i}м.</span>`;
            }
            
            $(id).find('.range__labels').html(labels_text);
        }
        renderToolTip();
        render_labels();
        // ВЫВОД ЦИФР КОНЕЦ

        function renderToolTip () {
            if(!data._toolTip.active) { 
                $(`${id} > .tooltip`).hide();
                return 
            }
            let step = data._max / 100;

            let input_val = $(id).find(`#${input_id}`).val();
            let padding = (input_val / step) ;
            $(`${id} > .tooltip`).find('span').html(input_val);
            $(`${id} > .tooltip`).css("left", `${padding}%`);
            
        }
        
    }

    setActiveValue(index) {
        this.render_range_vertical(this._id, this._data, index);
    }
    render_range_vertical(id, data, index) { 
        
        if(id == undefined) { id = this._id;}
        if(data == undefined) { data = this._data;}
        // console.log('id ',id+ ' data ',data)
        // console.log('data._values ',data._values.length)

        let active_value = data._active_value;
        let items = ``;
        let active_class = active_value || 0;
        // высчитываю высотоу колонок
        let size_step_procent = 100 / (data._values.length-1);

        for(let i = 0; i < data._values.length; i++) {

            let _active_value = data._values[active_value];
            let _data_value = data._values[i]
            
            // проверка на активный элемент
           // console.log('_active_value ',_active_value)
            if(_active_value >= _data_value) {
                active_class = 'range_vertical__item--active';
            } else  active_class = '';
           
            // console.log('size_step_procent ',size_step_procent)
            let active_line_class = ' ';
            if(active_value == i) {
                active_line_class = 'active'
            }
            items += `
                <div class="range_vertical__item ${active_class}" value="${i}" style="top: ${size_step_procent * (i)}%">
                    <div class="range_vertical__line ${active_line_class}"></div>
                    <div class="range_vertical__label">${data._values[i]}</div>
                </div>
            `;

            $(id).trigger('_change',data._values[active_value]);
        }

        $(id).find('.range_vertical__items').html(items);
    }

    range_vertical_tooltip_rander(id,data) {
        if(!data._toolTip.active) { 
            $(`${id} > .tooltip`).hide();
            return 
        }
        let active_value = data._active_value; // index
        let _active_value = data._values[active_value]; // value

        let tooltip = `
            <div class="tooltip noselect"><span class=""></span> </div>
                <div class="range_vertical__input--value"></div>
            </div>
        `;

        $(id).find(`.range_vertical__item--active[value|=${active_value}]`).append(tooltip)
        $(id).find('.tooltip').find('span').html(_active_value);
        

    }

    range_vertical(id, data ) {
        let _this = this; // сохраняю this для передачи в функции
        this._id = id;
        this._data = data;


        let active_value = data._active_value;
        // расчитываю step, входное значение в процентах
        data._step = data._max / ((data._step / 100 ) * data._max);
        // console.log('data._step ',data._step);

        // отрисовываю компонент
        $(id).html(`
            <div class="range_vertical__input">
                <div class="range_vertical__input--field">
                <div class="range_vertical__items"></div>
            </div>
        `);

        
        function render_items() {
            _this.render_range_vertical(_this._id, data)
        } render_items();

   
        // обрабатываю клики по нижним полоскам (span)
        $(id).on( "click", ".range_vertical__item", function() {

            active_value = $(this).attr('value');
            // console.log('val revert',$(this).attr('value'))
            data._active_value = $(this).attr('value');

            // активирую и дезактивирую нижние элементы
            $(id).find('.range_vertical__item').removeClass("range_vertical__item--active");
            $(this).addClass("range_vertical__item--active");

            // обновляю элементы 
            render_items();
            renderToolTip();
        });
        // ПОЛОСКИ конец
    

        function renderToolTip () {
            _this.range_vertical_tooltip_rander(_this._id,data);
        } renderToolTip()
        
        $(id).on( "mousedown", '.tooltip', function() { 
            let old_data = [];
            $( id ).on( "mousemove", '.tooltip', function( event ) {
            
        
        
                if(old_data == 0) { old_data.push(event.pageY)}
                console.log('old_data ',event.pageY)
                if(event.pageY > old_data) {
                    console.log('меньше ',event.pageY > old_data);
                } else if (event.pageY <= old_data) {
                    console.log('больше event.pageY < old_data ',event.pageY < old_data);
                }
                $( id ).find("span").text(event.pageY); 
                old_data.push(event.pageY);
                var msg = "Handler for `mousemove` called at ";
                msg += event.pageX + ", " + event.pageY;

            })
            console.log('mousemove')
            
            //console.log( "<div>" + msg + "</div>" );
        }); 
      
    }
}
