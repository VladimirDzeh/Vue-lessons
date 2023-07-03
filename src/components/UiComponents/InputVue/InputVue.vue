<template>
<div class="box">
    <input 
        class="box__input"
        type="text"
        :placeholder="text"
        :value="value"
        @input="updateValue($event.target.value)"
        :id="id"
    >
    <button 
        class="box__btn"
        
    >
        <IconSvg 
            class="box__icon-clear" 
            :svgParam="svgClear"
            v-show="showX"
        />
    </button>
    <button class="box__btn">
        <IconSvg 
            class="box__icon-search" 
            :svgParam="svgSearch"
            v-show="showLoupe"
        />
    </button>
</div>
</template>

<script>
import IconSvg from '@/components/UiComponents/IconSvg/IconSvg.vue'

export default {
    name: "InputVue",

    components: {
        IconSvg
    },

    data() {
        return {
            svgSearch: {
                name: 'search',
                width: '24',
                height: '24'
            },
            svgClear: {
                name: 'clear',
                width: '16',
                height: '16'
            },
        }
    },

    props: {
        text: {
            type: String,
            default: 'Введите текст...'
        },
        id: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        },
        showLoupe: {
            type: Boolean,
            default: false
        },
        showX: {
            type: Boolean,
            default: false
        }
    },
    
    methods: {
        updateValue(newValue) {
            this.$emit('input', newValue);
        }
    }

}
</script>

