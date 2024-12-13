<template>
    <div class="cell_size" v-if="loader">
        <div class="calc__rowItem border-right">
            <div class="calc__top">
                <div class="calc__title">{{ title }}</div>
            </div>
            <div class="calc__content calc__row">
                <div class="cell_size__img">
                    <img :src="IMG_LIST.reyki.src" alt="reyki">
                </div>
                <div class="cell_size__items">
                    <div 
                    class="btn btn-item cell_size__item"
                    v-for="(item, i) in values"
                    :key="i"
                    :class="{active: _active_index == i}"
                    @click="setValue(i)"
                >{{ item }}</div>
                
                </div>
                
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
           IMG_LIST: "",
           loader: false
        }
    },
    mounted() {
        this.IMG_LIST = this.$store.getters.IMAGES;
        this.loader = true;
    },
    methods: {
        setValue(val) {
            // console.log('val', val)
            this._active_index = val;
            this.$emit('selectedCell_size', val)
        }
    },
}
</script>
<style>
    @import './style.css';

</style>