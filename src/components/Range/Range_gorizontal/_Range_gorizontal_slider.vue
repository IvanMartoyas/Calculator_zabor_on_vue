<template>
<div class="range">
   
    <input class="_range" 
        type="range" 
        v-model="input_value"
        :min="min" 
        :max="max" 
        @change="selectedValue(input_value)"
     >
    <div class="range__items">
        <span class="range__item" @click="setValue(0)"  :class="{active: isActiveClassItem(0)}" >
            <i></i>
        </span>
        <span 
            class="range__item" 
            :class="{active: isActiveClassItem(value_stap * (i+1)), active__item: isSelectItem(value_stap * (i+1))}"
            @click="setValue(value_stap * (i+1))" 
            v-for="(elem, i) in step_count" 
            :key="elem"
        ><i :style="{height: value_stap * (i+1)}" ></i></span>
    </div>

    <div class="range__labels calc__row">
        <span  @click="setValue(0)" :class="{active: isActiveClassItem(0)}"> 0 м.</span>
        <span 
            v-for="i in max_lables" :key="i"
            @click="setValue(step_label * i)"
            :class="{active: isActiveClassItem(step_label * (i))}"
            >{{step_label * i}}м.
            
        </span>
    </div>  

    <div 
        
        class="tooltip"  
        :style="{left: (input_value / (max / 100)) + '%'}" ><span>{{ input_value }}</span>
    </div>

</div>
</template>

<script>

export default {
    props: ['min', 'max', 'value', 'step'],
    data() {
        return {
            // input_model: 0
            input_value: 0,
            span_elements: [],
            value_stap: 0,//
            step_count: 0,// количество которое нужно отрисовать
            max_lables: 4,
            step_label: 0,
        }
    },
    mounted() {
        this.input_value = this.value;
        this.step_label = this.max / this.max_lables;
        this.render_count_span();
    },
    methods: {
        render_count_span() {
            // рендрит полоски
            // определяю  активные ли они
            this.value_stap = this.max  * ( this.step /100) ;
            this.step_count = this.max / this.value_stap;
            // console.log(this.step_size )
        },
        isActiveClassItem(value) { // актинвые элементы
            if( this.input_value >= value) {
                return true;
            } else {
                return false;
            }
        },
        isSelectItem(value) { // текущий элемент
            if( this.input_value == value) {
                return true;
            } else {
                return false;
            }
        },
        selectedValue(){ 
            this.$emit('selectedValue', this.input_value)
        },
        setValue(value) {
            // console.log(' stap ', value )
            this.input_value = value;
            this.render_count_span();// перерендриваю полски
            this.selectedValue()
        }
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
    },
    watch: {
        value(newValue, oldValue) {
            // console.log('value newValue ', newValue )
            this.input_value = newValue;
            // console.log('input_value ', this.input_value )
        }
    }

} 
            
</script>
<style>
   @import '../style.css';
 
</style>