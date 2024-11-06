import { createStore } from 'vuex'
import { _menu_items } from '@/components/Tabs_menu/_menu.js'; // пункты меню
import { _data_calc } from '@/model/data.js'; // данные
// console.log("_data_calc " ,_data_calc)
export default createStore({
  state: {
    _menu_items: _menu_items,
    data_calc: _data_calc,
  },
  mutations: {
    _menu_itemsF(state, data) {
        state._menu_items = data;
    },
    setData_calc(state, data) {
        state.data_calc = data;
    },
  },
  actions: {
    menu_items({ commit, state },data) {
        commit('_menu_itemsF',data);
    },
    setData_calc({ commit, state },data) {
        commit('setData_calc',data);
    },
  },
  getters: {
    Menu_items: s => s._menu_items,
    Data_calc: s => s.data_calc,
  },
  modules: {
  }
})

/**
 * пример изменить пукнты меню
 *  let data = this.$store.getters.Menu_items;
            
            data[0].active = this.flag;
            data[1].active = this.flag;
            data[2].active = this.flag;
            this.$store.dispatch('menu_items', data )
            this.flag = !this.flag;
 */