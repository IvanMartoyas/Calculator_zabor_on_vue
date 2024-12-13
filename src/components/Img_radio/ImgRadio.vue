<template>
    <div class="img_radio">
    
        <div class="calc__top">
            <div class="calc__title">{{ title }}</div>
        </div>
          
        <div class="calc__content calc__row">
            
            <div class="img_radio__img">
                <img :src="img" :alt="title">
            </div>
            <div class="img_radio__items">
                <div 
                    class="img_radio__item"
                    v-for="(item, i) in values"
                    :key="i"
                    @click="setValue(i)"
                >
                    <div class="img_radio__subtitle">{{ item.subTitle  }}</div>
                    <div class="img_radio__block">
                        <div class="img_radio__radio" :class="{active: _active_index == i}"></div>
                        <dvi class="img_radio__title">{{ item.title }}</dvi>
                    </div>
                    
                </div>
            </div>
                
   
        </div>      

    </div>

</template>

<script>

export default {
    props: ['values', 'active_value', 'title','img'],
    data() {
        return {
           _active_index: this.active_value || 0,
        }
    },
    mounted() {
       
    },
    methods: {
        setValue(val) {
            this._active_index = val;
            this.$emit('selected_value', val)
        }
    }
}
</script>
<style>
    @import './style.css';

</style>