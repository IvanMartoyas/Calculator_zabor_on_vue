<template>
    <div class="range_vertical">
        <div class="range_vertical__items">
            <!-- :class="{'range_vertical__item--active': isItemActive(i)}" -->
            <div 
                v-for="(value, i) in _values"
                :key ="value"
                class="range_vertical__item" 
                :style="{top: (step * i)+'%'}"
                @click="setIndex(i)"
            >
                <div class="range_vertical__line" :class="{'active': isLineActive(i)}"><i></i></div>
                <div class="range_vertical__label" @click="setValue(i)">{{value}}</div>
            </div>
        </div>

        <div class="tooltip noselect" :style="{top: (step * _active_value)+'%'}"><span class="">{{ values[_active_value] }}</span></div>
        <div class="range_vertical__input">
            <div class="range_vertical__input--value"></div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['active_value', 'values'],
    data() {
        return {
            _values: this.values,
            _active_value: this.active_value,
            step:  100 / (this.values.length-1),
        }
    },
    mounted() {
    },
    methods: {
        isItemActive(index) { // актинвые элементы
            let newData = this._values[index];
            let data = this._values[this._active_value];

            if( newData <= data) {
                return true;
            } else {
                return false;
            }
        },
        isLineActive(index) { // текущий элемент
            if( this._active_value == index) {
                return true;
            } else {
                return false;
            }
        },
        setIndex(index){ 
            // console.log('index ', index )
            this._active_value = index;
            this.$emit('selectedValue', index)
        },
        setValue(index) {
            // console.log(' stap ', value )

            this.setIndex(index)
        }
    },
    computed: {
   
    },
    watch: {
        active_value(newValue, oldValue) {
            console.log('value newValue ', newValue )
            this._active_value = newValue;
            console.log('input_value ', this._active_value )
        }
    }
}
</script>
<style>
</style>