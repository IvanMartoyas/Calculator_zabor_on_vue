import { createStore } from 'vuex'
import { _menu_items } from '@/components/Tabs_menu/_menu.js'; // пункты меню
import { _data_calc } from '@/model/data.js'; // данные
import { ROUTER_PARAMS } from '@/router/router_queris';
import { price } from '@/model/parice'; // цены
import { statisticks, Statistics } from '@/model/statistics'; // статистика
import { _values_weight, WEIGHT } from '@/model/weight_table'; // статистика

import {IMG_LIST} from '@/assets/img/img_list'; // все фотографии переведены в этом файле в base64

var _ROUTER_PARAMS = 0;

var _STSTISTICS = 0;
var statistics_start_calc = false;

var _WEIGHT = 0;
var weight_start_calc = false;

export default createStore({
  state: {
    _menu_items: _menu_items,
    data_calc: _data_calc,

    Price: price,
    Weight: _values_weight,
    Statisticks: statisticks,

    IMAGES: IMG_LIST,
  },
  mutations: {
    _menu_itemsF(state, data) {
        state._menu_items = data;
    },
    setData_calc(state, data) {
        state.data_calc = data;
        if(statistics_start_calc) {
          _STSTISTICS.calc__statistics__update()
        }
        if(weight_start_calc) {
          _WEIGHT.calc__weight__update()
        }
    },
    _setPrice(state, data) {
        state.Price = data;
    },
    _setWeight(state, data) {
        state.Weight = data;
    },
    _setStatisticks(state, data) {
        state.Statisticks = data;
    },
  },
  actions: {
    menu_items({ commit, state },data) {
        commit('_menu_itemsF',data);
    },
    setData_calc({ commit, state },data) {
        commit('setData_calc',data);


        // в случае изменения state я перезаписываю данные в url строку
        let state_data = state.data_calc;

        let _size_panel = {}
        _size_panel = state_data.size_panel.active_parametrs;
        if(state_data.size_panel.active_parametrs.type_fance_index == 0) { //if 3d fance
          _size_panel.selected_data = state.data_calc.size_panel.type_fance[0].params.selected_data;
        }
        if(state_data.size_panel.active_parametrs.type_fance_index == 1) { //if 2d fance
          _size_panel.selected_data = state.data_calc.size_panel.type_fance[1].params.selected_data;
        }
        if(state_data.size_panel.active_parametrs.type_fance_index == 2) { //if TECH fance
          _size_panel.selected_data = state.data_calc.size_panel.type_fance[2].params.selected_data;
        }

        let url_data = {
          general_parameters: state_data.general_parameters.active_parametrs,
          size_panel: _size_panel,
          version_pillar: state_data.version_pillar.active_parametrs,
          fasteners_fence: state_data.fasteners_fence.active_parametrs,
          A_E_F: state_data.Additional_elements_fence.active_parametrs,
          Wickets: state_data.Wickets.active_parametrs,
          Gates: state_data.Gates.active_parametrs,
        };
        _ROUTER_PARAMS.set_queris(url_data);
    },
    init_params({commit, state }, _this) { // вызываеться при перовй загрузке приложения в App/mounted()
      
      let state_data = state.data_calc;


      let _size_panel = {}
      _size_panel = state_data.size_panel.active_parametrs;
      if(state_data.size_panel.active_parametrs.type_fance_index == 0) { //if 3d fance
        _size_panel.selected_data = state.data_calc.size_panel.type_fance[0].params.selected_data;
      }
      if(state_data.size_panel.active_parametrs.type_fance_index == 1) { //if 2d fance
        _size_panel.selected_data = state.data_calc.size_panel.type_fance[1].params.selected_data;
      }
      if(state_data.size_panel.active_parametrs.type_fance_index == 2) { //if TECH fance
        _size_panel.selected_data = state.data_calc.size_panel.type_fance[2].params.selected_data;
      }
      let data = {
        general_parameters: state_data.general_parameters.active_parametrs,
        size_panel: _size_panel,
        version_pillar: state_data.version_pillar.active_parametrs,
        fasteners_fence: state_data.fasteners_fence.active_parametrs,
        A_E_F: state_data.Additional_elements_fence.active_parametrs,
        Wickets: state_data.Wickets.active_parametrs,
        Gates: state_data.Gates.active_parametrs,
      };
      let url_data = 0;

      _ROUTER_PARAMS = new ROUTER_PARAMS(_this);
      
      if(_ROUTER_PARAMS.checkd_url()) {// если url не пустой 
        // console.log("_ROUTER_PARAMS.checkd_url() ",_ROUTER_PARAMS.checkd_url())
        // получаю данные из url
        url_data = _ROUTER_PARAMS.get_queris();
        // console.log("url_data ",url_data)

        let _size_panel = {}

        if(url_data.size_panel.type_fance_index == 0) { //if 3d fance
          state_data.size_panel.type_fance[0].params.selected_data = url_data.size_panel.selected_data;
        }
        if(url_data.size_panel.type_fance_index == 1) { //if 2d fance
          state_data.size_panel.type_fance[1].params.selected_data = url_data.size_panel.selected_data;
        }
        if(url_data.size_panel.type_fance_index == 2) { //if TECH fance
          state_data.size_panel.type_fance[2].params.selected_data = url_data.size_panel.selected_data;
        }
        state_data.size_panel.active_parametrs.type_fance_index = url_data.size_panel.type_fance_index;
        state_data.size_panel.active_parametrs.collor_active = url_data.size_panel.collor_active;
        state_data.size_panel.active_parametrs.section_size_value = url_data.size_panel.section_size_value;
        state_data.size_panel.active_parametrs.height_fance = url_data.size_panel.height_fance;


        // беру данные из url и записываю в state
        state_data.general_parameters.active_parametrs = url_data.general_parameters;
        state_data.version_pillar.active_parametrs = url_data.version_pillar
        state_data.fasteners_fence.active_parametrs = url_data.fasteners_fence
        state_data.Additional_elements_fence.active_parametrs = url_data.A_E_F,
        state_data.Wickets.active_parametrs = url_data.Wickets
        state_data.Gates.active_parametrs = url_data.Gates

        // сохраняю их
        commit('setData_calc',state_data );
        // console.log("this state ", _ROUTER_PARAMS._this.for)
      } else { // если url пустой то заполняю
        _ROUTER_PARAMS.set_queris(data);
      }

    },

    init_weight({ commit, state },data) {
      _WEIGHT = new WEIGHT(data);
      weight_start_calc = true;
    },
    setWeight({ commit, state },data) {
      commit('_setWeight',data);
    },

    setPrice({ commit, state },data) {
      commit('_setPrice',data);
    },
    init_statistiks({ commit, state },data) {
      _STSTISTICS = new Statistics(data);
      statistics_start_calc = true;
    },
    setStatisticks({ commit, state },data) {
      commit('_setStatisticks',data);
    },
  },
  getters: {
    Menu_items: s => s._menu_items,
    Data_calc: s => s.data_calc,
    get_perimetr: s => {
        return new Promise((resolve, reject) => {
            resolve(s.data_calc.general_parameters.active_parametrs.size_perimetr)
        });
    },
    Price: s=> s.Price,
    Weight: s=> s.Weight,
    Statisticks: s=> s.Statisticks,

    IMAGES: s=>s.IMAGES,
  },
  modules: {
  }
})