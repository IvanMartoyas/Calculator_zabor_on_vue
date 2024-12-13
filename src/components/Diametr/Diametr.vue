<template>
    <div class="diametr" v-if="loader">
        <div class="calc__rowItem border-right">
            <div class="calc__top">
                <div class="calc__title">{{ title }}</div>
            </div>
            <div class="calc__content calc__row">
                <div class="diametr__img">
                    <img :src="IMG_LIST.diameter.src" alt="Diametr">
                <div class="diametr__label">{{ values[_active_index] }}mm  </div>
            </div>
                <div class="diametr__items">
                    <div 
                    class="btn btn-item diametr__item"
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

export default {
    props: ['values', 'active_value', 'title'],
    data() {
        return {
           _active_index: this.active_value || 0,
           IMG_LIST: "",
           loader: false,
        }
    },
    mounted() {
        this.IMG_LIST = this.$store.getters.IMAGES;
        this.loader = true;
    },
    methods: {
        setValue(val) {
            this._active_index = val;
            this.$emit('selected_value', val)
        }
    },
}
</script>
<style>
    @import './style.css';

</style>