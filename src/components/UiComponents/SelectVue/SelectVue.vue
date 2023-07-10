<template>
  <div class="select">
    <div 
        class="select__title"
        @click="visible = !visible"
    >
        <p class="select__name">
            {{choosedItem}}
        </p>
        <button 
            class="select__btn"
            v-show="showX"
        >
            <IconSvg class="select__icon-clear" :svgParam="svgClear"/>
        </button>
        <button class="select__btn">
            <IconSvg class="select__icon-arrow" :svgParam="svgArrow"/>
        </button>
        <div 
            class="select__list"
            v-if="visible"
            >
            <slot></slot>
            <p  
                class="select__item"
                v-for="(item, index) in info"
                :key="index"
                @click="chooseItem(item)"
            >
                {{item[keyName]}}
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import IconSvg from '@/components/UiComponents/IconSvg/IconSvg.vue'

export default {
    name: "SelectVue",

    components: {
        IconSvg
    },

     data() {
        return {
            svgClear: {
                name: 'clear',
                width: '16',
                height: '16'
            },
            svgArrow: {
                name: 'dropdown-arrow',
                width: '16',
                height: '16'
            },
            visible: false
        }
    },

    props: {
        info: {
            type: Array,
            default: []
        },
        keyName: {
            type: String
        },
        choosedItem: {
            type: String,
            default: ''
        },
        showX: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        chooseItem(item) {
            this.$emit('choice', item)
        }
    }

}
</script>

<style>

</style>