<template>
    <div class="colors calc__row">
        <div class="colors__selected border-right calc__rowItem">
            <div class="calc__title">{{_title}}</div>
            <div class="calc__subTitle">Текущий цвет</div>
            <div class="calc__row colors__selectItem">
              
                <div class="colors__select" 
                    :style="{backgroundColor: colors[_active_color].value}" 
                ></div>
                <div class="colors__value">{{ colors[_active_color].title}}</div>
          
            </div>
        </div>
        <div class="calc__rowItem">
            <div class="calc__title">Выбрать другой цвет</div>
            <div class="calc__subTitle">Стандартные цвета</div>
            <div class="calc__row colors__items">
                <div
                    v-for="(color, i) in colors" :key="color.id" 
                    class="colors__item" 
                    :style="{backgroundColor: color.value}" 
                    :id="color.id" 
                    :title="color.title"
                    @click="setValue(i)"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['colors', 'active_color', 'title'],
    data() {
        return {
           _active_color: 0,
           _title: this.title || 'Цвет ограждения',
           
        }
    },
    mounted() {
        this._active_color = this.active_color;
    },
    methods: {
        setValue(val) {
            this._active_color = val;
            this.$emit('selected_color', val)
        }
    }
}
</script>
<style>
    @import './style.css';

</style>