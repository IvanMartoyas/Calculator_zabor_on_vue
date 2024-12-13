<template>
    <div class="block_item"  :class="{active: _active_index}"> 
        <div class="block_item__item">
            <div class="block_item__img" @click="setActive()">
                <img :src="img" :alt="title">
            </div>
            <div class="block_item__title" @click="setActive()">
              {{title}} 
                <i class="element__toolTip--show" v-if="info != '' || info != undefined"> ?
                    <span class="element__toolTip">
                        {{ title }}
                    </span>
                </i>
            </div>
            <input type="number" @click="_active_index=true" v-if="input" v-model="input_value" @input="setInput()">
            
        </div>
    </div>  
</template>

<script>
// компонент отрисовывает выбор размера ячейки
export default {
    props: ['title', 'info', 'input', 'img', 'input_data','active_value'],
    data() {
        return {
           _active_index: this.active_value || false,
           _info_hover: this.info_hover || false,
           input_value: this.input_data || 0,
           
        }
    },
    mounted() {
       if(this.input_data != 0) {
        this._active_index = true;
       }
    },
    methods: {
        setActive() {
            if(this.input_value != 0) { 

            } else {
                this._active_index = !this._active_index;
            }
        },
        setInput(){ 
            
            if(this.input_value < 0) {
                this.input_value = 0;
            }
            this._active_index = true;
            this.$emit('setValue', this.input_value)
        }
    },
    watch: {
        input_data(newValue) {
            return this.input_value = newValue;
        },
        active_value(newValue) {
            if(newValue > 0) {
                this._active_index = true;
            }
        }
    }
}
</script>
<style scoped>
    @import './style.css';

</style>