<template>
   
        <div class="calc__top calc__row">
            <div class="calc__title">{{ title }}</div>
       
            <input type="number" :min="min" :max="max" class="calc__fild" v-model="input_model" @input="changeValue"/>
        </div>
        <div class="calc__content">
            <Range_slider
                :min="min"    
                :max="max"    
                :step="step"    
                :value="input_model"  
                @selectedValue="selectedValue"  
            ></Range_slider>
        </div>

</template>
<script>
import Range_slider from './_Range_gorizontal_slider.vue';

export default {
    components: {
        Range_slider,
    },
    props: ['min', 'max', 'value', 'step', 'title'],
    data() {
        return {
            input_model: this.value,
        }
    },
    mounted() {

    },
    methods: {
        selectedValue(value){ 
            this.input_model = value;
            this.$emit('selectedValue', this.input_model);
        },
        changeValue() {
            if(this.input_model > this.max) {
                this.input_model = this.max;
            }
            if(this.input_model < 0 ) {
                this.input_model = 0;
            }
            this.$emit('selectedValue', this.input_model);
            console.log("set")
        }
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
    },
    watch: {
        input_model(newValue, oldValue) { 
        }
    }
}
</script>
<style>
    @import '../style.css';

</style>