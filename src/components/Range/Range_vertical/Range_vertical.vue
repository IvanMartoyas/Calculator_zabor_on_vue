<template>
    <div class="range_vertical__werapper">
        <div class="calc__top calc__row">
            <div class="calc__title">{{ title }}  
        
            <b v-if="_values.length == 1">&nbsp; - {{_values[0] }} </b>
        </div>
        
            <select class="select_range" v-model="_active_value" @change="selectedValue()" v-if="_values.length > 1">
                <option 
                    v-for="(value, i) in _values"
                    :key ="value"
                    :selected="_active_value == i"
                    :value="i"

                >{{ value }}</option>
            </select>

        </div>
        <div class="calc__content">
            <div class="calc__row calc__row_img range_vertical_wrapper" >
                <Range_vertical_slider
                    v-if="_values.length > 1"
                    :values = "_values"
                    :active_value = "_active_value"
                    @selectedValue="selectedValue"
                ></Range_vertical_slider>
                <img class="img_range" src="@/assets/img/man.png">
            </div>
        </div>
    </div>
   
</template>
<script>
import Range_vertical_slider from './_Range_vertical_slider.vue';

export default {
    components: {
        Range_vertical_slider,
    },
    props: ['values', 'active_value', 'title'],
    data() {
        return {
            _values: this.values,
            _active_value: this.active_value,
        }
    },
    mounted() {
        // console.log('this.values[this.active_value] ',this._values[this._active_value])
    },
    methods: {
        selectedValue(index){ 
            if(index == undefined) {
                index = this._active_value;
            }
            console.log("set data ", index)
            this._active_value = index;
            this.$emit('selectedValue', this._active_value);
        },
        changeValue() {

        }
    },
    computed: {
        data() {
            
        },
    },
    watch: {
        values(newValue, oldValue) { 
        }
    }
}
</script>
<style>
    @import '../style.css';
    
    .range_vertical__werapper {
        align-items: flex-start;
    }
    .select_range {
        display: inline-block;
        padding: 5px 15px;
        border: 1px solid #d0d0d0;
        width: auto;
        max-width: 105px;
        height: 38px;
        background-color: transparent;
        font-size: 14px;
        margin-right: 10px;
        margin-left: 25px;
    }
    .select_range option {
        /* cursor: pointer; */
    }
</style>