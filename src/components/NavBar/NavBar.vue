<template>
    <nav class="menu">
        <GlobalBtn 
            class="menu__btn"
            :class="btnNavClass"
            v-for="item in btns"
            :key="item.id"
            :buttonName="item.name"
            :buttonId="item.id"
            @selected-button="switchPage"
        />
        <DropdownMenu 
            class="menu__dropdown-inner"
            :itemNames="['Профиль', 'Выход']"
        >
            <GlobalBtn 
                class="menu__dropdown-btn"
                :class="btnDropdownClass"
                
            >
                <img
                    class="menu__icon" src="@/assets/images/user-icon.png" width="24" height="24" alt="user-icon"
                >
                <IconSvg :svgParam="svgData"/>
            </GlobalBtn>
        </DropdownMenu>
    </nav>
</template>

<script>
import DropdownMenu from '@/components/UiComponents/DropdownMenu/DropdownMenu.vue'
import GlobalBtn from '@/components/UiComponents/GlobalBtn/GlobalBtn.vue'
import IconSvg from '@/components/UiComponents/IconSvg/IconSvg.vue'

export default {
    name: "NavBar",

    components: {
        DropdownMenu,
        GlobalBtn,
        IconSvg
    },

    data() {
        return {
            svgData: {
                name: 'dropdown-arrow',
                width: '13',
                height: '8'
            },
            btns: [
                {
                    name: 'Проекты',
                    id: 'projects'
                },
                {
                    name: 'Задачи',
                    id: 'tasks'
                },
                {
                    name: 'Пользователи',
                    id: 'users'
                }
            ],

            btnNav: {
                navBtn: true,
                active: false
            },

            btnDropdown: {
                dropdownBtn: true,
                opened: false,
            }
            
        }
    },

    props: {
        componentName: {
            type: String
        }
    },

    methods: {
        switchPage(e) {
            this.$emit('switch-pages', e.target.id)
        },
    },

    computed: {
        btnNavClass() {
            return {
                'menu-btn': this.btnNav.navBtn,
                'menu-btn_active': this.btnNav.active,
            }
        },

        btnDropdownClass() {
            return {
                'dropdown-btn': this.btnDropdown.dropdownBtn,
                'dropdown-btn_active': this.btnDropdown.opened,
            }
        }
    }

}
</script>

