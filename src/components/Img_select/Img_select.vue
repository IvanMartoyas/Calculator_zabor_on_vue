<template>
    <div class="img_select">
        <div class="calc__top calc__row">
            <div class="calc__title">{{ title }}</div>
        </div>
        <div class="calc__content">

            <div class="typeFance">
                <div 
                    v-for="(item ,i) in values"
                    :key="item"
                    class="typeFance__item" 
                    @click="setValue(i)" 
                    :class="{active: _active_index == i}"
                >   
                    <div class="typeFance__img">
                        <img :src="require(`../../assets/img/${item.img}`)" :alt="item.title">
                    </div>
                    <div class="typeFance__title">
                        {{item.title}} <i v-if="_info_hover"> ?</i>
                        <span class="typeFance__toolTip" v-if="_info_hover">{{item.title}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
// info_hover ture/false - скрывает либо пказывает tooltip
/**
 * структура входного массива
 *  values: [
        {
            title: 'На фланец',
            img: 'post1.jpg'
        }, 
    ]
 */
// компонент отрисовывает выбор размера ячейки
export default {
    props: ['values', 'active_value', 'title', 'info_hover'],
    data() {
        return {
           _active_index: this.active_value || 0,
           _info_hover: this.info_hover || false,
        }
    },
    mounted() {
       
    },
    methods: {
        setValue(val) {
        
            this._active_index = val;
            this.$emit('img_selected', val)
        },
    }
}
</script>
<style scoped>
    @import './style.css';

</style>