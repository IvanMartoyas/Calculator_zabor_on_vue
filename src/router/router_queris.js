
let publicPath = '/calc/';
let host = window.location.host;
let full_url = window.location.protocol + "//" + host + publicPath;



// в array_empty_data храню список get параметров в которые буду записывать массивы
let array_empty_data = {
    general_parameters: '',
    size_panel: '',
    version_pillar: '',
    fasteners_fence: '',
    additional_elements: '', // Additional_elements_fence
    Wickets: '',
    Gates: '',
}


export const ROUTER = {

    // при первой загрузке сайта проверяю есть ли вообще get параметры в url
    // init_queris если ещё нет query параметров вообще то создаст первый обьект в url путе
    // get_queris достаёт обьект сохраниений
    // set_queris перезаписывает обьект сохраниений
    // reset_url сброс настроек калькулятора

    checkd_url(_this, _name) {
      
        if(_this.$route.query[_name] == undefined){ 
            return false;
        } else {
            return true;
        }
    },

    init_queris(_this, _name) { //  сслыка на this и название параметра куда сохраню данные        
        let data = JSON.stringify(array_empty_data);
        _this.$router.push({name: _this.$route.name, query: {[_name]: data}});
    },

    get_queris(_this, name) {//  сслыка на this и название параметра где лежат мои данные 
        let _params = _this.$route.query[name];

        if(_params != undefined) {
            return JSON.parse(_params);
        } else {
            return array_empty_data;
        }
    },

    set_queris(_this, _params) {// сслыка на this и массив для сохранения

        let data = JSON.stringify(_params);
        _this.$router.push({path: 'calc',name: _this.$route.name, query: {data: data}});
    },

    reset_url(_this) {
      
        _this.$router.push({path: 'calc',name: _this.$route.name, query: ''});
        setTimeout(()=>{window.location.reload();},100)
        
    }

}


export class ROUTER_PARAMS {
    _this = 0;
    _name = '';

    constructor(_this, _name) {
        this._this = _this;
        this._name = _name;
    }

    checkd_url() {
        // если тут нет данных то возможно это из за того что сайт ещё не успел заргузиться
        if(this._this.$route.query.data == undefined) { 
            return false;
        } else {
            return true;
        }
    }

    get_queris() {
        return JSON.parse(this._this.$route.query.data);
    }

    set_queris(_params) {// сслыка на this и массив для сохранения
        let data = JSON.stringify(_params);
        this._this.$router.push({query: {data: data}});
    }

    reset_url() {
        setTimeout(()=>{window.location.replace(full_url)},100)
    }
}
