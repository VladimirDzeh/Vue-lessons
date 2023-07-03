<template>
    <div 
        class="dropdown-menu"
        @click="visible = !visible"
    >
        <slot></slot>
        <ul 
            class="dropdown-menu__list"
            v-if="visible"
        >
            <li 
                class="dropdown-menu__item"
                v-for="itemName in itemNames"
                :key="itemName"
            >
                <a 
                    class="dropdown-menu__link" 
                    href="#"
                >
                {{itemName}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
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


}
</script>
