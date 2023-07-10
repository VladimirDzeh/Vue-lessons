<template>
    <div 
        class="dropdown-menu"
        @click="visible = !visible"
    >
        <slot></slot>
        <ul 
            class="dropdown-menu__list"
            v-click-outside="onClickOutside"
            v-if="visible"
        >
            <li 
                class="dropdown-menu__item"
                v-for="(itemName, index) in itemNames"
                :key="index"
            >
                {{itemName}}
            </li>
        </ul>
    </div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
    name: 'DropdownMenu',

    props: {
        itemNames: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            visible: false
        }
    },

    directives: {
        clickOutside: vClickOutside.directive
    },

    methods: {
      onClickOutside () {
        this.visible = false;
      }
    }


}
</script>
