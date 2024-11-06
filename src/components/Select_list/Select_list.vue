<template>
    <div class="calc__rowItem select_list">
        <div class="calc__top calc__row">
            <div class="calc__title">{{title}}</div>
        </div>
        <div class="calc__content">
            <div 
                class="btn btn-item"
                v-for="(item ,i) in values" 
                :key="item" 
                :class="{active: (i == _active_index)}"
                @click="setValue(i)"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>
<script>
// компонент отрисовывает выбор размера ячейки
export default {
    props: ['values', 'active_value', 'title'],
    data() {
        return {
           _active_index: this.active_value || 0,
        }
    },
    mounted() {
       
    },
    methods: {
        setValue(val) {
            // console.log('val', val)
            this._active_index = val;
            this.$emit('selected_value', val)
        }
    }
}
</script>
<style>
    @import './style.css';

</style>